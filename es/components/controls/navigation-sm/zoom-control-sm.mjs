import { defineComponent, getCurrentInstance, ref, reactive, watch, nextTick, computed, h, createCommentVNode } from 'vue';
import usePosition, { positionProps } from '../../../composables/private/use-position.mjs';
import { getVcParentInstance, $ } from '../../../utils/private/vm.mjs';
import { hMergeSlot } from '../../../utils/private/render.mjs';
import '../../../composables/index.mjs';
import useZoomControl from './use-zoom-control.mjs';
import { VcTooltip } from '../../ui/index.mjs';
import '../../../utils/util.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useCommon from '../../../composables/use-common/index.mjs';
import { useLocale } from '../../../composables/use-locale/index.mjs';
import { isObject } from '@vue/shared';

const zoomControlSmProps = {
  ...positionProps,
  autoHidden: {
    type: Boolean,
    default: false
  },
  tooltip: {
    type: Object,
    default: () => ({
      delay: 1e3,
      anchor: "bottom middle",
      offset: [0, 20],
      zoomInTip: void 0,
      zoomOutTip: void 0,
      zoomBarTip: void 0
    })
  }
};
const emits = {
  ...commonEmits,
  zoomEvt: (evt) => true
};
var ZoomControlSm = defineComponent({
  name: "VcZoomControlSm",
  props: zoomControlSmProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcZoomControlSm";
    instance.cesiumEvents = [];
    const rootRef = ref(null);
    const zoomInRef = ref(null);
    const zoomBarRef = ref(null);
    const zoomOutRef = ref(null);
    const parentInstance = getVcParentInstance(instance);
    const hasVcNavigation = ((_a = parentInstance.proxy) == null ? void 0 : _a.$options.name) === "VcNavigationSm";
    const canRender = ref(hasVcNavigation);
    const rootStyle = reactive({});
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { t } = useLocale();
    const { $services } = commonState;
    const positionState = usePosition(props, $services);
    const zoomControlState = useZoomControl(props, ctx, instance, $services);
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
    const zoombarStyle = computed(() => ({ top: zoomControlState.zoombarTop.value + "px" }));
    instance.createCesiumObject = async () => {
      return new Promise((resolve, reject) => {
        canRender.value = true;
        nextTick(() => {
          const rootEl = $(rootRef);
          const { viewer } = $services;
          if (!hasVcNavigation) {
            const viewerElement = viewer._element;
            isObject(rootEl) && (viewerElement == null ? void 0 : viewerElement.appendChild(rootEl));
            resolve(rootEl);
          } else {
            resolve(rootEl);
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
      return zoomControlState.load($(rootRef));
    };
    instance.unmount = async () => {
      var _a2;
      const { viewer } = $services;
      if (!hasVcNavigation) {
        const viewerElement = viewer._element;
        const rootEl = $(rootRef);
        isObject(rootEl) && (viewerElement == null ? void 0 : viewerElement.contains(rootEl)) && viewerElement.removeChild(rootEl);
      }
      (_a2 = viewer.viewerWidgetResized) == null ? void 0 : _a2.raiseEvent({
        type: instance.cesiumClass,
        status: "unmounted",
        target: $(rootRef)
      });
      return zoomControlState.unload();
    };
    const updateRootStyle = () => {
      const css = positionState.style.value;
      rootStyle.left = css.left;
      rootStyle.top = css.top;
      rootStyle.transform = css.transform;
      rootStyle.visibility = props.autoHidden ? "hidden" : "visible";
      if (!hasVcNavigation) {
        const side = positionState.attach.value;
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
          ref: zoomInRef,
          class: "vc-zoomin-sm",
          onMousedown: zoomControlState.handleZoomInMouseDown,
          onTouchstart: zoomControlState.handleZoomInMouseDown
        }, props.tooltip ? h(VcTooltip, {
          ref: zoomControlState.zoomInTooltipRef,
          ...props.tooltip,
          onBeforeShow: zoomControlState.onTooltipBeforeShow
        }, () => h("strong", {}, props.tooltip.zoomInTip || t("vc.navigationSm.zoomCotrol.zoomInTip"))) : createCommentVNode("v-if")));
        children.push(h("div", {
          ref: zoomOutRef,
          class: "vc-zoomout-sm",
          onMousedown: zoomControlState.handleZoomOutMouseDown,
          onTouchstart: zoomControlState.handleZoomOutMouseDown
        }, props.tooltip ? h(VcTooltip, {
          ref: zoomControlState.zoomInTooltipRef,
          ...props.tooltip,
          onBeforeShow: zoomControlState.onTooltipBeforeShow
        }, () => h("strong", {}, props.tooltip.zoomOutTip || t("vc.navigationSm.zoomCotrol.zoomOutTip"))) : createCommentVNode("v-if")));
        children.push(h("div", {
          ref: zoomBarRef,
          class: "vc-zoombar-sm",
          style: zoombarStyle.value,
          onMousedown: zoomControlState.handleZoomBarScrollMouseDown,
          onTouchstart: zoomControlState.handleZoomBarScrollMouseDown
        }, props.tooltip ? h(VcTooltip, {
          ref: zoomControlState.zoomInTooltipRef,
          ...props.tooltip,
          onBeforeShow: zoomControlState.onTooltipBeforeShow
        }, () => h("strong", {}, props.tooltip.zoomBarTip || t("vc.navigationSm.zoomCotrol.zoomBarTip"))) : createCommentVNode("v-if")));
        return h("div", {
          ref: rootRef,
          class: "vc-zoom-control-sm " + positionState.classes.value,
          style: rootStyle
        }, children);
      } else {
        return createCommentVNode("v-if");
      }
    };
  }
});

export { ZoomControlSm as default, zoomControlSmProps };
//# sourceMappingURL=zoom-control-sm.mjs.map
