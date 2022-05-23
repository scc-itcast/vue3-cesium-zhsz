'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('./util.js');
var shared = require('@vue/shared');
var lodashUnified = require('lodash-unified');

function makeCartesian2(val, isConstant = false) {
  const { Cartesian2, CallbackProperty } = Cesium;
  if (val instanceof Cesium.Cartesian2 || val instanceof CallbackProperty) {
    return val;
  }
  if (shared.isPlainObject(val)) {
    if (shared.hasOwn(val, "x") && shared.hasOwn(val, "y")) {
      const value = val;
      return new Cartesian2(value.x, value.y);
    }
  }
  if (shared.isArray(val)) {
    return new Cartesian2(val[0], val[1]);
  }
  if (shared.isFunction(val)) {
    return new CallbackProperty(val, isConstant);
  }
  return void 0;
}
function makeCartesian3(val, ellipsoid, isConstant = false) {
  const {
    CallbackProperty,
    Cartesian3,
    Ellipsoid,
    SampledPositionProperty,
    CompositePositionProperty,
    ConstantPositionProperty,
    TimeIntervalCollectionPositionProperty
  } = Cesium;
  if (val instanceof Cartesian3 || val instanceof CallbackProperty || val instanceof SampledPositionProperty || val instanceof CompositePositionProperty || val instanceof ConstantPositionProperty || val instanceof TimeIntervalCollectionPositionProperty) {
    return val;
  }
  ellipsoid = ellipsoid || Ellipsoid.WGS84;
  if (shared.isPlainObject(val)) {
    if (shared.hasOwn(val, "x") && shared.hasOwn(val, "y") && shared.hasOwn(val, "z")) {
      const value = val;
      return new Cartesian3(value.x, value.y, value.z);
    } else if (shared.hasOwn(val, "lng") && shared.hasOwn(val, "lat")) {
      const value = val;
      return Cartesian3.fromDegrees(value.lng, value.lat, value.height || 0, ellipsoid);
    }
  }
  if (shared.isArray(val)) {
    return Cartesian3.fromDegrees(val[0], val[1], val[2] || 0, ellipsoid);
  }
  if (shared.isFunction(val)) {
    return new CallbackProperty(val, isConstant);
  }
  return void 0;
}
function makeCartesian3Array(vals, ellipsoid, isConstant = false) {
  const { CallbackProperty, Cartesian3, Ellipsoid } = Cesium;
  if (vals instanceof CallbackProperty) {
    return vals;
  }
  if (shared.isFunction(vals)) {
    return new CallbackProperty(vals, isConstant);
  }
  ellipsoid = ellipsoid || Ellipsoid.WGS84;
  if (shared.isArray(vals)) {
    if (shared.isArray(vals[0]) || shared.isPlainObject(vals[0])) {
      const results = [];
      vals.forEach((val) => {
        results.push(makeCartesian3(val, ellipsoid));
      });
      return results;
    }
    return Cartesian3.fromDegreesArrayHeights(vals, ellipsoid);
  }
  return void 0;
}
function makeCartesian2Array(vals, isConstant) {
  const { CallbackProperty } = Cesium;
  if (vals instanceof CallbackProperty) {
    return vals;
  }
  if (shared.isFunction(vals)) {
    return new CallbackProperty(vals, isConstant);
  }
  if (shared.isArray(vals)) {
    const points = [];
    vals.forEach((val) => {
      points.push(makeCartesian2(val));
    });
    return points;
  }
  return void 0;
}
function makeQuaternion(val, isConstant = false) {
  const { CallbackProperty, Quaternion, VelocityOrientationProperty } = Cesium;
  if (val instanceof Quaternion || val instanceof CallbackProperty || val instanceof VelocityOrientationProperty) {
    return val;
  }
  if (shared.isPlainObject(val) && shared.hasOwn(val, "x") && shared.hasOwn(val, "y")) {
    const value = val;
    return new Quaternion(value.x, value.y, value.z, value.w);
  }
  if (shared.isArray(val)) {
    return new Quaternion(val[0], val[1], val[2], val[3]);
  }
  if (shared.isFunction(val)) {
    return new CallbackProperty(val, isConstant);
  }
  return void 0;
}
function parsePolygonHierarchyJson(val, ellipsoid) {
  val.forEach((item) => {
    item.positions = makeCartesian3Array(item.positions, ellipsoid);
    if (item.holes) {
      parsePolygonHierarchyJson(item.holes, ellipsoid);
    }
  });
}
function makePolygonHierarchy(val, ellipsoid, isConstant = false) {
  var _a;
  const { PolygonHierarchy, CallbackProperty } = Cesium;
  if (val instanceof PolygonHierarchy || val instanceof CallbackProperty) {
    return val;
  }
  if (shared.isFunction(val)) {
    return new CallbackProperty(val, isConstant);
  }
  if (shared.isArray(val) && val.length >= 3) {
    const points = makeCartesian3Array(val, ellipsoid);
    return new PolygonHierarchy(points);
  }
  if (shared.isPlainObject(val) && shared.hasOwn(val, "positions")) {
    const value = val;
    value.positions = makeCartesian3Array(value.positions, ellipsoid);
    ((_a = value.holes) == null ? void 0 : _a.length) && parsePolygonHierarchyJson(value.holes, ellipsoid);
    return value;
  }
  return void 0;
}
function makeNearFarScalar(val, isConstant = false) {
  const { NearFarScalar, CallbackProperty } = Cesium;
  if (val instanceof NearFarScalar || val instanceof CallbackProperty) {
    return val;
  }
  if (shared.isPlainObject(val) && shared.hasOwn(val, "near") && shared.hasOwn(val, "far")) {
    const value = val;
    return new NearFarScalar(value.near, value.nearValue || 0, value.far, value.farValue || 1);
  }
  if (shared.isArray(val)) {
    return new NearFarScalar(val[0], val[1], val[2], val[3]);
  }
  if (shared.isFunction(val)) {
    return new CallbackProperty(val, isConstant);
  }
  return void 0;
}
function makeDistanceDisplayCondition(val, isConstant = false) {
  const { DistanceDisplayCondition, CallbackProperty } = Cesium;
  if (val instanceof DistanceDisplayCondition || val instanceof CallbackProperty) {
    return val;
  }
  if (shared.isPlainObject(val) && shared.hasOwn(val, "near") && shared.hasOwn(val, "far")) {
    const value = val;
    return new DistanceDisplayCondition(value.near, value.far);
  }
  if (shared.isArray(val)) {
    return new DistanceDisplayCondition(val[0], val[1]);
  }
  if (shared.isFunction(val)) {
    return new CallbackProperty(val, isConstant);
  }
  return void 0;
}
function makeColor(val, isConstant = false) {
  const { Color, CallbackProperty } = Cesium;
  if (val instanceof Color || val instanceof CallbackProperty) {
    return val;
  }
  if (shared.isString(val)) {
    return Color.fromCssColorString(val);
  }
  if (shared.isPlainObject(val)) {
    if (shared.hasOwn(val, "red")) {
      const value = val;
      return Color.fromBytes(value.red, value.green || 255, value.blue || 255, value.alpha || 255);
    } else if (shared.hasOwn(val, "x")) {
      const value = val;
      return new Color(value.x, value.y || 1, value.z || 1, value.w || 1);
    }
  }
  if (shared.isArray(val)) {
    return Color.fromBytes(val[0], val[1], val[2], val[3] || 255);
  }
  if (shared.isFunction(val)) {
    return new CallbackProperty(val, isConstant);
  }
  return void 0;
}
function makeColors(vals) {
  if (shared.isArray(vals)) {
    const results = [];
    vals.forEach((val) => {
      results.push(makeColor(val));
    });
    return results;
  } else {
    return vals;
  }
}
function makeMaterialProperty(val, isConstant = false) {
  const {
    CallbackProperty,
    Color,
    CheckerboardMaterialProperty,
    ColorMaterialProperty,
    GridMaterialProperty,
    ImageMaterialProperty,
    PolylineArrowMaterialProperty,
    PolylineDashMaterialProperty,
    PolylineGlowMaterialProperty,
    PolylineOutlineMaterialProperty,
    StripeMaterialProperty,
    StripeOrientation
  } = Cesium;
  if (val instanceof CallbackProperty || val instanceof Color || val instanceof CheckerboardMaterialProperty || val instanceof ColorMaterialProperty || val instanceof ImageMaterialProperty || val instanceof PolylineArrowMaterialProperty || val instanceof PolylineDashMaterialProperty || val instanceof PolylineGlowMaterialProperty || val instanceof PolylineOutlineMaterialProperty || val instanceof StripeMaterialProperty || util.getObjClassName(val).indexOf("MaterialProperty") !== -1) {
    return val;
  }
  if (shared.isString(val) && /(.*)\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$/.test(val) || val instanceof HTMLImageElement || val instanceof HTMLCanvasElement || val instanceof HTMLVideoElement) {
    return new ImageMaterialProperty({
      image: val,
      repeat: makeCartesian2({ x: 1, y: 1 }),
      color: Color.WHITE,
      transparent: true
    });
  }
  if (shared.isArray(val) || shared.isString(val)) {
    return new ColorMaterialProperty(makeColor(val));
  }
  if (shared.isPlainObject(val) && shared.hasOwn(val, "fabric")) {
    const value = val;
    switch (value.fabric.type) {
      case "Image":
        return new ImageMaterialProperty({
          image: value.fabric.uniforms.image,
          repeat: makeCartesian2(value.fabric.uniforms.repeat || { x: 1, y: 1 }),
          color: makeColor(value.fabric.uniforms.color) || Color.WHITE,
          transparent: value.fabric.uniforms.transparent || false
        });
      case "Color":
        return new ColorMaterialProperty(makeColor(value.fabric.uniforms.color || Color.WHITE));
      case "PolylineArrow":
        return new PolylineArrowMaterialProperty(makeColor(value.fabric.uniforms.color || Color.WHITE));
      case "PolylineDash":
        return new PolylineDashMaterialProperty({
          color: makeColor(value.fabric.uniforms.color || "white") || Color.WHITE,
          gapColor: makeColor(value.fabric.uniforms.gapColor) || Color.TRANSPARENT,
          dashLength: value.fabric.uniforms.taperPower || 16,
          dashPattern: value.fabric.uniforms.taperPower || 255
        });
      case "PolylineGlow":
        return new PolylineGlowMaterialProperty({
          color: makeColor(value.fabric.uniforms.color) || Color.WHITE,
          glowPower: value.fabric.uniforms.glowPower || 0.25,
          taperPower: value.fabric.uniforms.taperPower || 1
        });
      case "PolylineOutline":
        return new PolylineOutlineMaterialProperty({
          color: makeColor(value.fabric.uniforms.color) || Color.WHITE,
          outlineColor: makeColor(value.fabric.uniforms.outlineColor) || Color.BLACK,
          outlineWidth: value.fabric.uniforms.outlineWidth || 1
        });
      case "Checkerboard":
        return new CheckerboardMaterialProperty({
          evenColor: makeColor(value.fabric.uniforms.evenColor) || Color.WHITE,
          oddColor: makeColor(value.fabric.uniforms.oddColor) || Color.BLACK,
          repeat: makeCartesian2(value.fabric.uniforms.repeat || { x: 2, y: 2 })
        });
      case "Grid":
        return new GridMaterialProperty({
          color: makeColor(value.fabric.uniforms.color) || Color.WHITE,
          cellAlpha: value.fabric.uniforms.cellAlpha || 0.1,
          lineCount: makeCartesian2(value.fabric.uniforms.lineCount || { x: 8, y: 8 }),
          lineThickness: makeCartesian2(value.fabric.uniforms.lineThickness || { x: 1, y: 1 }),
          lineOffset: makeCartesian2(value.fabric.uniforms.lineOffset || { x: 0, y: 0 })
        });
      case "Stripe":
        return new StripeMaterialProperty({
          orientation: value.fabric.uniforms.orientation || StripeOrientation.HORIZONTAL,
          evenColor: makeColor(value.fabric.uniforms.evenColor || "white"),
          oddColor: makeColor(value.fabric.uniforms.oddColor || "black"),
          offset: value.fabric.uniforms.offset || 0,
          repeat: value.fabric.uniforms.repeat || 1
        });
    }
  }
  if (shared.isFunction(val)) {
    return new CallbackProperty(val, isConstant);
  }
  return val;
}
function makeMaterial(val) {
  var _a;
  const vcInstance = this;
  const cmpName = (_a = vcInstance == null ? void 0 : vcInstance.proxy) == null ? void 0 : _a.$options.name;
  if (cmpName && (cmpName.indexOf("Graphics") !== -1 || cmpName.indexOf("Datasource") !== -1 || cmpName === "VcOverlayDynamic" || cmpName === "VcEntity")) {
    return makeMaterialProperty(val);
  }
  const { Material, combine } = Cesium;
  if (val instanceof Material) {
    return val;
  }
  if (shared.isPlainObject(val) && shared.hasOwn(val, "fabric")) {
    const f = (obj) => {
      for (const i in obj) {
        if (!shared.isArray(obj[i]) && shared.isPlainObject(obj[i])) {
          f(obj[i]);
        } else {
          if (i.toLocaleLowerCase().indexOf("color") !== -1 && !util.isEmptyObj(obj[i])) {
            const result = makeColor(obj[i]);
            obj[i] = combine(result, result, true);
          }
        }
      }
    };
    f(val);
    return new Material(val);
  }
  if (shared.isArray(val) || shared.isString(val)) {
    const material = Material.fromType("Color");
    material.uniforms.color = makeColor(val);
    return material;
  }
  return void 0;
}
function makeAppearance(val) {
  var _a;
  const {
    Appearance,
    DebugAppearance,
    MaterialAppearance,
    PolylineColorAppearance,
    EllipsoidSurfaceAppearance,
    PerInstanceColorAppearance,
    PolylineMaterialAppearance
  } = Cesium;
  if (val instanceof Appearance || val instanceof DebugAppearance || val instanceof MaterialAppearance || val instanceof PolylineColorAppearance || val instanceof EllipsoidSurfaceAppearance || val instanceof PerInstanceColorAppearance || val instanceof PolylineMaterialAppearance || util.getObjClassName(val).indexOf("Appearance") !== -1) {
    return val;
  }
  if (shared.isPlainObject(val) && shared.hasOwn(val, "type")) {
    const options = {
      ...val.options
    };
    if ((_a = val.options) == null ? void 0 : _a.material) {
      options.material = makeMaterial.call(this, val.options.material);
    }
    return new Cesium[val.type]({
      ...options
    });
  }
  return void 0;
}
function makeRectangle(val, isConstant = false) {
  const { Rectangle, RectangleGraphics, CallbackProperty } = Cesium;
  if (val instanceof RectangleGraphics || val instanceof Rectangle) {
    return val;
  }
  if (shared.isArray(val)) {
    return Rectangle.fromDegrees(val[0], val[1], val[2], val[3]);
  }
  if (shared.isPlainObject(val)) {
    if (shared.hasOwn(val, "west")) {
      const value = val;
      return Rectangle.fromDegrees(value.west, value.south, value.east, value.north);
    } else if (shared.hasOwn(val, "x")) {
      const value = val;
      return new Rectangle(value.x, value.y, value.z, value.w);
    }
  }
  if (shared.isFunction(val)) {
    return new CallbackProperty(val, isConstant);
  }
  return void 0;
}
function makeBoundingRectangle(val, isConstant = false) {
  const { BoundingRectangle, CallbackProperty } = Cesium;
  if (val instanceof BoundingRectangle || val instanceof CallbackProperty) {
    return val;
  }
  if (shared.isPlainObject(val) && shared.hasOwn(val, "x")) {
    const value = val;
    return new BoundingRectangle(value.x, value.y, value.width, value.height);
  }
  if (shared.isArray(val)) {
    return new BoundingRectangle(val[0], val[1], val[2], val[3]);
  }
  if (shared.isFunction(val)) {
    return new CallbackProperty(val, isConstant);
  }
  return void 0;
}
function makePlane(val, isConstant = false) {
  const { Cartesian3, Plane, PlaneGraphics, CallbackProperty } = Cesium;
  if (val instanceof PlaneGraphics || val instanceof Plane || val instanceof CallbackProperty) {
    return val;
  }
  if (shared.isPlainObject(val) && shared.hasOwn(val, "normal")) {
    const value = val;
    Cartesian3.normalize(makeCartesian3(value.normal), value.normal);
    return new Plane(value.normal, value.distance);
  }
  if (shared.isArray(val)) {
    const point3D = makeCartesian3(val[0]);
    const normalizePoint3D = Cartesian3.normalize(point3D, new Cartesian3());
    return new Plane(normalizePoint3D, val[1]);
  }
  if (shared.isFunction(val)) {
    return new CallbackProperty(val, isConstant);
  }
  return void 0;
}
function makeTranslationRotationScale(val, isConstant = false) {
  const { TranslationRotationScale, CallbackProperty } = Cesium;
  if (val instanceof CallbackProperty || val instanceof TranslationRotationScale) {
    return val;
  }
  if (shared.isPlainObject(val) && shared.hasOwn(val, "translation")) {
    const value = val;
    return new TranslationRotationScale(makeCartesian3(value.translation), makeQuaternion(value.rotation), makeCartesian3(value.scale));
  }
  if (shared.isArray(val)) {
    return new TranslationRotationScale(makeCartesian3(val[0]), makeQuaternion(val[1]), makeCartesian3(val[2]));
  }
  if (shared.isFunction(val)) {
    return new CallbackProperty(val, isConstant);
  }
  return val;
}
function makeOptions(val) {
  var _a;
  const vcInstance = this;
  const cmpName = (_a = vcInstance.proxy) == null ? void 0 : _a.$options.name;
  const result = {};
  switch (cmpName) {
    case "VcDatasourceGeojson":
      Object.assign(result, val);
      result && result.markerColor && (result.markerColor = makeColor(result.markerColor));
      result && result.stroke && (result.stroke = makeColor(result.stroke));
      result && result.fill && (result.fill = makeColor(result.fill));
      return result;
  }
  return val;
}
function captureScreenshot(viewer) {
  const scene = viewer.scene;
  const promise = new Promise((resolve, reject) => {
    const removeCallback = viewer.scene.postRender.addEventListener(() => {
      removeCallback();
      try {
        const cesiumCanvas = viewer.scene.canvas;
        const canvas = cesiumCanvas;
        resolve(canvas.toDataURL("image/png"));
      } catch (e) {
        reject(e);
      }
    });
  });
  scene.render(viewer.clock.currentTime);
  return promise;
}
function makeCameraOptions(camera, ellipsoid) {
  const { Math: CesiumMath, Rectangle } = Cesium;
  let destination = void 0;
  let orientation = {};
  if (shared.hasOwn(camera, "position")) {
    const position = camera.position;
    destination = makeCartesian3(position, ellipsoid);
    if (shared.hasOwn(position, "lng") && shared.hasOwn(position, "lat") || shared.isArray(position)) {
      orientation = {
        heading: CesiumMath.toRadians(camera.heading || 360),
        pitch: CesiumMath.toRadians(camera.pitch || -90),
        roll: CesiumMath.toRadians(camera.roll || 0)
      };
    } else {
      orientation = {
        heading: camera.heading || 2 * Math.PI,
        pitch: camera.pitch || -Math.PI / 2,
        roll: camera.roll || 0
      };
    }
  } else if (shared.hasOwn(camera, "rectangle")) {
    const rectangle = camera.retangle;
    destination = makeRectangle(rectangle);
    Rectangle.validate(destination);
    if (shared.hasOwn(rectangle, "west") && shared.hasOwn(rectangle, "south") && shared.hasOwn(rectangle, "east") && shared.hasOwn(rectangle, "north") || shared.isArray(rectangle)) {
      orientation = {
        heading: CesiumMath.toRadians(camera.heading || 360),
        pitch: CesiumMath.toRadians(camera.pitch || -90),
        roll: CesiumMath.toRadians(camera.roll || 0)
      };
    } else {
      orientation = {
        heading: camera.heading || 2 * Math.PI,
        pitch: camera.pitch || -Math.PI / 2,
        roll: camera.roll || 0
      };
    }
  }
  return {
    destination,
    orientation
  };
}
function setViewerCamera(viewer, camera) {
  const { destination, orientation } = makeCameraOptions(camera, viewer.scene.globe.ellipsoid);
  viewer.camera.setView({
    destination,
    orientation
  });
}
function flyToCamera(viewer, camera, options) {
  const { destination, orientation } = makeCameraOptions(camera, viewer.scene.globe.ellipsoid);
  viewer.camera.flyTo({
    destination: options.destination || destination,
    orientation: options.orientation || orientation,
    duration: options.duration,
    complete: options.complete,
    cancel: options.cancel
  });
}
function getGeodesicDistance(start, end, ellipsoid) {
  const { EllipsoidGeodesic, Ellipsoid } = Cesium;
  ellipsoid = ellipsoid || Ellipsoid.WGS84;
  const pickedPointCartographic = ellipsoid.cartesianToCartographic(start);
  const lastPointCartographic = ellipsoid.cartesianToCartographic(end);
  const geodesic = new EllipsoidGeodesic(pickedPointCartographic, lastPointCartographic);
  return geodesic.surfaceDistance;
}
function getHeadingPitchRoll(start, end, scene, result) {
  const { Camera, Cartesian3, Math: CesiumMath } = Cesium;
  const camera = new Camera(scene);
  if (Cartesian3.equals(start, end)) {
    return void 0;
  }
  let direction = Cartesian3.subtract(end, start, {});
  direction = Cartesian3.normalize(direction, direction);
  let up = Cartesian3.subtract(start, new Cartesian3(), {});
  up = Cartesian3.normalize(up, up);
  camera.setView({
    destination: start,
    orientation: {
      direction,
      up
    }
  });
  result = result || [0, 0, 0];
  let heading = camera.heading;
  heading -= CesiumMath.PI_OVER_TWO;
  if (heading < 0) {
    heading += CesiumMath.TWO_PI;
  }
  result.splice(0, result.length, heading, camera.pitch, camera.roll);
  return result;
}
function getPolylineSegmentEndpoint(start, heading, distance, ellipsoid) {
  const { HeadingPitchRoll, Transforms, Matrix4, Cartesian3, Cartesian4, Quaternion, Cartographic, Ellipsoid } = Cesium;
  ellipsoid = ellipsoid || Ellipsoid.WGS84;
  const hpr = new HeadingPitchRoll(heading, 0, 0);
  const scale = new Cartesian3(1, 1, 1);
  const matrix = Transforms.headingPitchRollToFixedFrame(start, hpr);
  const translation = Matrix4.getColumn(matrix, 1, new Cartesian4());
  const axis = new Cartesian3(translation.x, translation.y, translation.z);
  const quaternion = Quaternion.fromAxisAngle(axis, distance * ellipsoid.oneOverRadii.x);
  const hprMatrix = Matrix4.fromTranslationQuaternionRotationScale(Cartesian3.ZERO, quaternion, scale);
  const position = Matrix4.multiplyByPoint(hprMatrix, start, new Cartesian3());
  const startCartographic = Cartographic.fromCartesian(start, ellipsoid);
  const positionCartographic = Cartographic.fromCartesian(position, ellipsoid);
  positionCartographic.height = startCartographic.height;
  return Cartographic.toCartesian(positionCartographic, ellipsoid);
}
function calculateAreaByPostions(positions) {
  let area = 0;
  const { CoplanarPolygonGeometry, VertexFormat, defined, Cartesian3 } = Cesium;
  const geometry = CoplanarPolygonGeometry.createGeometry(CoplanarPolygonGeometry.fromPositions({
    positions,
    vertexFormat: VertexFormat.POSITION_ONLY
  }));
  if (!lodashUnified.isUndefined(geometry) && defined(geometry)) {
    const indices = geometry.indices;
    const positionValues = geometry.attributes.position.values;
    for (let i = 0; i < indices.length; i += 3) {
      const indice0 = indices[i];
      const indice1 = indices[i + 1];
      const indice2 = indices[i + 2];
      area += triangleArea(Cartesian3.unpack(positionValues, 3 * indice0, {}), Cartesian3.unpack(positionValues, 3 * indice1, {}), Cartesian3.unpack(positionValues, 3 * indice2, {}));
    }
  }
  return area;
}
const triangleArea = (vertexA, vertexB, vertexC) => {
  const { Cartesian3 } = Cesium;
  const vectorBA = Cartesian3.subtract(vertexA, vertexB, {});
  const vectorBC = Cartesian3.subtract(vertexC, vertexB, {});
  const crossProduct = Cartesian3.cross(vectorBA, vectorBC, vectorBA);
  return 0.5 * Cartesian3.magnitude(crossProduct);
};
const restoreCursors = [];
function setViewerCursor(viewer, cursor) {
  const restoreCursor = getComputedStyle(viewer.canvas).cursor;
  restoreCursors[restoreCursors.length - 1] !== restoreCursor && restoreCursors.push(restoreCursor);
  viewer.canvas.setAttribute("style", `cursor: ${cursor}`);
}
function restoreViewerCursor(viewer, count = 1) {
  for (let i = 0; i < count; i++) {
    const cursor = restoreCursors.pop();
    viewer.canvas.setAttribute("style", `cursor: ${cursor}`);
  }
}
function makeJulianDate(val) {
  const { JulianDate } = Cesium;
  if (val instanceof JulianDate) {
    return val;
  } else if (shared.isString(val)) {
    return Cesium.JulianDate.fromDate(new Date(val));
  } else if (val instanceof Date) {
    return Cesium.JulianDate.fromDate(val);
  }
  return Cesium.JulianDate.now();
}
function makeHeadingPitchRoll(val) {
  const { HeadingPitchRoll, Math: CesiumMath } = Cesium;
  if (val instanceof Cesium.HeadingPitchRoll) {
    return val;
  } else if (Array.isArray(val)) {
    return new HeadingPitchRoll(CesiumMath.toRadians(val[0]) || 0, CesiumMath.toRadians(val[1]) || 0, CesiumMath.toRadians(val[2]) || 0);
  } else if (shared.isPlainObject(val)) {
    return new HeadingPitchRoll(val.heading || 0, val.pitch || 0, val.roll || 0);
  }
  return new HeadingPitchRoll();
}
function makeHeadingPitchRang(val) {
  const { HeadingPitchRange, Math: CesiumMath } = Cesium;
  if (val instanceof Cesium.HeadingPitchRange) {
    return val;
  } else if (Array.isArray(val)) {
    return new HeadingPitchRange(CesiumMath.toRadians(val[0]) || 0, CesiumMath.toRadians(val[1]) || 0, val[2] || 0);
  } else if (shared.isPlainObject(val)) {
    return new HeadingPitchRange(val.heading || 0, val.pitch || 0, val.range || 0);
  }
  return new HeadingPitchRange();
}
function getPolylineSegmentHeading(start, end) {
  const { Cartesian3, Matrix4, Transforms, Math: CesiumMath } = Cesium;
  const cartesian3Scratch = new Cartesian3();
  const matrix4Scratch = Transforms.eastNorthUpToFixedFrame(start);
  Matrix4.inverse(matrix4Scratch, matrix4Scratch);
  Matrix4.multiplyByPoint(matrix4Scratch, end, cartesian3Scratch);
  Cartesian3.normalize(cartesian3Scratch, cartesian3Scratch);
  return CesiumMath.toDegrees(Math.atan2(cartesian3Scratch.x, cartesian3Scratch.y));
}
function getPolylineSegmentPitch(start, end) {
  const { Cartesian3, Matrix4, Transforms, Math: CesiumMath } = Cesium;
  const cartesian3Scratch = new Cartesian3();
  const matrix4Scratch = Transforms.eastNorthUpToFixedFrame(start);
  Matrix4.inverse(matrix4Scratch, matrix4Scratch);
  Matrix4.multiplyByPoint(matrix4Scratch, end, cartesian3Scratch);
  Cartesian3.normalize(cartesian3Scratch, cartesian3Scratch);
  return CesiumMath.toDegrees(Math.asin(cartesian3Scratch.z));
}
function getFirstIntersection(start, end, viewer, objectsToExclude = []) {
  const { Cartesian3, Ray, defined } = Cesium;
  const direction = Cartesian3.normalize(Cartesian3.subtract(end, start, new Cartesian3()), new Cartesian3());
  const ray = new Ray(start, direction);
  const result = viewer.scene.pickFromRay(ray, objectsToExclude);
  if (defined(result)) {
    if (defined(result.position)) {
      const intersection = result.position;
      return intersection;
    }
  }
  return void 0;
}
function heightToLevel(altitude) {
  const A = 40487.57;
  const B = 7096758e-11;
  const C = 91610.74;
  const D = -40467.74;
  return Math.round(D + (A - D) / (1 + Math.pow(altitude / C, B)));
}

