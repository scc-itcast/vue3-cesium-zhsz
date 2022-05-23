'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class CameraFlightPath {
  static createTween(scene, options) {
    const { Cartesian2, Cartesian3, defaultValue, defined, DeveloperError, EasingFunction, Math: CesiumMath, SceneMode } = Cesium;
    options = defaultValue(options, {});
    let destination = options.destination;
    if (!defined(scene)) {
      throw new DeveloperError("scene is required.");
    }
    if (!defined(destination)) {
      throw new DeveloperError("destination is required.");
    }
    const mode = scene.mode;
    if (mode === SceneMode.MORPHING) {
      return emptyFlight();
    }
    const convert = defaultValue(options.convert, true);
    const projection = scene.mapProjection;
    const ellipsoid = projection.ellipsoid;
    const maximumHeight = options.maximumHeight;
    const flyOverLongitude = options.flyOverLongitude;
    const flyOverLongitudeWeight = options.flyOverLongitudeWeight;
    const pitchAdjustHeight = options.pitchAdjustHeight;
    let easingFunction = options.easingFunction;
    if (convert && mode !== SceneMode.SCENE3D) {
      ellipsoid.cartesianToCartographic(destination, scratchCartographic);
      destination = projection.project(scratchCartographic, scratchDestination);
    }
    const camera = scene.camera;
    const transform = options.endTransform;
    if (defined(transform)) {
      camera._setTransform(transform);
    }
    let duration = options.duration;
    if (!defined(duration)) {
      duration = Math.ceil(Cartesian3.distance(camera.position, destination) / 1e6) + 2;
      duration = Math.min(duration, 3);
    }
    const heading = defaultValue(options.heading, 0);
    const pitch = defaultValue(options.pitch, -CesiumMath.PI_OVER_TWO);
    const roll = defaultValue(options.roll, 0);
    const controller = scene.screenSpaceCameraController;
    controller.enableInputs = false;
    const complete = wrapCallback(controller, options.complete);
    const cancel = wrapCallback(controller, options.cancel);
    const frustum = camera.frustum;
    let empty = scene.mode === SceneMode.SCENE2D;
    empty = empty && Cartesian2.equalsEpsilon(camera.position, destination, CesiumMath.EPSILON6);
    empty = empty && CesiumMath.equalsEpsilon(Math.max(frustum.right - frustum.left, frustum.top - frustum.bottom), destination.z, CesiumMath.EPSILON6);
    empty = empty || scene.mode !== SceneMode.SCENE2D && Cartesian3.equalsEpsilon(destination, camera.position, CesiumMath.EPSILON10);
    empty = empty && CesiumMath.equalsEpsilon(CesiumMath.negativePiToPi(heading), CesiumMath.negativePiToPi(camera.heading), CesiumMath.EPSILON10) && CesiumMath.equalsEpsilon(CesiumMath.negativePiToPi(pitch), CesiumMath.negativePiToPi(camera.pitch), CesiumMath.EPSILON10) && CesiumMath.equalsEpsilon(CesiumMath.negativePiToPi(roll), CesiumMath.negativePiToPi(camera.roll), CesiumMath.EPSILON10);
    if (empty) {
      return emptyFlight(complete, cancel);
    }
    const updateFunctions = new Array(4);
    updateFunctions[SceneMode.SCENE2D] = createUpdate2D;
    updateFunctions[SceneMode.SCENE3D] = createUpdate3D;
    updateFunctions[SceneMode.COLUMBUS_VIEW] = createUpdateCV;
    if (duration <= 0) {
      const newOnComplete = function() {
        const update2 = updateFunctions[mode](scene, 1, destination, heading, pitch, roll, maximumHeight, flyOverLongitude, flyOverLongitudeWeight, pitchAdjustHeight);
        update2({ time: 1 });
        if (typeof complete === "function") {
          complete();
        }
      };
      return emptyFlight(newOnComplete, cancel);
    }
    const update = updateFunctions[mode](scene, duration, destination, heading, pitch, roll, maximumHeight, flyOverLongitude, flyOverLongitudeWeight, pitchAdjustHeight);
    if (!defined(easingFunction)) {
      const startHeight = camera.positionCartographic.height;
      const endHeight = mode === SceneMode.SCENE3D ? ellipsoid.cartesianToCartographic(destination).height : destination.z;
      if (startHeight > endHeight && startHeight > 11500) {
        easingFunction = EasingFunction.CUBIC_OUT;
      } else {
        easingFunction = EasingFunction.QUINTIC_IN_OUT;
      }
    }
    return {
      duration,
      easingFunction,
      startObject: {
        time: 0
      },
      stopObject: {
        time: duration
      },
      update,
      complete,
      cancel
    };
  }
}
function getAltitude(frustum, dx, dy) {
  const { PerspectiveFrustum, PerspectiveOffCenterFrustum } = Cesium;
  let near;
  let top;
  let right;
  if (frustum instanceof PerspectiveFrustum) {
    const tanTheta = Math.tan(0.5 * frustum.fovy);
    near = frustum.near;
    top = frustum.near * tanTheta;
    right = frustum.aspectRatio * top;
    return Math.max(dx * near / right, dy * near / top);
  } else if (frustum instanceof PerspectiveOffCenterFrustum) {
    near = frustum.near;
    top = frustum.top;
    right = frustum.right;
    return Math.max(dx * near / right, dy * near / top);
  }
  return Math.max(dx, dy);
}
const scratchCart = {};
const scratchCart2 = {};
function createPitchFunction(startPitch, endPitch, heightFunction, pitchAdjustHeight) {
  const { defined, Math: CesiumMath } = Cesium;
  if (defined(pitchAdjustHeight) && heightFunction(0.5) > pitchAdjustHeight) {
    const startHeight = heightFunction(0);
    const endHeight = heightFunction(1);
    const middleHeight = heightFunction(0.5);
    const d1 = middleHeight - startHeight;
    const d2 = middleHeight - endHeight;
    return function(time) {
      const altitude = heightFunction(time);
      if (time <= 0.5) {
        const t1 = (altitude - startHeight) / d1;
        return CesiumMath.lerp(startPitch, -CesiumMath.PI_OVER_TWO, t1);
      }
      const t2 = (altitude - endHeight) / d2;
      return CesiumMath.lerp(-CesiumMath.PI_OVER_TWO, endPitch, 1 - t2);
    };
  }
  return function(time) {
    return CesiumMath.lerp(startPitch, endPitch, time);
  };
}
function createHeightFunction(camera, destination, startHeight, endHeight, optionAltitude) {
  const { Cartesian3, defined, Math: CesiumMath } = Cesium;
  let altitude = optionAltitude;
  const maxHeight = Math.max(startHeight, endHeight);
  if (!defined(altitude)) {
    const start = camera.position;
    const end = destination;
    const up = camera.up;
    const right = camera.right;
    const frustum = camera.frustum;
    const diff = Cartesian3.subtract(start, end, scratchCart);
    const verticalDistance = Cartesian3.magnitude(Cartesian3.multiplyByScalar(up, Cartesian3.dot(diff, up), scratchCart2));
    const horizontalDistance = Cartesian3.magnitude(Cartesian3.multiplyByScalar(right, Cartesian3.dot(diff, right), scratchCart2));
    altitude = Math.min(getAltitude(frustum, verticalDistance, horizontalDistance) * 0.2, 1e9);
  }
  if (maxHeight < altitude) {
    const power = 8;
    const factor = 1e6;
    const s = -Math.pow((altitude - startHeight) * factor, 1 / power);
    const e = Math.pow((altitude - endHeight) * factor, 1 / power);
    return function(t) {
      const x = t * (e - s) + s;
      return -Math.pow(x, power) / factor + altitude;
    };
  }
  return function(t) {
    return CesiumMath.lerp(startHeight, endHeight, t);
  };
}
function adjustAngleForLERP(startAngle, endAngle) {
  const { Math: CesiumMath } = Cesium;
  if (CesiumMath.equalsEpsilon(startAngle, CesiumMath.TWO_PI, CesiumMath.EPSILON11)) {
    startAngle = 0;
  }
  if (endAngle > startAngle + Math.PI) {
    startAngle += CesiumMath.TWO_PI;
  } else if (endAngle < startAngle - Math.PI) {
    startAngle -= CesiumMath.TWO_PI;
  }
  return startAngle;
}
const scratchStart = {};
function createUpdateCV(scene, duration, destination, heading, pitch, roll, optionAltitude) {
  const { Cartesian2, Cartesian3, Math: CesiumMath } = Cesium;
  const camera = scene.camera;
  const start = Cartesian3.clone(camera.position, scratchStart);
  const startPitch = camera.pitch;
  const startHeading = adjustAngleForLERP(camera.heading, heading);
  const startRoll = adjustAngleForLERP(camera.roll, roll);
  const heightFunction = createHeightFunction(camera, destination, start.z, destination.z, optionAltitude);
  function update(value) {
    const time = value.time / duration;
    camera.setView({
      orientation: {
        heading: CesiumMath.lerp(startHeading, heading, time),
        pitch: CesiumMath.lerp(startPitch, pitch, time),
        roll: CesiumMath.lerp(startRoll, roll, time)
      }
    });
    Cartesian2.lerp(start, destination, time, camera.position);
    camera.position.z = heightFunction(time);
  }
  return update;
}
function useLongestFlight(startCart, destCart) {
  const { Math: CesiumMath } = Cesium;
  if (startCart.longitude < destCart.longitude) {
    startCart.longitude += CesiumMath.TWO_PI;
  } else {
    destCart.longitude += CesiumMath.TWO_PI;
  }
}
function useShortestFlight(startCart, destCart) {
  const { Math: CesiumMath } = Cesium;
  const diff = startCart.longitude - destCart.longitude;
  if (diff < -CesiumMath.PI) {
    startCart.longitude += CesiumMath.TWO_PI;
  } else if (diff > CesiumMath.PI) {
    destCart.longitude += CesiumMath.TWO_PI;
  }
}
const scratchStartCart = {};
const scratchEndCart = {};
function createUpdate3D(scene, duration, destination, heading, pitch, roll, optionAltitude, optionFlyOverLongitude, optionFlyOverLongitudeWeight, optionPitchAdjustHeight) {
  const { Cartesian3, Cartographic, defined, Math: CesiumMath } = Cesium;
  const camera = scene.camera;
  const projection = scene.mapProjection;
  const ellipsoid = projection.ellipsoid;
  const startCart = Cartographic.clone(camera.positionCartographic, scratchStartCart);
  const startPitch = camera.pitch;
  const startHeading = adjustAngleForLERP(camera.heading, heading);
  const startRoll = adjustAngleForLERP(camera.roll, roll);
  const destCart = ellipsoid.cartesianToCartographic(destination, scratchEndCart);
  startCart.longitude = CesiumMath.zeroToTwoPi(startCart.longitude);
  destCart.longitude = CesiumMath.zeroToTwoPi(destCart.longitude);
  let useLongFlight = false;
  if (defined(optionFlyOverLongitude)) {
    const hitLon = CesiumMath.zeroToTwoPi(optionFlyOverLongitude);
    const lonMin = Math.min(startCart.longitude, destCart.longitude);
    const lonMax = Math.max(startCart.longitude, destCart.longitude);
    const hitInside = hitLon >= lonMin && hitLon <= lonMax;
    if (defined(optionFlyOverLongitudeWeight)) {
      const din = Math.abs(startCart.longitude - destCart.longitude);
      const dot = CesiumMath.TWO_PI - din;
      const hitDistance = hitInside ? din : dot;
      const offDistance = hitInside ? dot : din;
      if (hitDistance < offDistance * optionFlyOverLongitudeWeight && !hitInside) {
        useLongFlight = true;
      }
    } else if (!hitInside) {
      useLongFlight = true;
    }
  }
  if (useLongFlight) {
    useLongestFlight(startCart, destCart);
  } else {
    useShortestFlight(startCart, destCart);
  }
  const heightFunction = createHeightFunction(camera, destination, startCart.height, destCart.height, optionAltitude);
  const pitchFunction = createPitchFunction(startPitch, pitch, heightFunction, optionPitchAdjustHeight);
  function isolateUpdateFunction() {
    const startLongitude = startCart.longitude;
    const destLongitude = destCart.longitude;
    const startLatitude = startCart.latitude;
    const destLatitude = destCart.latitude;
    return function update(value) {
      const time = value.time / duration;
      const position = Cartesian3.fromRadians(CesiumMath.lerp(startLongitude, destLongitude, time), CesiumMath.lerp(startLatitude, destLatitude, time), heightFunction(time), scene.globe.ellipsoid);
      camera.setView({
        destination: position,
        orientation: {
          heading: CesiumMath.lerp(startHeading, heading, time),
          pitch: pitchFunction(time),
          roll: CesiumMath.lerp(startRoll, roll, time)
        }
      });
    };
  }
  return isolateUpdateFunction();
}
function createUpdate2D(scene, duration, destination, heading, pitch, roll, optionAltitude) {
  const { Cartesian2, Cartesian3, Math: CesiumMath } = Cesium;
  const camera = scene.camera;
  const start = Cartesian3.clone(camera.position, scratchStart);
  const startHeading = adjustAngleForLERP(camera.heading, heading);
  const startHeight = camera.frustum.right - camera.frustum.left;
  const heightFunction = createHeightFunction(camera, destination, startHeight, destination.z, optionAltitude);
  function update(value) {
    const time = value.time / duration;
    camera.setView({
      orientation: {
        heading: CesiumMath.lerp(startHeading, heading, time)
      }
    });
    Cartesian2.lerp(start, destination, time, camera.position);
    const zoom = heightFunction(time);
    const frustum = camera.frustum;
    const ratio = frustum.top / frustum.right;
    const incrementAmount = (zoom - (frustum.right - frustum.left)) * 0.5;
    frustum.right += incrementAmount;
    frustum.left -= incrementAmount;
    frustum.top = ratio * frustum.right;
    frustum.bottom = -frustum.top;
  }
  return update;
}
const scratchCartographic = {};
const scratchDestination = {};
function emptyFlight(complete, cancel) {
  return {
    startObject: {},
    stopObject: {},
    duration: 0,
    complete,
    cancel
  };
}
function wrapCallback(controller, cb) {
  function wrapped() {
    if (typeof cb === "function") {
      cb();
    }
    controller.enableInputs = true;
  }
  return wrapped;
}

exports["default"] = CameraFlightPath;
//# sourceMappingURL=CameraFlightPath.js.map
