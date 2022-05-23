import { defineComponent, getCurrentInstance, ref, reactive, watch, nextTick, computed, h, createCommentVNode } from 'vue';
import usePosition, { positionProps } from '../../../composables/private/use-position.mjs';
import { $, getInstanceListener } from '../../../utils/private/vm.mjs';
import { hMergeSlot } from '../../../utils/private/render.mjs';
import '../../../composables/index.mjs';
import CompassSm from './compass-sm.mjs';
import ZoomControlSm from './zoom-control-sm.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useCommon from '../../../composables/use-common/index.mjs';

const compassOptsDefault = {
  enableCompassOuterRing: true,
  duration: 1.5,
  autoHidden: true,
  tooltip: {
    delay: 1e3,
    anchor: "bottom middle",
    offset: [0, 20],
    tip: void 0
  }
};
const zoomOptsDefault = {
  autoHidden: true,
  tooltip: {
    delay: 1e3,
    anchor: "bottom middle",
    offset: [0, 20],
    tip: void 0
  }
};
const navigationSmProps = {
  ...positionProps,
  compassOpts: {
    type: [Boolean, Object],
    default: () => compassOptsDefault
  },
  zoomOpts: {
    type: [Boolean, Object],
    default: () => zoomOptsDefault
  }
};
const emits = {
  ...commonEmits,
  zoomEvt: (evt) => true,
  compassEvt: (evt) => true
};
var NavigationSm = defineComponent({
  name: "VcNavigationSm",
  inheritAttrs: false,
  props: navigationSmProps,
  emits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcNavigationSm";
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const canRender = ref(false);
    const { $services } = commonState;
    const positionState = usePosition(props, $services);
    const rootRef = ref(null);
    const compassRef = ref(null);
    const zoomControlRef = ref(null);
    const rootStyle = reactive({});
    const { emit } = ctx;
    watch(() => props, () => {
      nextTick(() => {
        var _a, _b;
        updateRootStyle();
        (_a = $(compassRef)) == null ? void 0 : _a.reload();
        (_b = $(zoomControlRef)) == null ? void 0 : _b.reload();
      });
    }, {
      deep: true
    });
    const compassOptions = computed(() => Object.assign({}, compassOptsDefault, props.compassOpts));
    const zoomControlOptions = computed(() => Object.assign({}, zoomOptsDefault, props.zoomOpts));
    const onCompassEvt = (e) => {
      const listener = getInstanceListener(instance, "compassEvt");
      listener && emit("compassEvt", e);
    };
    const onZoomEvt = (e) => {
      const listener = getInstanceListener(instance, "zoomEvt");
      listener && emit("zoomEvt", e);
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
          resolve($(rootRef));
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
      Object.assign(rootStyle, css);
    };
    return () => {
      if (canRender.value) {
        let children = [];
        children = hMergeSlot(ctx.slots.default, children);
        if (compassOptions.value && props.compassOpts !== false) {
          children.push(h(CompassSm, {
            ref: compassRef,
            onCompassEvt,
            ...compassOptions.value
          }));
        }
        if (zoomControlOptions.value && props.zoomOpts !== false) {
          children.push(h(ZoomControlSm, {
            ref: zoomControlRef,
            onZoomEvt,
            ...zoomControlOptions.value
          }));
        }
        return h("div", {
          ref: rootRef,
          class: "vc-navigation-sm " + positionState.classes.value,
          style: rootStyle
        }, children);
      } else {
        return createCommentVNode("v-if");
      }
    };
  }
});

export { NavigationSm as default, navigationSmProps };
//# sourceMappingURL=index.mjs.map