exports.calculateAreaByPostions = calculateAreaByPostions;
exports.captureScreenshot = captureScreenshot;
exports.flyToCamera = flyToCamera;
exports.getFirstIntersection = getFirstIntersection;
exports.getGeodesicDistance = getGeodesicDistance;
exports.getHeadingPitchRoll = getHeadingPitchRoll;
exports.getPolylineSegmentEndpoint = getPolylineSegmentEndpoint;
exports.getPolylineSegmentHeading = getPolylineSegmentHeading;
exports.getPolylineSegmentPitch = getPolylineSegmentPitch;
exports.heightToLevel = heightToLevel;
exports.makeAppearance = makeAppearance;
exports.makeBoundingRectangle = makeBoundingRectangle;
exports.makeCameraOptions = makeCameraOptions;
exports.makeCartesian2 = makeCartesian2;
exports.makeCartesian2Array = makeCartesian2Array;
exports.makeCartesian3 = makeCartesian3;
exports.makeCartesian3Array = makeCartesian3Array;
exports.makeColor = makeColor;
exports.makeColors = makeColors;
exports.makeDistanceDisplayCondition = makeDistanceDisplayCondition;
exports.makeHeadingPitchRang = makeHeadingPitchRang;
exports.makeHeadingPitchRoll = makeHeadingPitchRoll;
exports.makeJulianDate = makeJulianDate;
exports.makeMaterial = makeMaterial;
exports.makeMaterialProperty = makeMaterialProperty;
exports.makeNearFarScalar = makeNearFarScalar;
exports.makeOptions = makeOptions;
exports.makePlane = makePlane;
exports.makePolygonHierarchy = makePolygonHierarchy;
exports.makeQuaternion = makeQuaternion;
exports.makeRectangle = makeRectangle;
exports.makeTranslationRotationScale = makeTranslationRotationScale;
exports.restoreViewerCursor = restoreViewerCursor;
exports.setViewerCamera = setViewerCamera;
exports.setViewerCursor = setViewerCursor;
//# sourceMappingURL=cesium-helpers.js.map
