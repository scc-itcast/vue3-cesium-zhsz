'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../use-locale/index.js');
require('../../shared/index.js');
var useTimeout = require('../private/use-timeout.js');
var util = require('../../utils/util.js');
var DrawStatus = require('../../shared/src/DrawStatus.js');

function useDrawingAction(props, ctx, instance, cmpName, $services) {
  instance.cesiumClass = cmpName;
  instance.cesiumEvents = [];
  const { t } = index.useLocale();
  const { emit } = ctx;
  const tips = util.kebabCase(cmpName).split("-");
  if (cmpName === "VcMeasurementDistance" && props.showComponentLines) {
    tips[2] = "component-distance";
  }
  if (cmpName === "VcDrawingRegular" || cmpName === "VcMeasurementRegular") {
    if (props.edge === 4) {
      tips[2] = "rectangle";
    }
    if (props.edge === 360) {
      tips[2] = "circle";
    }
  }
  let drawingType = tips[2];
  tips[3] && (drawingType = `${tips[2]}-${tips[3]}`);
  const drawTip = vue.ref("");
  const drawTipOpts = vue.ref({
    drawingTipStart: props.drawtip.drawingTipStart || t(`${tips[0]}.${tips[1]}.${tips[2]}.drawingTipStart`),
    drawingTipEnd: props.drawtip.drawingTipEnd || t(`${tips[0]}.${tips[1]}.${tips[2]}.drawingTipEnd`),
    drawingTipEditing: props.drawtip.drawingTipEditing || t(`${tips[0]}.${tips[1]}.${tips[2]}.drawingTipEditing`)
  });
  const drawStatus = vue.ref(DrawStatus["default"].BeforeDraw);
  const canShowDrawTip = vue.ref(false);
  const drawTipPosition = vue.ref([0, 0, 0]);
  const showEditor = vue.ref(false);
  const editorPosition = vue.ref([0, 0, 0]);
  const mouseoverPoint = vue.ref(null);
  const editingPoint = vue.ref(null);
  const primitiveCollectionRef = vue.ref(null);
  const editorType = vue.ref("");
  const { registerTimeout, removeTimeout } = useTimeout["default"]();
  instance.createCesiumObject = async () => {
    return primitiveCollectionRef;
  };
  const onMouseoverPoints = (e) => {
    var _a, _b;
    const { drawingHandlerActive, viewer } = $services;
    if (props.editable && drawStatus.value !== DrawStatus["default"].Drawing && drawingHandlerActive) {
      e.pickedFeature.primitive.pixelSize = ((_a = props.pointOpts) == null ? void 0 : _a.pixelSize) * 1.5;
      removeTimeout();
      registerTimeout(() => {
        mouseoverPoint.value = e.pickedFeature.primitive;
        editorPosition.value = e.pickedFeature.primitive.position;
        showEditor.value = true;
        canShowDrawTip.value = false;
        drawTipPosition.value = [0, 0, 0];
      }, (_b = props.editorOpts) == null ? void 0 : _b.delay);
    }
    emit("mouseEvt", {
      type: e.type,
      name: drawingType,
      target: e
    }, viewer);
  };
  const onMouseoutPoints = (e) => {
    var _a, _b;
    const { viewer, selectedDrawingActionInstance } = $services;
    if (props.editable) {
      e.pickedFeature.primitive.pixelSize = ((_a = props.pointOpts) == null ? void 0 : _a.pixelSize) * 1;
      removeTimeout();
      registerTimeout(() => {
        editorPosition.value = [0, 0, 0];
        mouseoverPoint.value = void 0;
        showEditor.value = false;
      }, (_b = props.editorOpts) == null ? void 0 : _b.hideDelay);
      selectedDrawingActionInstance && (canShowDrawTip.value = true);
    }
    emit("mouseEvt", {
      type: e.type,
      name: drawingType,
      target: e
    }, viewer);
  };
  const onMouseenterEditor = (evt) => {
    removeTimeout();
  };
  const onMouseleaveEditor = (evt) => {
    var _a;
    removeTimeout();
    registerTimeout(() => {
      var _a2;
      editorPosition.value = [0, 0, 0];
      mouseoverPoint.value.pixelSize = ((_a2 = props.pointOpts) == null ? void 0 : _a2.pixelSize) * 1;
      mouseoverPoint.value = void 0;
      showEditor.value = false;
    }, (_a = props.editorOpts) == null ? void 0 : _a.hideDelay);
  };
  const onPrimitiveCollectionReady = (readyObj) => {
    ;
    readyObj.cesiumObject._vcId = cmpName;
  };
  const onVcCollectionPointReady = function(e) {
    const { cesiumObject: pointPrimitiveCollection } = e;
    const originalUpdate = pointPrimitiveCollection.update;
    pointPrimitiveCollection.update = function(frameState) {
      const originalLength = frameState.commandList.length;
      originalUpdate.call(this, frameState);
      const endLength = frameState.commandList.length;
      for (let i = originalLength; i < endLength; ++i) {
        frameState.commandList[i].pass = Cesium["Pass"].TRANSLUCENT;
        frameState.commandList[i].renderState = Cesium["RenderState"].fromCache({
          depthTest: {
            enabled: false
          },
          depthMask: false
        });
      }
    };
  };
  const onVcCollectionLabelReady = (e) => {
    if (props.disableDepthTest)
      return;
    const labelCollection = e.cesiumObject;
    const originalUpdate = labelCollection.update;
    labelCollection.update = function(frameState) {
      const originalLength = frameState.commandList.length;
      originalUpdate.call(this, frameState);
      const endLength = frameState.commandList.length;
      for (let i = originalLength; i < endLength; ++i) {
        frameState.commandList[i].pass = Cesium["Pass"].OVERLAY;
        frameState.commandList[i].renderState = Cesium["RenderState"].fromCache({
          depthTest: {
            enabled: false
          },
          depthMask: false,
          blending: Cesium.BlendingState.ALPHA_BLEND
        });
      }
    };
  };
  const onVcPrimitiveReady = (e) => {
    if (props.disableDepthTest)
      return;
    const primitive = e.cesiumObject;
    const originalPrimitiveUpdate = primitive.update;
    primitive.update = function(frameState) {
      const originalLength = frameState.commandList.length;
      originalPrimitiveUpdate.call(this, frameState);
      const endLength = frameState.commandList.length;
      for (let i = originalLength; i < endLength; ++i) {
        if (frameState.commandList[i].pass !== Cesium["Pass"].TRANSLUCENT) {
          continue;
        }
        frameState.commandList[i].pass = Cesium["Pass"].OPAQUE;
        frameState.commandList[i].renderState = Cesium["RenderState"].fromCache({
          depthTest: {
            enabled: false
          },
          depthMask: false,
          blending: Cesium.BlendingState.ALPHA_BLEND
        });
      }
    };
  };
  return {
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
    onVcPrimitiveReady,
    onVcCollectionLabelReady
  };
}

exports["default"] = useDrawingAction;
//# sourceMappingURL=use-drawing-action.js.map
