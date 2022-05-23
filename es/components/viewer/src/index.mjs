import { defineComponent, getCurrentInstance, provide, h, createCommentVNode, withDirectives } from 'vue';
import useViewer, { viewerProps } from './useViewer.mjs';
export { viewerProps } from './useViewer.mjs';
import { vcKey } from '../../../utils/config.mjs';
import { viewerEvents } from './events.mjs';
import { VcSkeleton } from '../../ui/index.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import '../../../directives/index.mjs';
import { isPlainObject } from '@vue/shared';
import TouchHold from '../../../directives/touch-hold/index.mjs';

const emits = {
  ...commonEmits,
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
var Viewer = defineComponent({
  name: "VcViewer",
  props: viewerProps,
  emits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumEvents = ["selectedEntityChanged", "trackedEntityChanged"];
    instance.cesiumMembersEvents = viewerEvents;
    const viewerStates = useViewer(props, ctx, instance);
    provide(vcKey, viewerStates.getServices());
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
      if (isPlainObject(props.skeleton) && !viewerStates.isReady.value) {
        children.push(h(VcSkeleton, {
          ...props.skeleton,
          style: { background: props.skeleton.color, width: "100%", height: "100%" }
        }));
      } else {
        children.push(createCommentVNode("v-if"));
      }
      children.push(createCommentVNode("vc-viewer"), withDirectives(h("div", {
        ref: viewerStates.viewerRef,
        class: kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""),
        id: ctx.attrs.id || "cesiumContainer",
        style: ctx.attrs.style || { width: "100%", height: "100%" }
      }, hSlot(ctx.slots.default)), [[TouchHold, onTouchHold, props.touchHoldArg]]));
      return children;
    };
  }
});

export { Viewer as default };
//# sourceMappingURL=index.mjs.map
