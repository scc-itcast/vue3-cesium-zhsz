'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$4 = require('../../components/primitive-collections/index.js');
var index$3 = require('../../components/ui/index.js');
require('../index.js');
require('../../shared/index.js');
var vue = require('vue');
var usePosition = require('../private/use-position.js');
var vm = require('../../utils/private/vm.js');
require('../../utils/util.js');
var mergeDescriptors = require('../../utils/merge-descriptors.js');
var config = require('../../utils/config.js');
var index$1 = require('../use-locale/index.js');
var index = require('../use-common/index.js');
var index$2 = require('../use-handler/index.js');
var VisibilityState = require('../../shared/src/VisibilityState.js');
var shared = require('@vue/shared');

function useDrawingFab(props, ctx, instance, drawingActionInstances, mainFabOpts, clearActionOpts, cmpName) {
  instance.cesiumEvents = [];
  const commonState = index["default"](props, ctx, instance);
  if (commonState === void 0) {
    return;
  }
  const { t } = index$1.useLocale();
  const { $services } = commonState;
  const { emit } = ctx;
  const canRender = vue.ref(false);
  const containerStyle = vue.reactive({});
  const positionState = usePosition["default"](props, $services);
  const containerRef = vue.ref(null);
  const fabRef = vue.ref(null);
  const mounted = vue.ref(false);
  const primitiveCollection = vue.ref(null);
  let visibilityState;
  let selectedDrawingActionInstance = void 0;
  const handleMouseClick = (movement, options) => {
    var _a, _b;
    const cmp = selectedDrawingActionInstance == null ? void 0 : selectedDrawingActionInstance.cmpRef.value;
    (_a = cmp == null ? void 0 : cmp.handleMouseClick) == null ? void 0 : _a.call(cmp, movement.position, options);
    let drawingActionOpts;
    const instanceVm = instance.proxy;
    if (instanceVm.editingActionName) {
      drawingActionOpts = getDrawingActionInstance(instanceVm.editingActionName);
    }
    if (drawingActionOpts && drawingActionOpts !== selectedDrawingActionInstance) {
      const cmp2 = drawingActionOpts.cmpRef.value;
      (_b = cmp2 == null ? void 0 : cmp2.handleMouseClick) == null ? void 0 : _b.call(cmp2, movement.position, options);
    }
  };
  const handleMouseMove = (movement, options) => {
    var _a, _b;
    const cmp = selectedDrawingActionInstance == null ? void 0 : selectedDrawingActionInstance.cmpRef.value;
    (_a = cmp == null ? void 0 : cmp.handleMouseMove) == null ? void 0 : _a.call(cmp, movement.endPosition, options);
    let drawingActionOpts;
    const instanceVm = instance.proxy;
    if (instanceVm.editingActionName) {
      drawingActionOpts = getDrawingActionInstance(instanceVm.editingActionName);
    }
    if (drawingActionOpts && drawingActionOpts !== selectedDrawingActionInstance) {
      const cmp2 = drawingActionOpts.cmpRef.value;
      (_b = cmp2 == null ? void 0 : cmp2.handleMouseMove) == null ? void 0 : _b.call(cmp2, movement.endPosition, options);
    }
  };
  const handleDoubleClick = (movement, options) => {
    var _a, _b;
    const cmp = selectedDrawingActionInstance == null ? void 0 : selectedDrawingActionInstance.cmpRef.value;
    (_a = cmp == null ? void 0 : cmp.handleDoubleClick) == null ? void 0 : _a.call(cmp, movement.position, options);
    let drawingActionOpts;
    const instanceVm = instance.proxy;
    if (instanceVm.editingActionName) {
      drawingActionOpts = getDrawingActionInstance(instanceVm.editingActionName);
    }
    if (drawingActionOpts && drawingActionOpts !== selectedDrawingActionInstance) {
      const cmp2 = drawingActionOpts.cmpRef.value;
      (_b = cmp2 == null ? void 0 : cmp2.handleDoubleClick) == null ? void 0 : _b.call(cmp2, movement.position, options);
    }
  };
  const {
    activate,
    deactivate,
    destroy: destroyHandler,
    isActive
  } = index$2["default"]($services, {
    handleMouseClick,
    handleMouseMove,
    handleDoubleClick
  });
  instance.createCesiumObject = async () => {
    canRender.value = true;
    visibilityState = new VisibilityState["default"]();
    return drawingActionInstances.value;
  };
  instance.mount = async () => {
    updateRootStyle();
    mounted.value = true;
    activate();
    return true;
  };
  instance.unmount = async () => {
    if (selectedDrawingActionInstance) {
      toggleAction(selectedDrawingActionInstance);
      selectedDrawingActionInstance = void 0;
    }
    deactivate();
    destroyHandler();
    mounted.value = false;
    return true;
  };
  const getWorldPosition = (scene, windowPosition, result) => {
    const { Cesium3DTileFeature, Cesium3DTileset, Cartesian3, defined, Model, Ray } = Cesium;
    if (Cesium.SuperMapVersion) {
      return scene.pickPosition(windowPosition);
    }
    let position;
    const cartesianScratch = {};
    const rayScratch = new Ray();
    if (scene.pickPositionSupported) {
      visibilityState.hide(scene);
      const pickObj = scene.pick(windowPosition, 1, 1);
      visibilityState.restore(scene);
      if (defined(pickObj)) {
        if (pickObj instanceof Cesium3DTileFeature || pickObj.primitive instanceof Cesium3DTileset || pickObj.primitive instanceof Model || pickObj.primitive instanceof Cesium.S3MTilesLayer) {
          position = scene.pickPosition(windowPosition, cartesianScratch);
          if (defined(position)) {
            return Cartesian3.clone(position, result);
          }
        }
      }
    }
    if (defined(scene.globe)) {
      const ray = scene.camera.getPickRay(windowPosition, rayScratch);
      position = scene.globe.pick(ray, scene, cartesianScratch);
      return defined(position) ? Cartesian3.clone(position, result) : void 0;
    }
    return void 0;
  };
  const updateRootStyle = () => {
    var _a;
    const css = positionState.style.value;
    containerStyle.left = css.left;
    containerStyle.top = css.top;
    containerStyle.transform = css.transform;
    const side = positionState.attach.value;
    const fabTarget = (_a = vm.$(fabRef)) == null ? void 0 : _a.$el;
    if (fabTarget !== void 0) {
      const clientRect = fabTarget.getBoundingClientRect();
      css.width = `${clientRect.width}px`;
      css.height = `${clientRect.height}px`;
      if ((side.bottom || side.top) && !side.left && !side.right) {
        css.left = "50%";
        css.transform = "translate(-50%, 0)";
      }
      if ((side.left || side.right) && !side.top && !side.bottom) {
        css.top = "50%";
        css.transform = "translate(0, -50%)";
      }
    }
    Object.assign(containerStyle, css);
  };
  const restoreColor = vue.ref(null);
  const toggleAction = (drawingOption) => {
    var _a;
    const { viewer } = $services;
    if (shared.isString(drawingOption)) {
      drawingOption = getDrawingActionInstance(drawingOption);
    }
    if (!drawingOption) {
      commonState.logger.error("Invalid drawingActionOption or drawingActionOption name");
      return;
    }
    const index = getDrawingActionInstanceIndex(drawingOption.name);
    if (index === -1) {
      return;
    }
    if (selectedDrawingActionInstance !== void 0) {
      selectedDrawingActionInstance.actionOpts.color = restoreColor.value || "";
      const cmp = selectedDrawingActionInstance.cmpRef.value;
      (_a = cmp.stop) == null ? void 0 : _a.call(cmp);
      selectedDrawingActionInstance.isActive = false;
      emit("activeEvt", {
        type: selectedDrawingActionInstance.name,
        option: selectedDrawingActionInstance,
        isActive: false
      }, viewer);
    }
    if ((selectedDrawingActionInstance == null ? void 0 : selectedDrawingActionInstance.name) === (drawingOption == null ? void 0 : drawingOption.name)) {
      selectedDrawingActionInstance = void 0;
      drawingActionInstances.value[index].actionOpts.color = restoreColor.value || "red";
    } else {
      vue.nextTick(() => {
        const cmp = drawingActionInstances.value[index].cmpRef.value;
        cmp.startNew();
        restoreColor.value = drawingActionInstances.value[index].actionOpts.color;
        drawingActionInstances.value[index].actionOpts.color = props.activeColor;
        drawingActionInstances.value[index].isActive = true;
        selectedDrawingActionInstance = drawingActionInstances.value[index];
        emit("activeEvt", {
          type: selectedDrawingActionInstance.name,
          option: selectedDrawingActionInstance,
          isActive: true
        }, viewer);
      });
    }
  };
  const getDrawingActionInstance = (drawingName) => {
    return drawingActionInstances.value.find((v) => v.name === drawingName);
  };
  const getDrawingActionInstanceIndex = (drawingName) => {
    return drawingActionInstances.value.findIndex((v) => v.name === drawingName);
  };
  const onUpdateFab = (value) => {
    if (value) {
      activate();
    } else {
      if (selectedDrawingActionInstance) {
        toggleAction(selectedDrawingActionInstance);
      }
      deactivate();
    }
    mainFabOpts.modelValue = value;
    emit("fabUpdated", value);
  };
  const clearAll = () => {
    drawingActionInstances.value.forEach((drawingActionOpts) => {
      var _a;
      (_a = drawingActionOpts.cmpRef.value) == null ? void 0 : _a.clear();
    });
    selectedDrawingActionInstance && toggleAction(selectedDrawingActionInstance);
  };
  const getServices = () => {
    return mergeDescriptors.mergeDescriptors(commonState.getServices(), {
      get drawingFabInstance() {
        return instance;
      },
      get selectedDrawingActionInstance() {
        return selectedDrawingActionInstance;
      },
      get getWorldPosition() {
        return getWorldPosition;
      },
      get drawingHandlerActive() {
        return isActive;
      }
    });
  };
  const onPrimitiveCollectionReady = ({ cesiumObject }) => {
    ;
    cesiumObject._vcId = cmpName;
  };
  vue.provide(config.vcKey, getServices());
  instance.appContext.config.globalProperties.$VueCesium = getServices();
  Object.assign(instance.proxy, {
    clearAll,
    deactivate,
    activate,
    toggleAction,
    getFabRef: () => fabRef.value,
    getDrawingActionInstance,
    getDrawingActionInstances: () => drawingActionInstances.value,
    getSelectedDrawingActionInstance: () => selectedDrawingActionInstance
  });
  const renderContent = () => {
    if (canRender.value) {
      const fabActionChildren = [];
      const drawingChildren = [];
      drawingActionInstances.value.forEach((drawingActionInstance) => {
        fabActionChildren.push(vue.h(index$3.VcFabAction, {
          ref: drawingActionInstance.actionRef,
          style: drawingActionInstance.actionStyle,
          class: drawingActionInstance.actionClass,
          ...drawingActionInstance.actionOpts,
          onClick: () => {
            toggleAction(drawingActionInstance);
          }
        }, () => vue.h(index$3.VcTooltip, {
          ...drawingActionInstance.actionOpts.tooltip
        }, () => vue.h("strong", null, drawingActionInstance.tip))));
        drawingActionInstance.cmp && drawingChildren.push(vue.h(drawingActionInstance.cmp, {
          ref: drawingActionInstance.cmpRef,
          editable: props.editable,
          clampToGround: props.clampToGround,
          mode: props.mode,
          onDrawEvt: (e, viewer) => {
            emit("drawEvt", e, viewer);
          },
          onEditorEvt: (e, viewer) => {
            emit("editorEvt", e, viewer);
          },
          onMouseEvt: (e, viewer) => {
            emit("mouseEvt", e, viewer);
          },
          ...drawingActionInstance.cmpOpts
        }));
      });
      drawingActionInstances.value.length && fabActionChildren.push(vue.h(index$3.VcFabAction, {
        style: {
          background: clearActionOpts.color,
          color: clearActionOpts.textColor
        },
        class: "vc-draw-button vc-draw-clear",
        ...clearActionOpts,
        onClick: clearAll
      }, () => vue.h(index$3.VcTooltip, {
        ...clearActionOpts.tooltip
      }, () => vue.h("strong", null, clearActionOpts.tooltip.tip || t(`vc.${cmpName}.clear.tip`)))));
      const root = [];
      if (mounted.value) {
        root.push(vue.h("div", {
          ref: containerRef,
          class: "vc-drawings-container " + positionState.classes.value,
          style: containerStyle
        }, ctx.slots.body !== void 0 ? ctx.slots.body(drawingActionInstances.value) : vue.h(index$3.VcFab, {
          ref: fabRef,
          class: "vc-draw-button",
          style: {
            background: mainFabOpts.color,
            color: mainFabOpts.textColor
          },
          ...mainFabOpts,
          "onUpdate:modelValue": onUpdateFab
        }, {
          default: () => fabActionChildren,
          tooltip: () => vue.h(index$3.VcTooltip, {
            ...mainFabOpts.tooltip
          }, () => vue.h("strong", null, mainFabOpts.tooltip.tip || (mainFabOpts.modelValue ? t("vc.drawing.collapse") : t("vc.drawing.expand"))))
        })));
      }
      root.push(vue.h(index$4.VcCollectionPrimitive, {
        ref: primitiveCollection,
        show: props.show,
        onReady: onPrimitiveCollectionReady
      }, () => drawingChildren));
      return root;
    } else {
      return vue.createCommentVNode("v-if");
    }
  };
  return {
    renderContent
  };
}

exports["default"] = useDrawingFab;
//# sourceMappingURL=use-drawing-fab.js.map
