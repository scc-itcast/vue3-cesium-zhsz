import { defineComponent, getCurrentInstance, ref, reactive, watch, nextTick, computed, h, createCommentVNode } from 'vue';
import usePosition from '../../../composables/private/use-position.mjs';
import { $, getInstanceListener } from '../../../utils/private/vm.mjs';
import { hMergeSlot } from '../../../utils/private/render.mjs';
import { defaultProps, defaultOptions } from './defaultProps.mjs';
import '../../../composables/index.mjs';
import DistanceLegend from '../distance-legend/index.mjs';
import StatusBar from '../status-bar/index.mjs';
import ZoomControl from '../zoom-control/index.mjs';
import MyLocation from '../my-location/index.mjs';
import Compass from '../compass/index.mjs';
import Print from '../print/index.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useCommon from '../../../composables/use-common/index.mjs';

const emits = {
  ...commonEmits,
  zoomEvt: (evt) => true,
  compassEvt: (evt) => true,
  locationEvt: (evt) => true,
  printEvt: (evt) => true,
  statusBarEvt: (evt) => true,
  distanceLegendEvt: (evt) => true
};
const navigationProps = defaultProps;
var Navigation = defineComponent({
  name: "VcNavigation",
  inheritAttrs: false,
  props: navigationProps,
  emits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcNavigation";
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const canRender = ref(false);
    const { $services } = commonState;
    const positionState = usePosition(props, $services);
    const positionStateOther = usePosition(props.otherOpts || { position: "bottom-right" }, $services);
    const rootRef = ref(null);
    const secondRootRef = ref(null);
    const compassRef = ref(null);
    const zoomControlRef = ref(null);
    const printRef = ref(null);
    const myLocationRef = ref(null);
    const statusBarRef = ref(null);
    const distanceLegendRef = ref(null);
    const rootStyle = reactive({});
    const secondRootStyle = reactive({});
    const { emit } = ctx;
    watch(() => props, () => {
      nextTick(() => {
        var _a, _b, _c, _d, _e, _f;
        updateRootStyle();
        (_a = $(compassRef)) == null ? void 0 : _a.reload();
        (_b = $(zoomControlRef)) == null ? void 0 : _b.reload();
        (_c = $(myLocationRef)) == null ? void 0 : _c.reload();
        (_d = $(printRef)) == null ? void 0 : _d.reload();
        (_e = $(statusBarRef)) == null ? void 0 : _e.reload();
        (_f = $(distanceLegendRef)) == null ? void 0 : _f.reload();
      });
    }, {
      deep: true
    });
    const compassOptions = computed(() => Object.assign({}, defaultOptions.compassOpts, props.compassOpts));
    const zoomControlOptions = computed(() => Object.assign({}, defaultOptions.zoomOpts, props.zoomOpts));
    const printViewOptions = computed(() => Object.assign({}, defaultOptions.printOpts, props.printOpts));
    const myLocationOptions = computed(() => Object.assign({}, defaultOptions.locationOpts, props.locationOpts));
    const otherControlOptions = computed(() => Object.assign({}, defaultOptions.otherOpts, props.otherOpts));
    const onCompassEvt = (evt) => {
      const listener = getInstanceListener(instance, "compassEvt");
      listener && emit("compassEvt", evt);
    };
    const onZoomEvt = (evt) => {
      const listener = getInstanceListener(instance, "zoomEvt");
      listener && emit("zoomEvt", evt);
    };
    const onPrintEvt = (evt) => {
      const listener = getInstanceListener(instance, "printEvt");
      listener && emit("printEvt", evt);
    };
    const onLocationEvt = (evt) => {
      const listener = getInstanceListener(instance, "locationEvt");
      listener && emit("locationEvt", evt);
    };
    const onStatusBarEvt = (evt) => {
      const listener = getInstanceListener(instance, "statusBarEvt");
      listener && emit("statusBarEvt", evt);
    };
    const onDistanceLegendEvt = (evt) => {
      const listener = getInstanceListener(instance, "distanceLegendEvt");
      listener && emit("distanceLegendEvt", evt);
    };
    instance.createCesiumObject = async () => {
      var _a;
      canRender.value = true;
      const { viewer } = $services;
      (_a = viewer.viewerWidgetResized) == null ? void 0 : _a.addEventListener(onViewerWidgetResized);
      return new Promise((resolve, reject) => {
        nextTick(() => {
          const viewerElement = viewer._element;
          viewerElement.appendChild($(rootRef));
          $(secondRootRef) && viewerElement.appendChild($(secondRootRef));
          resolve([$(rootRef), $(secondRootRef)]);
        });
      });
    };
    instance.mount = async () => {
      var _a;
      updateRootStyle();
      const { viewer } = $services;
      (_a = viewer.viewerWidgetResized) == null ? void 0 : _a.raiseEvent({
        type: instance.cesiumClass,
        status: "mounted",
        target: $(rootRef)
      });
      return true;
    };
    instance.unmount = async () => {
      var _a, _b;
      const { viewer } = $services;
      const viewerElement = viewer._element;
      viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef));
      viewerElement.contains($(secondRootRef)) && viewerElement.removeChild($(secondRootRef));
      (_a = viewer.viewerWidgetResized) == null ? void 0 : _a.removeEventListener(onViewerWidgetResized);
      (_b = viewer.viewerWidgetResized) == null ? void 0 : _b.raiseEvent({
        type: instance.cesiumClass,
        status: "unmounted",
        target: $(rootRef)
      });
      return true;
    };
    const onViewerWidgetResized = () => {
      nextTick(() => {
        updateRootStyle();
      });
    };
    const updateRootStyle = () => {
      var _a, _b, _c, _d, _e;
      const compassTarget = (_a = $(compassRef)) == null ? void 0 : _a.$el;
      let height = 0;
      let marginX = 0;
      if (compassTarget !== void 0) {
        const margin = getComputedStyle(compassTarget.parentNode).margin;
        marginX = parseInt(margin);
        height += compassTarget.getBoundingClientRect().height + marginX * 2;
      }
      const zoomControlTarget = (_b = $(zoomControlRef)) == null ? void 0 : _b.$el;
      if (zoomControlTarget !== void 0) {
        height += zoomControlTarget.getBoundingClientRect().height + marginX * 2;
      }
      const printTarget = (_c = $(printRef)) == null ? void 0 : _c.$el;
      if (printTarget !== void 0) {
        height += printTarget.getBoundingClientRect().height + marginX * 2;
      }
      const myLocationTarget = (_d = $(myLocationRef)) == null ? void 0 : _d.$el;
      if (myLocationTarget !== void 0) {
        height += myLocationTarget.getBoundingClientRect().height + marginX * 2;
      }
      const css = positionState.style.value;
      const side = positionState.attach.value;
      rootStyle.left = css.left;
      rootStyle.top = css.top;
      rootStyle.transform = css.transform;
      if ((side.bottom || side.top) && !side.left && !side.right) {
        css.left = "50%";
        css.transform = "translate(-50%, 0)";
      }
      if ((side.left || side.right) && !side.top && !side.bottom) {
        css.top = "50%";
        css.transform = "translate(0, -50%)";
      }
      Object.assign(rootStyle, css, { height: `${height}px` });
      const cssSecondRoot = positionStateOther.style.value;
      const sideSecondRoot = positionStateOther.attach.value;
      secondRootStyle.left = cssSecondRoot.left;
      secondRootStyle.top = cssSecondRoot.top;
      secondRootStyle.transform = cssSecondRoot.transform;
      if ((sideSecondRoot.bottom || sideSecondRoot.top) && !sideSecondRoot.left && !sideSecondRoot.right) {
        cssSecondRoot.left = "50%";
        cssSecondRoot.transform = "translate(-50%, 0)";
      }
      if ((sideSecondRoot.left || sideSecondRoot.right) && !sideSecondRoot.top && !sideSecondRoot.bottom) {
        cssSecondRoot.top = "50%";
        cssSecondRoot.transform = "translate(0, -50%)";
      }
      let height2 = 0;
      const statusBarRefTarget = (_e = $(statusBarRef)) == null ? void 0 : _e.$el;
      if (statusBarRefTarget !== void 0) {
        height2 += statusBarRefTarget.getBoundingClientRect().height;
      }
      Object.assign(secondRootStyle, cssSecondRoot, { height: `${height2}px` });
    };
    return () => {
      if (canRender.value) {
        const inner = [];
        if (compassOptions.value && props.compassOpts !== false) {
          inner.push(h("div", {
            class: "vc-navigation-control"
          }, [
            h(Compass, {
              ref: compassRef,
              ...compassOptions.value,
              onCompassEvt
            })
          ]));
        } else {
          inner.push(createCommentVNode("v-if"));
        }
        if (zoomControlOptions.value && props.zoomOpts !== false) {
          inner.push(h("div", {
            class: "vc-navigation-control"
          }, [
            h(ZoomControl, {
              ref: zoomControlRef,
              ...zoomControlOptions.value,
              onZoomEvt
            })
          ]));
        } else {
          inner.push(createCommentVNode("v-if"));
        }
        if (printViewOptions.value && props.printOpts !== false) {
          inner.push(h("div", {
            class: "vc-navigation-control"
          }, [
            h(Print, {
              ref: printRef,
              ...printViewOptions.value,
              onPrintEvt
            })
          ]));
        } else {
          inner.push(createCommentVNode("v-if"));
        }
        if (myLocationOptions.value && props.locationOpts !== false) {
          inner.push(h("div", {
            class: "vc-navigation-control"
          }, [
            h(MyLocation, {
              ref: myLocationRef,
              ...myLocationOptions.value,
              onLocationEvt
            })
          ]));
        } else {
          inner.push(createCommentVNode("v-if"));
        }
        let children = [h("div", { class: "vc-navigation-controls" }, inner)];
        children = hMergeSlot(ctx.slots.default, children);
        const root = [];
        root.push(h("div", {
          ref: rootRef,
          class: "vc-navigation " + positionState.classes.value,
          style: rootStyle
        }, children));
        if (props.otherOpts !== false) {
          root.push(h("div", {
            ref: secondRootRef,
            class: "vc-location-other-controls " + positionStateOther.classes.value,
            style: secondRootStyle
          }, [
            h(StatusBar, {
              ref: statusBarRef,
              ...otherControlOptions.value.statusBarOpts,
              onStatusBarEvt
            }),
            h(DistanceLegend, {
              ref: distanceLegendRef,
              ...otherControlOptions.value.distancelegendOpts,
              onDistanceLegendEvt
            })
          ]));
        }
        return root;
      } else {
        return createCommentVNode("v-if");
      }
    };
  }
});

export { Navigation as default, navigationProps };
//# sourceMappingURL=index.mjs.map
