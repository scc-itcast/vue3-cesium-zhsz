'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vm = require('../../../utils/private/vm.js');
var vue = require('vue');
require('../../../utils/util.js');
var shared = require('@vue/shared');

function useZoomControl(props, { emit }, vcInstance, $services) {
  const zoombarTop = vue.ref(65);
  const zoomInTooltipRef = vue.ref(null);
  const zoomOutTooltipRef = vue.ref(null);
  const zoomBarTooltipRef = vue.ref(null);
  let screenSpaceEventHandler;
  let zoominTickFunction;
  let zoominMouseUpFunction;
  let isZoomin = false;
  let zoominLastTimestamp = 0;
  let unsubscribeFromClockTickZoomin;
  let zoomoutTickFunction;
  let zoomoutMouseUpFunction;
  let iszoomout = false;
  let zoomoutLastTimestamp = 0;
  let unsubscribeFromClockTickZoomout;
  let zoomBarScrollMouseMoveFunction;
  let zoomBarScrollMouseUpFunction;
  let zoombarTickFunction;
  let isZoomBarScrolling = false;
  let unsubscribeFromClockTickZoomBar;
  let container;
  const handleZoomInMouseDown = (e) => {
    var _a, _b, _c;
    const { defined, getTimestamp, SceneMode, ScreenSpaceEventType } = Cesium;
    const { viewer } = $services;
    (_a = vm.$(zoomInTooltipRef)) == null ? void 0 : _a.hide();
    (_b = vm.$(zoomOutTooltipRef)) == null ? void 0 : _b.hide();
    (_c = vm.$(zoomBarTooltipRef)) == null ? void 0 : _c.hide();
    screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP);
    defined(zoominTickFunction) && viewer.clock.onTick.removeEventListener(zoominTickFunction);
    zoominMouseUpFunction = void 0;
    zoominTickFunction = void 0;
    isZoomin = true;
    zoominLastTimestamp = getTimestamp();
    const scene = viewer.scene;
    const camera = scene.camera;
    zoominTickFunction = () => {
      viewer.scene.mode === SceneMode.COLUMBUS_VIEW ? camera.zoomIn() : handlezoom(1);
    };
    zoominMouseUpFunction = () => {
      isZoomin = false;
      screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP);
      defined(zoominTickFunction) && viewer.clock.onTick.removeEventListener(zoominTickFunction);
      zoominMouseUpFunction = void 0;
      zoominTickFunction = void 0;
    };
    screenSpaceEventHandler.setInputAction(zoominMouseUpFunction, ScreenSpaceEventType.LEFT_UP);
    unsubscribeFromClockTickZoomin = viewer.clock.onTick.addEventListener(zoominTickFunction);
  };
  const handleZoomOutMouseDown = (event) => {
    var _a, _b, _c;
    (_a = vm.$(zoomInTooltipRef)) == null ? void 0 : _a.hide();
    (_b = vm.$(zoomOutTooltipRef)) == null ? void 0 : _b.hide();
    (_c = vm.$(zoomBarTooltipRef)) == null ? void 0 : _c.hide();
    const { defined, getTimestamp, SceneMode, ScreenSpaceEventType } = Cesium;
    const { viewer } = $services;
    screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP);
    defined(zoomoutTickFunction) && viewer.clock.onTick.removeEventListener(zoomoutTickFunction);
    zoomoutMouseUpFunction = void 0;
    zoomoutTickFunction = void 0;
    iszoomout = false;
    zoomoutLastTimestamp = getTimestamp();
    const scene = viewer.scene;
    const camera = scene.camera;
    zoomoutTickFunction = () => {
      viewer.scene.mode === SceneMode.COLUMBUS_VIEW ? camera.zoomOut() : handlezoom(-1);
    };
    zoomoutMouseUpFunction = () => {
      iszoomout = false;
      screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP);
      defined(zoomoutTickFunction) && viewer.clock.onTick.removeEventListener(zoomoutTickFunction);
      zoomoutMouseUpFunction = void 0;
      zoomoutTickFunction = void 0;
    };
    screenSpaceEventHandler.setInputAction(zoomoutMouseUpFunction, ScreenSpaceEventType.LEFT_UP);
    unsubscribeFromClockTickZoomout = viewer.clock.onTick.addEventListener(zoomoutTickFunction);
  };
  const handleZoomBarScrollMouseDown = (event) => {
    var _a, _b, _c;
    (_a = vm.$(zoomInTooltipRef)) == null ? void 0 : _a.hide();
    (_b = vm.$(zoomOutTooltipRef)) == null ? void 0 : _b.hide();
    (_c = vm.$(zoomBarTooltipRef)) == null ? void 0 : _c.hide();
    const { Cartesian2, defined, SceneMode } = Cesium;
    const { viewer } = $services;
    document.removeEventListener("mousemove", zoomBarScrollMouseMoveFunction, false);
    document.removeEventListener("touchmove", zoomBarScrollMouseMoveFunction, false);
    document.removeEventListener("mouseup", zoomBarScrollMouseUpFunction, false);
    document.removeEventListener("touchend", zoomBarScrollMouseUpFunction, false);
    defined(zoombarTickFunction) && viewer.clock.onTick.removeEventListener(zoombarTickFunction);
    zoomBarScrollMouseUpFunction = void 0;
    zoombarTickFunction = void 0;
    isZoomBarScrolling = true;
    const scene = viewer.scene;
    const camera = scene.camera;
    zoombarTickFunction = () => {
      const zoomOffset = zoombarTop.value - 65;
      if (zoomOffset > 0) {
        if (viewer.scene.mode === SceneMode.COLUMBUS_VIEW) {
          camera.zoomOut();
        } else {
          handlezoom(-1);
        }
      } else if (zoomOffset < 0) {
        if (viewer.scene.mode === SceneMode.COLUMBUS_VIEW) {
          camera.zoomIn();
        } else {
          handlezoom(1);
        }
      }
    };
    zoomBarScrollMouseMoveFunction = (e) => {
      const zoombarTopMove = zoombarTop.value;
      const clientRect = e.target.parentElement.getBoundingClientRect();
      const rectNavigation = container.getBoundingClientRect();
      const endPosition = new Cesium.Cartesian2();
      endPosition.x = e.type === "touchmove" ? e.changedTouches[0].clientX - rectNavigation.left : e.clientX - rectNavigation.left;
      endPosition.y = e.type === "touchmove" ? e.changedTouches[0].clientY - rectNavigation.top : e.clientY - rectNavigation.top;
      const padding = new Cartesian2(clientRect.width - endPosition.x, clientRect.height - endPosition.y);
      let offset = padding.y - 16;
      offset = offset < 0 ? 0 : offset;
      offset = offset > 120 ? 120 : offset;
      zoombarTop.value = 120 - offset;
      const zoomFlag = zoombarTop.value - zoombarTopMove;
      if (zoomFlag > 0) {
        if (viewer.scene.mode === SceneMode.COLUMBUS_VIEW) {
          camera.zoomOut();
        } else {
          handlezoom(-1);
        }
      } else {
        if (viewer.scene.mode === SceneMode.COLUMBUS_VIEW) {
          camera.zoomIn();
        } else {
          handlezoom(1);
        }
      }
    };
    zoomBarScrollMouseUpFunction = () => {
      isZoomBarScrolling = false;
      document.removeEventListener("mousemove", zoomBarScrollMouseMoveFunction, false);
      document.removeEventListener("touchmove", zoomBarScrollMouseMoveFunction, false);
      document.removeEventListener("mouseup", zoomBarScrollMouseUpFunction, false);
      document.removeEventListener("touchend", zoomBarScrollMouseUpFunction, false);
      defined(zoombarTickFunction) && viewer.clock.onTick.removeEventListener(zoombarTickFunction);
      zoomBarScrollMouseUpFunction = void 0;
      zoomBarScrollMouseMoveFunction = void 0;
      zoombarTickFunction = void 0;
      zoombarTop.value = 65;
    };
    document.addEventListener("mousemove", zoomBarScrollMouseMoveFunction, false);
    document.addEventListener("touchmove", zoomBarScrollMouseMoveFunction, false);
    document.addEventListener("mouseup", zoomBarScrollMouseUpFunction, false);
    document.addEventListener("touchend", zoomBarScrollMouseUpFunction, false);
    unsubscribeFromClockTickZoomBar = viewer.clock.onTick.addEventListener(zoombarTickFunction);
  };
  const handlezoom = (i) => {
    const { Cartesian2, Cartesian3, defined, Ellipsoid, Math } = Cesium;
    const { viewer } = $services;
    const scene = viewer.scene;
    const camera = scene.camera;
    const canvas = scene.canvas;
    const centerPixel = new Cartesian2();
    centerPixel.x = canvas.clientWidth / 2;
    centerPixel.y = canvas.clientHeight / 2;
    const centerPosition = pickGlobe(centerPixel);
    if (defined(centerPosition)) {
      const distance = Cartesian3.distance(camera.position, centerPosition);
      let factor = 0.0618 * i * 0.2;
      factor = distance > 300 ? factor : 2 * factor;
      const amount = distance * factor;
      const direction = new Cartesian3();
      Cartesian3.subtract(centerPosition, camera.position, direction);
      const cameraRight = Cartesian3.clone(camera.right);
      const dot = Cartesian3.dot(direction, cameraRight);
      const movementVector = new Cartesian3();
      Cartesian3.multiplyByScalar(cameraRight, dot, movementVector);
      Cartesian3.subtract(direction, movementVector, direction);
      Cartesian3.normalize(direction, direction);
      camera.move(direction, amount);
      const centerPositionNormal = new Cartesian3();
      Cartesian3.normalize(centerPosition, centerPositionNormal);
      const pickPosition = camera.pickEllipsoid(centerPixel, viewer.scene.globe.ellipsoid);
      if (shared.isObject(pickPosition) && defined(pickPosition) && !isNaN(pickPosition.x) && !isNaN(pickPosition.y) && !isNaN(pickPosition.z) && !(camera.positionCartographic.height < 0)) {
        Cartesian3.normalize(pickPosition, pickPosition);
        const angle = Cartesian3.angleBetween(centerPositionNormal, pickPosition);
        if (!Math.equalsEpsilon(angle, 0, Math.EPSILON10)) {
          const axis = Cartesian3.cross(centerPositionNormal, pickPosition, new Cartesian3());
          camera.rotate(axis, angle);
          const listener = vm.getInstanceListener(vcInstance, "zoomEvt");
          listener && emit("zoomEvt", {
            type: i === 1 ? "zoomIn" : "zoomOut",
            camera: viewer.camera,
            status: "end"
          });
        }
      }
    }
  };
  const pickGlobe = (mousePosition) => {
    const { defined, Cartesian3 } = Cesium;
    const { viewer } = $services;
    const scene = viewer.scene;
    const globe = scene.globe;
    const camera = scene.camera;
    if (defined(globe)) {
      let depthIntersection;
      if (scene.pickPositionSupported) {
        depthIntersection = scene.pickPositionWorldCoordinates(mousePosition);
      }
      const ray = camera.getPickRay(mousePosition);
      const rayIntersection = globe.pick(ray, scene);
      const pickDistance = defined(depthIntersection) ? Cartesian3.distance(depthIntersection, camera.positionWC) : Number.POSITIVE_INFINITY;
      const rayDistance = shared.isObject(rayIntersection) && defined(rayIntersection) ? Cartesian3.distance(rayIntersection, camera.positionWC) : Number.POSITIVE_INFINITY;
      return rayDistance > pickDistance ? depthIntersection : rayIntersection;
    }
  };
  const onTooltipBeforeShow = (e) => {
    if (zoomBarScrollMouseMoveFunction !== void 0 || zoominTickFunction !== void 0 || zoomoutTickFunction !== void 0) {
      e.cancel = true;
    }
  };
  const load = (el) => {
    container = el;
    screenSpaceEventHandler = new Cesium.ScreenSpaceEventHandler(el);
    return true;
  };
  const unload = () => {
    document.removeEventListener("mousemove", zoomBarScrollMouseMoveFunction, false);
    document.removeEventListener("touchmove", zoomBarScrollMouseMoveFunction, false);
    document.removeEventListener("mouseup", zoomBarScrollMouseUpFunction, false);
    document.removeEventListener("touchend", zoomBarScrollMouseUpFunction, false);
    unsubscribeFromClockTickZoomin == null ? void 0 : unsubscribeFromClockTickZoomin();
    unsubscribeFromClockTickZoomout == null ? void 0 : unsubscribeFromClockTickZoomout();
    unsubscribeFromClockTickZoomBar == null ? void 0 : unsubscribeFromClockTickZoomBar();
    screenSpaceEventHandler == null ? void 0 : screenSpaceEventHandler.destroy();
    return true;
  };
  return {
    handleZoomInMouseDown,
    handleZoomOutMouseDown,
    handleZoomBarScrollMouseDown,
    load,
    unload,
    zoombarTop,
    zoomInTooltipRef,
    zoomOutTooltipRef,
    zoomBarTooltipRef,
    onTooltipBeforeShow
  };
}

exports["default"] = useZoomControl;
//# sourceMappingURL=use-zoom-control.js.map
