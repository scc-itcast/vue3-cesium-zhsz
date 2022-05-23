'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var CameraFlightPath = require('./CameraFlightPath.js');
var vm = require('../../../utils/private/vm.js');
require('../../../utils/util.js');
var shared = require('@vue/shared');

function useCompass(props, { emit }, vcInstance) {
  const vectorScratch = {};
  const oldTransformScratch = {};
  const newTransformScratch = {};
  const centerScratch = {};
  let unsubscribeFromPostRender;
  let unsubscribeFromClockTick;
  let orbitMouseMoveFunction;
  let orbitMouseUpFunction;
  let orbitTickFunction;
  const heading = vue.ref(0);
  const orbitCursorAngle = vue.ref(0);
  const orbitCursorOpacity = vue.ref(0);
  let isOrbiting = false;
  let orbitLastTimestamp = 0;
  let orbitFrame = {};
  let orbitIsLook = false;
  let rotateMouseUpFunction;
  let rotateMouseMoveFunction;
  let isRotating = false;
  let rotateInitialCursorAngle = 0;
  let rotateFrame = {};
  let rotateIsLook = false;
  let rotateInitialCameraAngle = 0;
  let rotateInitialCameraDistance = {};
  const iconOuterTooltipRef = vue.ref(null);
  const iconInnerTooltipRef = vue.ref(null);
  const handleMouseDown = (e) => {
    var _a, _b;
    if (e.stopPropagation)
      e.stopPropagation();
    if (e.preventDefault)
      e.preventDefault();
    (_a = vm.$(iconOuterTooltipRef)) == null ? void 0 : _a.hide();
    (_b = vm.$(iconInnerTooltipRef)) == null ? void 0 : _b.hide();
    const { SceneMode, Cartesian2 } = Cesium;
    const scene = vcInstance.viewer.scene;
    if (scene.mode === SceneMode.MORPHING) {
      return true;
    }
    const compassElement = e.currentTarget;
    const compassRectangle = compassElement.getBoundingClientRect();
    const maxDistance = compassRectangle.width / 2;
    const center = new Cartesian2((compassRectangle.right - compassRectangle.left) / 2, (compassRectangle.bottom - compassRectangle.top) / 2);
    let clickLocation;
    if (e instanceof MouseEvent) {
      clickLocation = new Cartesian2(e.clientX - compassRectangle.left, e.clientY - compassRectangle.top);
    } else if (e instanceof TouchEvent) {
      clickLocation = new Cartesian2(e.changedTouches[0].clientX - compassRectangle.left, e.changedTouches[0].clientY - compassRectangle.top);
    }
    const vector = Cartesian2.subtract(clickLocation, center, vectorScratch);
    const distanceFromCenter = Cartesian2.magnitude(vector);
    const distanceFraction = distanceFromCenter / maxDistance;
    const nominalTotalRadius = 145;
    const norminalGyroRadius = 50;
    if (distanceFraction < norminalGyroRadius / nominalTotalRadius) {
      orbit(compassElement, vector);
    } else if (distanceFraction < 1) {
      rotate(compassElement, vector);
    } else {
      return true;
    }
  };
  const handleDoubleClick = (e) => {
    const { Cartesian2, Cartesian3, defined, Ellipsoid, Matrix4, Ray, SceneMode, Transforms } = Cesium;
    const { viewer } = vcInstance;
    const scene = viewer.scene;
    const camera = scene.camera;
    const sscc = scene.screenSpaceCameraController;
    if (scene.mode === SceneMode.MORPHING || !sscc.enableInputs) {
      return true;
    }
    if (scene.mode === SceneMode.COLUMBUS_VIEW && !sscc.enableTranslate) {
      return;
    }
    if (scene.mode === SceneMode.SCENE3D || scene.mode === SceneMode.COLUMBUS_VIEW) {
      if (!sscc.enableLook) {
        return;
      }
      if (scene.mode === SceneMode.SCENE3D) {
        if (!sscc.enableRotate) {
          return;
        }
      }
    }
    const windowPosition = new Cartesian2();
    windowPosition.x = scene.canvas.clientWidth / 2;
    windowPosition.y = scene.canvas.clientHeight / 2;
    const pickRayScratch = new Ray();
    const ray = camera.getPickRay(windowPosition, pickRayScratch);
    const center = scene.globe.pick(ray, scene, centerScratch);
    if (!shared.isObject(center) || !defined(center)) {
      viewer.camera.flyHome();
      return;
    }
    const listener = vm.getInstanceListener(vcInstance, "compassEvt");
    listener && emit("compassEvt", {
      type: "reset",
      camera: viewer.camera,
      status: "start",
      target: e.currentTarget
    });
    const rotateFrame2 = Transforms.eastNorthUpToFixedFrame(center, viewer.scene.globe.ellipsoid);
    const lookVector = Cartesian3.subtract(center, camera.position, new Cartesian3());
    const flight = CameraFlightPath["default"].createTween(scene, {
      destination: Matrix4.multiplyByPoint(rotateFrame2, new Cartesian3(0, 0, Cartesian3.magnitude(lookVector)), new Cartesian3()),
      direction: Matrix4.multiplyByPointAsVector(rotateFrame2, new Cartesian3(0, 0, -1), new Cartesian3()),
      up: Matrix4.multiplyByPointAsVector(rotateFrame2, new Cartesian3(0, 1, 0), new Cartesian3()),
      duration: props.duration,
      complete: () => {
        listener && emit("compassEvt", {
          type: "reset",
          camera: viewer.camera,
          status: "end",
          target: e.currentTarget
        });
      },
      cancel: () => {
        listener && emit("compassEvt", {
          type: "reset",
          camera: viewer.camera,
          status: "cancel",
          target: e.currentTarget
        });
      }
    });
    scene.tweens.add(flight);
  };
  const resetRotater = () => {
    orbitCursorOpacity.value = 0;
    orbitCursorAngle.value = 0;
  };
  const viewerChange = () => {
    const { defined } = Cesium;
    if (defined(vcInstance.viewer)) {
      if (unsubscribeFromPostRender) {
        unsubscribeFromPostRender();
        unsubscribeFromPostRender = void 0;
      }
      unsubscribeFromPostRender = vcInstance.viewer.scene.postRender.addEventListener(function() {
        if (heading.value !== vcInstance.viewer.scene.camera.heading) {
          heading.value = vcInstance.viewer.scene.camera.heading;
        }
      });
    } else {
      if (unsubscribeFromPostRender) {
        unsubscribeFromPostRender();
        unsubscribeFromPostRender = void 0;
      }
    }
  };
  const orbit = (compassElement, cursorVector) => {
    const { Cartesian2, Cartesian3, defined, getTimestamp, Math: CesiumMath, Matrix4, Ray, SceneMode, Transforms } = Cesium;
    let scene = vcInstance.viewer.scene;
    let camera = scene.camera;
    const sscc = scene.screenSpaceCameraController;
    if (scene.mode === SceneMode.MORPHING || !sscc.enableInputs) {
      return;
    }
    switch (scene.mode) {
      case SceneMode.COLUMBUS_VIEW:
        if (sscc.enableLook) {
          break;
        }
        if (!sscc.enableTranslate || !sscc.enableTilt) {
          return;
        }
        break;
      case SceneMode.SCENE3D:
        if (sscc.enableLook) {
          break;
        }
        if (!sscc.enableTilt || !sscc.enableRotate) {
          return;
        }
        break;
      case Cesium.SceneMode.SCENE2D:
        if (!sscc.enableTranslate) {
          return;
        }
        break;
    }
    const listener = vm.getInstanceListener(vcInstance, "compassEvt");
    listener && emit("compassEvt", {
      type: "orbit",
      camera: scene.camera,
      status: "start",
      target: compassElement
    });
    document.removeEventListener("mousemove", orbitMouseMoveFunction, false);
    document.removeEventListener("mouseup", orbitMouseUpFunction, false);
    document.removeEventListener("touchmove", orbitMouseMoveFunction, false);
    document.removeEventListener("touchend", orbitMouseUpFunction, false);
    if (defined(orbitTickFunction)) {
      vcInstance.viewer.clock.onTick.removeEventListener(orbitTickFunction);
    }
    ;
    orbitMouseMoveFunction = void 0;
    orbitMouseUpFunction = void 0;
    orbitTickFunction = void 0;
    isOrbiting = true;
    orbitLastTimestamp = getTimestamp();
    const windowPosition = new Cartesian2();
    windowPosition.x = scene.canvas.clientWidth / 2;
    windowPosition.y = scene.canvas.clientHeight / 2;
    const pickRayScratch = new Ray();
    const ray = camera.getPickRay(windowPosition, pickRayScratch);
    const center = scene.globe.pick(ray, scene, centerScratch);
    if (!defined(center)) {
      orbitFrame = Transforms.eastNorthUpToFixedFrame(camera.positionWC, scene.globe.ellipsoid, newTransformScratch);
      orbitIsLook = true;
    } else {
      orbitFrame = Transforms.eastNorthUpToFixedFrame(center || new Cesium.Cartesian3(), scene.globe.ellipsoid, newTransformScratch);
      orbitIsLook = false;
    }
    orbitTickFunction = function(e) {
      const timestamp = getTimestamp();
      const deltaT = timestamp - orbitLastTimestamp;
      const rate = (orbitCursorOpacity.value - 0.5) * 2.5 / 1e3;
      const distance = deltaT * rate;
      const angle = orbitCursorAngle.value + CesiumMath.PI_OVER_TWO;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      scene = vcInstance.viewer.scene;
      camera = scene.camera;
      const oldTransform = Matrix4.clone(camera.transform, oldTransformScratch);
      camera.lookAtTransform(orbitFrame);
      if (orbitIsLook) {
        camera.look(Cartesian3.UNIT_Z, -x);
        camera.look(camera.right, -y);
      } else {
        camera.rotateLeft(x);
        camera.rotateUp(y);
      }
      camera.lookAtTransform(oldTransform);
      orbitLastTimestamp = timestamp;
    };
    function updateAngleAndOpacity(vector, compassWidth) {
      const angle = Math.atan2(-vector.y, vector.x);
      orbitCursorAngle.value = CesiumMath.zeroToTwoPi(angle - CesiumMath.PI_OVER_TWO);
      const distance = Cartesian2.magnitude(vector);
      const maxDistance = compassWidth / 2;
      const distanceFraction = Math.min(distance / maxDistance, 1);
      const easedOpacity = 0.5 * distanceFraction * distanceFraction + 0.5;
      orbitCursorOpacity.value = easedOpacity;
    }
    orbitMouseMoveFunction = function(e) {
      const compassRectangle = compassElement.getBoundingClientRect();
      const center2 = new Cartesian2((compassRectangle.right - compassRectangle.left) / 2, (compassRectangle.bottom - compassRectangle.top) / 2);
      let clickLocation;
      if (e instanceof MouseEvent) {
        clickLocation = new Cartesian2(e.clientX - compassRectangle.left, e.clientY - compassRectangle.top);
      } else if (e instanceof TouchEvent) {
        clickLocation = new Cartesian2(e.changedTouches[0].clientX - compassRectangle.left, e.changedTouches[0].clientY - compassRectangle.top);
      }
      const vector = Cartesian2.subtract(clickLocation, center2, vectorScratch);
      updateAngleAndOpacity(vector, compassRectangle.width);
      listener && emit("compassEvt", {
        type: "orbit",
        camera: scene.camera,
        status: "changing",
        target: compassElement
      });
    };
    orbitMouseUpFunction = function(e) {
      isOrbiting = false;
      document.removeEventListener("mousemove", orbitMouseMoveFunction, false);
      document.removeEventListener("mouseup", orbitMouseUpFunction, false);
      document.removeEventListener("touchmove", orbitMouseMoveFunction, false);
      document.removeEventListener("touchend", orbitMouseUpFunction, false);
      if (defined(orbitTickFunction)) {
        vcInstance.viewer.clock.onTick.removeEventListener(orbitTickFunction);
      }
      ;
      orbitMouseMoveFunction = void 0;
      orbitMouseUpFunction = void 0;
      orbitTickFunction = void 0;
      resetRotater();
      listener && emit("compassEvt", {
        type: "orbit",
        camera: scene.camera,
        status: "end",
        target: compassElement
      });
    };
    document.addEventListener("mousemove", orbitMouseMoveFunction, false);
    document.addEventListener("mouseup", orbitMouseUpFunction, false);
    document.addEventListener("touchmove", orbitMouseMoveFunction, false);
    document.addEventListener("touchend", orbitMouseUpFunction, false);
    unsubscribeFromClockTick = vcInstance.viewer.clock.onTick.addEventListener(orbitTickFunction);
    updateAngleAndOpacity(cursorVector, compassElement.getBoundingClientRect().width);
  };
  const rotate = (compassElement, cursorVector) => {
    if (!props.enableCompassOuterRing) {
      return;
    }
    const scene = vcInstance.viewer.scene;
    let camera = scene.camera;
    const sscc = scene.screenSpaceCameraController;
    if (scene.mode === Cesium.SceneMode.MORPHING || scene.mode === Cesium.SceneMode.SCENE2D || !sscc.enableInputs) {
      return;
    }
    if (!sscc.enableLook && (scene.mode === Cesium.SceneMode.COLUMBUS_VIEW || scene.mode === Cesium.SceneMode.SCENE3D && !sscc.enableRotate)) {
      return;
    }
    document.removeEventListener("mousemove", rotateMouseMoveFunction, false);
    document.removeEventListener("touchmove", rotateMouseMoveFunction, false);
    document.removeEventListener("mouseup", rotateMouseUpFunction, false);
    document.removeEventListener("touchend", rotateMouseUpFunction, false);
    const { Cartesian2, Cartesian3, defined, Math: CesiumMath, Matrix4, Ray, Transforms } = Cesium;
    rotateMouseMoveFunction = void 0;
    rotateMouseUpFunction = void 0;
    const listener = vm.getInstanceListener(vcInstance, "compassEvt");
    listener && emit("compassEvt", {
      type: "rotate",
      camera: scene.camera,
      status: "start",
      target: compassElement
    });
    isRotating = true;
    rotateInitialCursorAngle = Math.atan2(-cursorVector.y, cursorVector.x);
    const windowPosition = new Cartesian2();
    windowPosition.x = scene.canvas.clientWidth / 2;
    windowPosition.y = scene.canvas.clientHeight / 2;
    const pickRayScratch = new Ray();
    const ray = camera.getPickRay(windowPosition, pickRayScratch);
    const viewCenter = scene.globe.pick(ray, scene, centerScratch);
    if (!defined(viewCenter)) {
      rotateFrame = Transforms.eastNorthUpToFixedFrame(camera.positionWC, scene.globe.ellipsoid, newTransformScratch);
      rotateIsLook = true;
    } else {
      rotateFrame = Transforms.eastNorthUpToFixedFrame(viewCenter || new Cartesian3(), scene.globe.ellipsoid, newTransformScratch);
      rotateIsLook = false;
    }
    let oldTransform = Matrix4.clone(camera.transform, oldTransformScratch);
    camera.lookAtTransform(rotateFrame);
    rotateInitialCameraAngle = Math.atan2(camera.position.y, camera.position.x);
    rotateInitialCameraDistance = Cartesian3.magnitude(new Cartesian3(camera.position.x, camera.position.y, 0));
    camera.lookAtTransform(oldTransform);
    rotateMouseMoveFunction = function(e) {
      const compassRectangle = compassElement.getBoundingClientRect();
      const center = new Cartesian2((compassRectangle.right - compassRectangle.left) / 2, (compassRectangle.bottom - compassRectangle.top) / 2);
      let clickLocation;
      if (e instanceof MouseEvent) {
        clickLocation = new Cartesian2(e.clientX - compassRectangle.left, e.clientY - compassRectangle.top);
      } else if (e instanceof TouchEvent) {
        clickLocation = new Cartesian2(e.changedTouches[0].clientX - compassRectangle.left, e.changedTouches[0].clientY - compassRectangle.top);
      }
      const vector = Cartesian2.subtract(clickLocation, center, vectorScratch);
      const angle = Math.atan2(-vector.y, vector.x);
      const angleDifference = angle - rotateInitialCursorAngle;
      const newCameraAngle = CesiumMath.zeroToTwoPi(rotateInitialCameraAngle - angleDifference);
      camera = vcInstance.viewer.scene.camera;
      oldTransform = Matrix4.clone(camera.transform, oldTransformScratch);
      camera.lookAtTransform(rotateFrame);
      const currentCameraAngle = Math.atan2(camera.position.y, camera.position.x);
      camera.rotateRight(newCameraAngle - currentCameraAngle);
      camera.lookAtTransform(oldTransform);
      listener && emit("compassEvt", {
        type: "rotate",
        camera: scene.camera,
        status: "changing",
        target: compassElement
      });
    };
    rotateMouseUpFunction = function(e) {
      isRotating = false;
      document.removeEventListener("mousemove", rotateMouseMoveFunction, false);
      document.removeEventListener("touchmove", rotateMouseMoveFunction, false);
      document.removeEventListener("mouseup", rotateMouseUpFunction, false);
      document.removeEventListener("touchend", rotateMouseUpFunction, false);
      rotateMouseMoveFunction = void 0;
      rotateMouseUpFunction = void 0;
      listener && emit("compassEvt", {
        type: "rotate",
        camera: scene.camera,
        status: "end",
        target: compassElement
      });
    };
    document.addEventListener("mousemove", rotateMouseMoveFunction, false);
    document.addEventListener("touchmove", rotateMouseMoveFunction, false);
    document.addEventListener("mouseup", rotateMouseUpFunction, false);
    document.addEventListener("touchend", rotateMouseUpFunction, false);
  };
  const onTooltipBeforeShow = (e) => {
    if (rotateMouseMoveFunction !== void 0 || orbitMouseMoveFunction !== void 0) {
      e.cancel = true;
    }
  };
  const load = async (viewer) => {
    vcInstance.viewer = viewer;
    viewerChange();
    return true;
  };
  const unload = async () => {
    document.removeEventListener("mousemove", orbitMouseMoveFunction, false);
    document.removeEventListener("mouseup", orbitMouseUpFunction, false);
    document.removeEventListener("touchmove", orbitMouseMoveFunction, false);
    document.removeEventListener("touchend", orbitMouseUpFunction, false);
    unsubscribeFromClockTick && unsubscribeFromClockTick();
    unsubscribeFromPostRender && unsubscribeFromPostRender();
    return true;
  };
  return {
    heading,
    orbitCursorAngle,
    orbitCursorOpacity,
    handleDoubleClick,
    handleMouseDown,
    resetRotater,
    onTooltipBeforeShow,
    viewerChange,
    load,
    unload,
    iconOuterTooltipRef,
    iconInnerTooltipRef
  };
}

exports["default"] = useCompass;
//# sourceMappingURL=use-compass.js.map
