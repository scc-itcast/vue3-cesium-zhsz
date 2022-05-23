import { defineComponent, getCurrentInstance, ref, reactive, watch, nextTick, computed, h, createCommentVNode } from 'vue';
import usePosition, { positionProps } from '../../../composables/private/use-position.mjs';
import { getVcParentInstance, $ } from '../../../utils/private/vm.mjs';
import { hMergeSlot } from '../../../utils/private/render.mjs';
import { VcTooltip } from '../../ui/index.mjs';
import '../../../composables/index.mjs';
import useCompass from './use-compass.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useCommon from '../../../composables/use-common/index.mjs';
import { useLocale } from '../../../composables/use-locale/index.mjs';

const compassSmProps = {
  enableCompassOuterRing: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 1.5
  },
  tooltip: {
    type: [Boolean, Object],
    default: () => ({
      delay: 500,
      anchor: "bottom middle",
      offset: [0, 20],
      tip: void 0
    })
  },
  autoHidden: {
    type: Boolean,
    default: true
  },
  ...positionProps
};
const emits = {
  ...commonEmits,
  compassEvt: (evt) => true
};
var CompassSm = defineComponent({
  name: "VcCompassSm",
  props: compassSmProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcCompassSm";
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { t } = useLocale();
    const parentInstance = getVcParentInstance(instance);
    const { $services } = commonState;
    const compassState = useCompass(props, ctx, instance);
    const positionState = usePosition(props, $services);
    const rootRef = ref(null);
    const outerRingRef = ref(null);
    const hasVcNavigation = ((_a = parentInstance.proxy) == null ? void 0 : _a.$options.name) === "VcNavigationSm";
    const canRender = ref(hasVcNavigation);
    const rootStyle = reactive({});
    watch(() => props, (val) => {
      nextTick(() => {
        if (!instance.mounted) {
          return;
        }
        updateRootStyle();
      });
    }, {
      deep: true
    });
    const tiltbarStyle = computed(() => {
      return {
        left: compassState.tiltbarLeft.value + "px",
        top: compassState.tiltbarTop.value + "px",
        visibility: props.autoHidden ? "hidden" : "visible"
      };
    });
    const visibilityStyle = computed(() => {
      return {
        visibility: props.autoHidden ? "hidden" : "visible"
      };
    });
    const outerRingStyle = computed(() => {
      return {
        transform: "rotate(-" + compassState.heading.value + "rad)",
        WebkitTransform: "rotate(-" + compassState.heading.value + "rad)"
      };
    });
    instance.createCesiumObject = async () => {
      canRender.value = true;
      const { viewer } = $services;
      return new Promise((resolve, reject) => {
        nextTick(() => {
          if (!hasVcNavigation) {
            const viewerElement = viewer._element;
            viewerElement.appendChild($(rootRef));
            resolve($(rootRef));
          } else {
            resolve($(rootRef));
          }
        });
      });
    };
    instance.mount = async () => {
      var _a2;
      updateRootStyle();
      const { viewer } = $services;
      (_a2 = viewer.viewerWidgetResized) == null ? void 0 : _a2.raiseEvent({
        type: instance.cesiumClass,
        status: "mounted",
        target: $(rootRef)
      });
      return compassState.load($services.viewer, $(rootRef));
    };
    instance.unmount = async () => {
      var _a2;
      const { viewer } = $services;
      const viewerElement = viewer._element;
      if (!hasVcNavigation) {
        viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef));
      }
      (_a2 = viewer.viewerWidgetResized) == null ? void 0 : _a2.raiseEvent({
        type: instance.cesiumClass,
        status: "unmounted",
        target: $(rootRef)
      });
      return compassState.unload();
    };
    const updateRootStyle = () => {
      const css = positionState.style.value;
      rootStyle.left = css.left;
      rootStyle.top = css.top;
      rootStyle.transform = css.transform;
      const side = positionState.attach.value;
      const outerRingTarget = $(outerRingRef);
      if (outerRingTarget !== void 0) {
        const clientRect = outerRingTarget == null ? void 0 : outerRingTarget.getBoundingClientRect();
        css.width = `${clientRect == null ? void 0 : clientRect.width}px`;
        css.height = `${clientRect == null ? void 0 : clientRect.height}px`;
        if ((side.bottom || side.top) && !side.left && !side.right) {
          css.left = "50%";
          css.transform = "translate(-50%, 0)";
        }
        if ((side.left || side.right) && !side.top && !side.bottom) {
          css.top = "50%";
          css.transform = "translate(0, -50%)";
        }
      }
      Object.assign(rootStyle, css);
    };
    return () => {
      if (canRender.value) {
        let children = [];
        children = hMergeSlot(ctx.slots.default, children);
        children.push(h("div", {
          class: "vc-compass-tilt-sm",
          style: visibilityStyle.value
        }));
        children.push(h("div", {
          class: "vc-compass-tiltbar-sm",
          style: tiltbarStyle.value
        }));
        children.push(h("div", {
          class: "vc-compass-arrows-sm",
          style: visibilityStyle.value
        }));
        children.push(h("div", {
          ref: outerRingRef,
          class: "vc-compass-outer-ring-sm",
          style: outerRingStyle.value
        }, props.tooltip ? h(VcTooltip, {
          ref: compassState.tooltipRef,
          ...props.tooltip,
          onBeforeShow: compassState.onTooltipBeforeShow
        }, () => h("strong", {}, props.tooltip.tip || t("vc.navigationSm.compass.outerTip"))) : createCommentVNode("v-if")));
        children.push(h("div", {
          class: "vc-arrows-e-sm",
          style: visibilityStyle.value
        }));
        children.push(h("div", {
          class: "vc-arrows-n-sm",
          style: visibilityStyle.value
        }));
        children.push(h("div", {
          class: "vc-arrows-s-sm",
          style: visibilityStyle.value
        }));
        children.push(h("div", {
          class: "vc-arrows-w-sm",
          style: visibilityStyle.value
        }));
        return h("div", {
          ref: rootRef,
          class: "vc-compass-sm " + positionState.classes.value,
          style: rootStyle,
          onDblclick: compassState.handleDoubleClick,
          onMousedown: compassState.handleMouseDown,
          onMouseup: compassState.handleMouseUp,
          onTouchend: compassState.handleMouseUp,
          onTouchstart: compassState.handleMouseDown
        }, children);
      } else {
        return createCommentVNode("v-if");
      }
    };
  }
});

export { compassSmProps, CompassSm as default };
//# sourceMappingURL=compass-sm.mjs.map
