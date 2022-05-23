'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$3 = require('../../components/overlays/index.js');
var index$2 = require('../../components/primitive-collections/index.js');
var index$4 = require('../../components/ui/index.js');
var index$1 = require('../use-locale/index.js');
require('../../shared/index.js');
var cesiumHelpers = require('../../utils/cesium-helpers.js');
var vue = require('vue');
var index = require('../use-common/index.js');
var useDrawingAction = require('./use-drawing-action.js');
var platform = require('../../utils/platform.js');
var DrawStatus = require('../../shared/src/DrawStatus.js');
var MeasureUnits = require('../../shared/src/MeasureUnits.js');

function useDrawingPoint(props, ctx, cmpName) {
  const instance = vue.getCurrentInstance();
  const commonState = index["default"](props, ctx, instance);
  if (commonState === void 0) {
    return;
  }
  const { t } = index$1.useLocale();
  const $services = commonState.$services;
  const { emit } = ctx;
  const {
    drawingType,
    drawTip,
    drawTipOpts,
    drawStatus,
    canShowDrawTip,
    drawTipPosition,
    showEditor,
    editorPosition,
    mouseoverPoint,
    editingPoint,
    primitiveCollectionRef,
    editorType,
    onMouseoverPoints,
    onMouseoutPoints,
    onMouseenterEditor,
    onMouseleaveEditor,
    onPrimitiveCollectionReady,
    onVcCollectionPointReady,
    onVcCollectionLabelReady
  } = useDrawingAction["default"](props, ctx, instance, cmpName, $services);
  const renderDatas = vue.ref([]);
  let restorePosition;
  let unwatchFns = [];
  if (cmpName === "VcDrawingPin" && props.billboardOpts.image === "") {
    props.billboardOpts.image = Cesium.buildModuleUrl("Assets/Textures/pin.svg");
  }
  unwatchFns.push(vue.watch(() => props.editable, (val) => {
    const { drawingFabInstance, selectedDrawingActionInstance } = $services;
    if (val && (selectedDrawingActionInstance == null ? void 0 : selectedDrawingActionInstance.name) === drawingType) {
      const drawingFabInstanceVm = drawingFabInstance == null ? void 0 : drawingFabInstance.proxy;
      drawingFabInstanceVm.toggleAction(selectedDrawingActionInstance);
    }
  }));
  const startNew = () => {
    const { Cartesian3 } = Cesium;
    const point = {
      drawStatus: DrawStatus["default"].Drawing,
      show: false,
      position: new Cartesian3(),
      lng: 0,
      lat: 0,
      height: 0,
      slope: 0,
      pointOpts: {},
      labelOpts: {},
      billboardOpts: {}
    };
    renderDatas.value.push(point);
    drawStatus.value = DrawStatus["default"].Drawing;
    canShowDrawTip.value = true;
    drawTip.value = drawTipOpts.value.drawingTipStart;
  };
  const stop = (removeLatest = true) => {
    if (removeLatest && drawStatus.value === DrawStatus["default"].Drawing) {
      renderDatas.value.pop();
    }
    const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : renderDatas.value.length - 1;
    const point = renderDatas.value[index];
    if (point) {
      point.drawStatus = DrawStatus["default"].AfterDraw;
    }
    drawStatus.value = DrawStatus["default"].AfterDraw;
    canShowDrawTip.value = false;
    drawTipPosition.value = [0, 0, 0];
  };
  const handleMouseClick = (movement, options) => {
    const { viewer, drawingFabInstance, getWorldPosition, selectedDrawingActionInstance } = $services;
    const drawingFabInstanceVm = drawingFabInstance == null ? void 0 : drawingFabInstance.proxy;
    if (options.button === 2 && options.ctrl) {
      const drawingsOption = drawingFabInstanceVm == null ? void 0 : drawingFabInstanceVm.getDrawingActionInstance(drawingType);
      drawingFabInstanceVm == null ? void 0 : drawingFabInstanceVm.toggleAction(drawingsOption);
      vue.nextTick(() => {
        emit("drawEvt", {
          name: drawingType,
          finished: true,
          windowPoistion: movement,
          type: "cancel"
        }, viewer);
      });
      return;
    }
    const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : renderDatas.value.length - 1;
    const point = renderDatas.value[index];
    if (options.button === 2 && editingPoint.value) {
      drawingFabInstanceVm.editingActionName = void 0;
      renderDatas.value[index] = restorePosition;
      drawStatus.value = DrawStatus["default"].AfterDraw;
      renderDatas.value[index].drawStatus = DrawStatus["default"].AfterDraw;
      editingPoint.value = void 0;
      drawTip.value = drawTipOpts.value.drawingTipStart;
      vue.nextTick(() => {
        emit("drawEvt", {
          name: drawingType,
          index,
          renderDatas,
          finished: true,
          windowPoistion: movement,
          type: "cancel"
        }, viewer);
      });
      return;
    }
    if (options.button !== 0) {
      return;
    }
    const { defined } = Cesium;
    let type = "new";
    if (drawStatus.value === DrawStatus["default"].BeforeDraw) {
      const scene = viewer.scene;
      const position = getWorldPosition(scene, movement, {});
      if (!defined(position)) {
        return;
      }
      point.position = position;
      point.show = true;
      point.drawStatus = DrawStatus["default"].AfterDraw;
      drawStatus.value = DrawStatus["default"].AfterDraw;
      drawTip.value = drawTipOpts.value.drawingTipStart;
      vue.nextTick(() => {
        emit("drawEvt", {
          index,
          renderDatas,
          name: drawingType,
          finished: true,
          position,
          windowPoistion: movement,
          type
        }, viewer);
      });
    } else {
      drawStatus.value = DrawStatus["default"].AfterDraw;
      point.drawStatus = DrawStatus["default"].AfterDraw;
      if (editingPoint.value) {
        editingPoint.value = void 0;
        drawingFabInstanceVm.editingActionName = void 0;
        canShowDrawTip.value = false;
        type = editorType.value;
      } else {
        if (props.mode === 1) {
          drawingFabInstanceVm.toggleAction(selectedDrawingActionInstance);
        }
      }
      const scene = viewer.scene;
      if (platform.platform().hasTouch === true) {
        const position = getWorldPosition(scene, movement, {});
        if (defined(position)) {
          point.position = position;
          point.show = true;
        }
      }
      if (selectedDrawingActionInstance) {
        drawTip.value = drawTipOpts.value.drawingTipStart;
        canShowDrawTip.value = true;
      }
      vue.nextTick(() => {
        emit("drawEvt", {
          index,
          renderDatas,
          name: drawingType,
          finished: true,
          position: renderDatas.value[index].position,
          positionDegrees: renderDatas.value[index].positionDegrees,
          windowPoistion: movement,
          type
        }, viewer);
      });
    }
  };
  const handleMouseMove = (movement) => {
    const { viewer, getWorldPosition } = $services;
    const scene = viewer.scene;
    const { defined, SceneMode } = Cesium;
    if (scene.mode !== SceneMode.MORPHING) {
      const position = getWorldPosition(scene, movement, {});
      if (!defined(position)) {
        return;
      }
      drawTipPosition.value = position;
      if (drawStatus.value === DrawStatus["default"].AfterDraw) {
        startNew();
      }
      if (drawStatus.value !== DrawStatus["default"].Drawing) {
        return;
      }
      const index = editingPoint.value ? editingPoint.value._vcPolylineIndx : renderDatas.value.length - 1;
      const point = renderDatas.value[index];
      point.position = position;
      const cart = Cesium.Cartographic.fromCartesian(position, scene.globe.ellipsoid);
      const positionDegrees = [Cesium.Math.toDegrees(cart.longitude), Cesium.Math.toDegrees(cart.latitude), cart.height];
      point.positionDegrees = positionDegrees;
      getMeasurementResult(point, movement);
      const type = editingPoint.value ? editorType.value : "new";
      vue.nextTick(() => {
        emit("drawEvt", {
          index,
          renderDatas,
          name: drawingType,
          finished: false,
          position,
          positionDegrees,
          windowPoistion: movement,
          type
        }, viewer);
      });
    }
  };
  const getMeasurementResult = (point, movement) => {
    const { viewer } = $services;
    const scene = viewer.scene;
    const { defined, defaultValue, Math: CesiumMath, SceneMode } = Cesium;
    const ellipsoid = scene.frameState.mapProjection.ellipsoid;
    const positionCartographic = ellipsoid.cartesianToCartographic(point.position, {});
    const globe = scene.globe;
    let height = defined(globe) ? defaultValue(globe.getHeight(positionCartographic), 0) : 0;
    height = props.heightReference === 0 ? positionCartographic.height : positionCartographic.height - height;
    CesiumMath.equalsEpsilon(height, 0, CesiumMath.EPSILON3) && (height = 0);
    let slope = 0;
    if (scene.mode !== SceneMode.SCENE2D) {
      if (!movement) {
        movement = scene.cartesianToCanvasCoordinates(point.position, {});
      }
      slope = getSlope(scene, movement);
    }
    point.show = true;
    point.lng = positionCartographic.longitude;
    point.lat = positionCartographic.latitude;
    point.height = height;
    point.slope = slope;
  };
  const getSlope = (scene, movement) => {
    const { getWorldPosition } = $services;
    const { defined, Cartesian2, Cartesian3, Math: CesiumMath } = Cesium;
    const position = getWorldPosition(scene, movement, {});
    if (defined(position)) {
      const cameraPosition = scene.camera.position;
      const distance = Cartesian3.distance(position, cameraPosition);
      const scratchCartesian3s = [new Cartesian3(), new Cartesian3(), new Cartesian3(), new Cartesian3(), new Cartesian3()];
      const normalScratch = new Cartesian3();
      const surfaceNormalScratch = new Cartesian3();
      if (!(1e4 < distance)) {
        const p0 = scratchCartesian3s[0];
        const p1 = scratchCartesian3s[1];
        const p2 = scratchCartesian3s[2];
        const p3 = scratchCartesian3s[3];
        let surfaceNormal = scene.frameState.mapProjection.ellipsoid.geodeticSurfaceNormal(position, normalScratch);
        surfaceNormal = Cartesian3.negate(surfaceNormal, surfaceNormal);
        const u = Cartesian2.clone(movement, scratchCartesian3s[0]);
        u.x -= 2;
        u.y -= 2;
        const d = Cartesian2.clone(movement, scratchCartesian3s[1]);
        d.x -= 2;
        d.y += 2;
        const h2 = Cartesian2.clone(movement, scratchCartesian3s[2]);
        h2.x += 2;
        h2.y += 2;
        const p = Cartesian2.clone(movement, scratchCartesian3s[3]);
        p.x += 2;
        p.y -= 2;
        const T = getWorldPosition(scene, u, p0);
        const x = getWorldPosition(scene, d, p1);
        const b = getWorldPosition(scene, h2, p2);
        const E = getWorldPosition(scene, p, p3);
        let m, f, g, _, y, C, v, S;
        if (defined(T)) {
          m = Cartesian3.subtract(T, position, p0);
          f = Cartesian3.magnitude(m) / distance <= 0.05 ? Cartesian3.normalize(m, p0) : void 0;
        }
        if (defined(x)) {
          g = Cartesian3.subtract(x, position, p1);
          _ = Cartesian3.magnitude(g) / distance <= 0.05 ? Cartesian3.normalize(g, p1) : void 0;
        }
        if (defined(b)) {
          y = Cartesian3.subtract(b, position, p2);
          C = Cartesian3.magnitude(y) / distance <= 0.05 ? Cartesian3.normalize(y, p2) : void 0;
        }
        if (defined(E)) {
          v = Cartesian3.subtract(E, position, p3);
          S = Cartesian3.magnitude(v) / distance <= 0.05 ? Cartesian3.normalize(v, p3) : void 0;
        }
        let P = Cartesian3.clone(Cartesian3.ZERO, surfaceNormalScratch);
        let A = scratchCartesian3s[4];
        if (defined(f) && defined(_)) {
          A = Cartesian3.normalize(Cartesian3.cross(f, _, A), A);
          P = Cartesian3.add(P, A, P);
        }
        if (defined(_) && defined(C)) {
          A = Cartesian3.normalize(Cartesian3.cross(_, C, A), A);
          P = Cartesian3.add(P, A, P);
        }
        if (defined(C) && defined(S)) {
          A = Cartesian3.normalize(Cartesian3.cross(C, S, A), A);
          P = Cartesian3.add(P, A, P);
        }
        if (defined(S) && defined(f)) {
          A = Cartesian3.normalize(Cartesian3.cross(S, f, A), A);
          P = Cartesian3.add(P, A, P);
        }
        if (!P.equals(Cartesian3.ZERO)) {
          P = Cartesian3.normalize(P, P);
          return CesiumMath.asinClamped(Math.abs(Math.sin(Cartesian3.angleBetween(P, surfaceNormal))));
        }
      }
    }
    return 0;
  };
  const onEditorClick = (e) => {
    var _a, _b, _c;
    editorPosition.value = [0, 0, 0];
    showEditor.value = false;
    if (!props.editable) {
      return;
    }
    editorType.value = e;
    const { viewer, drawingFabInstance } = $services;
    const drawingFabInstanceVm = drawingFabInstance == null ? void 0 : drawingFabInstance.proxy;
    if (e === "move") {
      drawTip.value = drawTipOpts.value.drawingTipEditing;
      drawStatus.value = DrawStatus["default"].Drawing;
      editingPoint.value = mouseoverPoint.value;
      canShowDrawTip.value = true;
      restorePosition = Object.assign({}, renderDatas.value[editingPoint.value._vcPolylineIndx]);
      drawingFabInstanceVm.editingActionName = drawingType;
    } else if (e === "remove") {
      const index = mouseoverPoint.value._vcPolylineIndx;
      renderDatas.value.splice(index, 1);
    } else {
      const index = mouseoverPoint.value._vcPolylineIndx;
      const polyline = renderDatas.value[index];
      (_c = (_b = (_a = props.editorOpts) == null ? void 0 : _a[e]) == null ? void 0 : _b.callback) == null ? void 0 : _c.call(_b, index, polyline);
    }
    emit("editorEvt", {
      type: e,
      name: drawingType,
      renderDatas,
      index: mouseoverPoint.value._vcPolylineIndx
    }, viewer);
  };
  const clear = () => {
    renderDatas.value = [];
    stop();
  };
  const getLabelText = (point) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { viewer } = $services;
    const scene = viewer.scene;
    const positionCartographic = scene.frameState.mapProjection.ellipsoid.cartesianToCartographic(point.position, {});
    if (!Cesium.defined(positionCartographic)) {
      return "";
    }
    return `${t("vc.measurement.point.lng")}${MeasureUnits["default"].angleToString(positionCartographic.longitude, (_a = props.measureUnits) == null ? void 0 : _a.angleUnits, props.locale, (_b = props.decimals) == null ? void 0 : _b.lng)}
${t("vc.measurement.point.lat")}${MeasureUnits["default"].angleToString(positionCartographic.latitude, (_c = props.measureUnits) == null ? void 0 : _c.angleUnits, props.locale, (_d = props.decimals) == null ? void 0 : _d.lat)}
${t("vc.measurement.point.height")}${MeasureUnits["default"].distanceToString(point.height, (_e = props.measureUnits) == null ? void 0 : _e.distanceUnits, props.locale, (_f = props.decimals) == null ? void 0 : _f.height)}
${t("vc.measurement.point.slope")}${MeasureUnits["default"].angleToString(point.slope, (_g = props.measureUnits) == null ? void 0 : _g.slopeUnits, props.locale, (_h = props.decimals) == null ? void 0 : _h.slope)}`;
  };
  if (props.preRenderDatas && props.preRenderDatas.length) {
    const { viewer } = $services;
    props.preRenderDatas.forEach((preRenderData) => {
      const pointDrawing = {
        drawStatus: DrawStatus["default"].AfterDraw,
        show: true,
        position: cesiumHelpers.makeCartesian3(preRenderData),
        lng: 0,
        lat: 0,
        height: 0,
        slope: 0,
        pointOpts: {},
        labelOpts: {},
        billboardOpts: {}
      };
      const cart = Cesium.Cartographic.fromCartesian(pointDrawing.position, viewer.scene.globe.ellipsoid);
      pointDrawing.positionDegrees = [Cesium.Math.toDegrees(cart.longitude), Cesium.Math.toDegrees(cart.latitude), cart.height];
      getMeasurementResult(pointDrawing);
      renderDatas.value.push(pointDrawing);
    });
  }
  vue.onUnmounted(() => {
    unwatchFns.forEach((item) => item());
    unwatchFns = [];
  });
  const publicMethods = { renderDatas, startNew, stop, clear, handleMouseClick, handleMouseMove };
  Object.assign(instance.proxy, publicMethods);
  return () => {
    var _a, _b, _c;
    const { createGuid } = Cesium;
    const children = [];
    const pointsRender = [];
    const labelsRender = [];
    const billboardsRender = [];
    renderDatas.value.forEach((point, index) => {
      var _a2;
      const pointOpts = Object.assign({}, props.pointOpts, point.pointOpts);
      pointsRender.push({
        position: point.position,
        id: createGuid(),
        _vcPolylineIndx: index,
        ...pointOpts,
        show: point.show && ((_a2 = props.pointOpts) == null ? void 0 : _a2.show) || props.editable || point.drawStatus === DrawStatus["default"].Drawing
      });
      const labelsOpts = Object.assign({}, props.labelOpts, point.labelOpts);
      cmpName.includes("VcMeasurement") && labelsRender.push({
        position: point.position,
        id: createGuid(),
        text: getLabelText(point),
        ...labelsOpts
      });
      if (cmpName === "VcDrawingPin") {
        const billboardOpts = Object.assign({}, props.billboardOpts, point.billboardOpts);
        billboardsRender.push({
          position: point.position,
          id: createGuid(),
          _vcPolylineIndx: index,
          ...billboardOpts
        });
        props.labelOpts.text && labelsRender.push({
          position: point.position,
          id: createGuid(),
          ...labelsOpts
        });
      }
    });
    children.push(vue.h(index$2.VcCollectionPoint, {
      enableMouseEvent: props.enableMouseEvent,
      points: pointsRender,
      onMouseover: onMouseoverPoints,
      onMouseout: onMouseoutPoints,
      onReady: onVcCollectionPointReady
    }));
    (cmpName.includes("VcMeasurement") || cmpName === "VcDrawingPin") && children.push(vue.h(index$2.VcCollectionLabel, {
      enableMouseEvent: props.enableMouseEvent,
      labels: labelsRender,
      onReady: onVcCollectionLabelReady
    }));
    cmpName === "VcDrawingPin" && children.push(vue.h(index$2.VcCollectionBillboard, {
      enableMouseEvent: props.enableMouseEvent,
      billboards: billboardsRender
    }));
    if (((_a = props.drawtip) == null ? void 0 : _a.show) && canShowDrawTip.value) {
      const { viewer } = $services;
      children.push(vue.h(index$3.VcOverlayHtml, {
        position: drawTipPosition.value,
        pixelOffset: (_b = props.drawtip) == null ? void 0 : _b.pixelOffset,
        teleport: {
          to: viewer.container
        }
      }, () => vue.h("div", {
        class: "vc-drawtip vc-tooltip--style"
      }, drawTip.value)));
    }
    if (showEditor.value) {
      const buttons = [];
      if (mouseoverPoint.value) {
        const editorOpts = props.editorOpts;
        for (const key in editorOpts) {
          if (!Array.isArray(editorOpts[key]) && typeof editorOpts[key] !== "number") {
            const opts = {
              ...editorOpts[key]
            };
            delete opts.color;
            buttons.push(vue.h(index$4.VcBtn, {
              style: { color: editorOpts[key].color, background: editorOpts[key].background },
              ...opts,
              onclick: onEditorClick.bind(void 0, key)
            }, () => vue.h(index$4.VcTooltip, {
              ...editorOpts[key].tooltip
            }, () => {
              var _a2;
              return vue.h("strong", null, ((_a2 = editorOpts[key].tooltip) == null ? void 0 : _a2.tip) || t(`vc.drawing.editor.${key}`));
            })));
          }
        }
      }
      const { viewer } = $services;
      children.push(vue.h(index$3.VcOverlayHtml, {
        position: editorPosition.value,
        pixelOffset: (_c = props.editorOpts) == null ? void 0 : _c.pixelOffset,
        teleport: {
          to: viewer.container
        },
        onMouseenter: onMouseenterEditor,
        onMouseleave: onMouseleaveEditor
      }, () => vue.h("div", {
        class: "vc-editor"
      }, buttons)));
    }
    return vue.h(index$2.VcCollectionPrimitive, {
      ref: primitiveCollectionRef,
      show: props.show,
      onReady: onPrimitiveCollectionReady
    }, () => children);
  };
}

exports["default"] = useDrawingPoint;
//# sourceMappingURL=use-drawing-point.js.map
