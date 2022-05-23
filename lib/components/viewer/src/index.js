'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useViewer = require('./useViewer.js');
var config = require('../../../utils/config.js');
var events = require('./events.js');
var index = require('../../ui/index.js');
var render = require('../../../utils/private/render.js');
var util = require('../../../utils/util.js');
var emits$1 = require('../../../utils/emits.js');
require('../../../directives/index.js');
var shared = require('@vue/shared');
var index$1 = require('../../../directives/touch-hold/index.js');

const emits = {
  ...emits$1.commonEmits,
  cesiumReady: (payload) => true,
  viewerWidgetResized: (payload) => true,
  selectedEntityChanged: (entity) => true,
  trackedEntityChanged: (entity) => true,
  layerAdded: (imageryLayer, index) => true,
  layerMoved: (imageryLayer, newIndex, oldIndex) => true,
  layerRemoved: (imageryLayer, index) => true,
  layerShownOrHidden: (imageryLayer, index, show) => true,
  dataSourceAdded: (collection, dataSource) => true,
  dataSourceMoved: (dataSource, newIndex, oldIndex) => true,
  dataSourceRemoved: (collection, dataSource) => true,
  collectionChanged: (collection, addedArray, removedArray, changedArray) => true,
  morphComplete: (transitioner, preceneModeMode, sceneMode, wasMorphing) => true,
  morphStart: (transitioner, preceneModeMode, sceneMode, wasMorphing) => true,
  postRender: (scene, time) => true,
  preRender: (scene, time) => true,
  postUpdate: (scene, time) => true,
  preUpdate: (scene, time) => true,
  renderError: (scene, error) => true,
  terrainProviderChanged: (provider) => true,
  changed: (percent) => true,
  moveEnd: () => true,
  moveStart: () => true,
  onStop: (clock) => true,
  onTick: (clock) => true,
  errorEvent: (tileProviderError) => true,
  cameraClicked: (viewModel) => true,
  closeClicked: (viewModel) => true,
  leftClick: (mouseClickEvent) => true,
  leftDoubleClick: (mouseClickEvent) => true,
  leftDown: (mouseClickEvent) => true,
  leftUp: (mouseClickEvent) => true,
  middleClick: (mouseClickEvent) => true,
  middleDown: (mouseClickEvent) => true,
  middleUp: (mouseClickEvent) => true,
  mouseMove: (mouseClickEvent) => true,
  pinchStart: (touch2StartEvent) => true,
  pinchMove: (touchPinchMovementEvent) => true,
  pinchEnd: () => true,
  rightClick: (mouseClickEvent) => true,
  rightDown: (mouseClickEvent) => true,
  rightUp: (mouseClickEvent) => true,
  wheel: (delta) => true,
  imageryLayersUpdatedEvent: () => true,
  tileLoadProgressEvent: (length) => true,
  touchEnd: (evt) => true
};
var Viewer = vue.defineComponent({
  name: "VcViewer",
  props: useViewer.viewerProps,
  emits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumEvents = ["selectedEntityChanged", "trackedEntityChanged"];
    instance.cesiumMembersEvents = events.viewerEvents;
    const viewerStates = useViewer["default"](props, ctx, instance);
    vue.provide(config.vcKey, viewerStates.getServices());
    instance.appContext.config.globalProperties.$VueCesium = viewerStates.getServices();
    Object.assign(instance.proxy, {
      creatingPromise: viewerStates.creatingPromise,
      load: viewerStates.load,
      unload: viewerStates.unload,
      reload: viewerStates.reload,
      cesiumObject: instance.cesiumObject,
      getCesiumObject: () => instance.cesiumObject
    });
    const onTouchHold = (e) => {
      ctx.emit("touchEnd", e);
    };
    return () => {
      var _a;
      const children = [];
      if (shared.isPlainObject(props.skeleton) && !viewerStates.isReady.value) {
        children.push(vue.h(index.VcSkeleton, {
          ...props.skeleton,
          style: { background: props.skeleton.color, width: "100%", height: "100%" }
        }));
      } else {
        children.push(vue.createCommentVNode("v-if"));
      }
      children.push(vue.createCommentVNode("vc-viewer"), vue.withDirectives(vue.h("div", {
        ref: viewerStates.viewerRef,
        class: util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""),
        id: ctx.attrs.id || "cesiumContainer",
        style: ctx.attrs.style || { width: "100%", height: "100%" }
      }, render.hSlot(ctx.slots.default)), [[index$1["default"], onTouchHold, props.touchHoldArg]]));
      return children;
    };
  }
});

exports.viewerProps = useViewer.viewerProps;
exports["default"] = Viewer;
//# sourceMappingURL=index.js.map
