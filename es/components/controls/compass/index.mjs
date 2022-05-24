import {
  defineComponent,
  getCurrentInstance,
  ref,
  reactive,
  watch,
  nextTick,
  computed,
  h,
  createCommentVNode,
} from "vue";
import usePosition from "../../../composables/private/use-position.mjs";
import { getVcParentInstance, $ } from "../../../utils/private/vm.mjs";
import { defaultProps, defaultOptions } from "./defaultProps.mjs";
import { hMergeSlot } from "../../../utils/private/render.mjs";
import { VcBtn, VcIcon, VcTooltip } from "../../ui/index.mjs";
import "../../../composables/index.mjs";
import useCompass from "./use-compass.mjs";
import { commonEmits } from "../../../utils/emits.mjs";
import useCommon from "../../../composables/use-common/index.mjs";
import { useLocale } from "../../../composables/use-locale/index.mjs";

const emits = {
  ...commonEmits,
  compassEvt: (evt) => true,
};
const compassProps = defaultProps;
var Compass = defineComponent({
  name: "VcCompass",
  props: compassProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcCompass";
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
    const hasVcNavigation =
      ((_a = parentInstance.proxy) == null ? void 0 : _a.$options.name) ===
      "VcNavigation";
    const canRender = ref(hasVcNavigation);
    const rootStyle = reactive({});
    watch(
      () => props,
      (val) => {
        nextTick(() => {
          if (!instance.mounted) {
            return;
          }
          updateRootStyle();
        });
      },
      {
        deep: true,
      }
    );
    const innerOptions = computed(() => {
      return Object.assign({}, defaultOptions.innerOptions, props.innerOptions);
    });
    const outerOptions = computed(() => {
      return Object.assign({}, defaultOptions.outerOptions, props.outerOptions);
    });
    const markerOptions = computed(() => {
      return Object.assign(
        {},
        defaultOptions.markerOptions,
        props.markerOptions
      );
    });
    const outerCircleStyle = computed(() => {
      return {
        transform:
          "translate(-50%,-50%) rotate(-" + compassState.heading.value + "rad)",
        WebkitTransform:
          "translate(-50%,-50%) rotate(-" + compassState.heading.value + "rad)",
        opacity: void 0,
        background: outerOptions.value.background,
        color: outerOptions.value.color,
        ...props.outerOptions.style,
      };
    });
    const rotationMarkerStyle = computed(() => {
      return {
        transform: "rotate(-" + compassState.orbitCursorAngle.value + "rad)",
        WebkitTransform:
          "rotate(-" + compassState.orbitCursorAngle.value + "rad)",
        opacity: compassState.orbitCursorOpacity.value,
        color: markerOptions.value.color,
      };
    });
    const innerRingStyle = computed(() => {
      const css = {
        background: innerOptions.value.background,
        color: innerOptions.value.color,
      };
      return css;
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
      (_a2 = viewer.viewerWidgetResized) == null
        ? void 0
        : _a2.raiseEvent({
            type: instance.cesiumClass,
            status: "mounted",
            target: $(rootRef),
          });
      return compassState.load($services.viewer);
    };
    instance.unmount = async () => {
      var _a2;
      const { viewer } = $services;
      const viewerElement = viewer._element;
      if (!hasVcNavigation) {
        viewerElement.contains($(rootRef)) &&
          viewerElement.removeChild($(rootRef));
      }
      (_a2 = viewer.viewerWidgetResized) == null
        ? void 0
        : _a2.raiseEvent({
            type: instance.cesiumClass,
            status: "unmounted",
            target: $(rootRef),
          });
      return compassState.unload();
    };
    const updateRootStyle = () => {
      var _a2;
      const css = positionState.style.value;
      rootStyle.left = css.left;
      rootStyle.top = css.top;
      rootStyle.transform = css.transform;
      const side = positionState.attach.value;
      const outerRingTarget =
        (_a2 = $(outerRingRef)) == null ? void 0 : _a2.$el;
      if (outerRingTarget !== void 0) {
        const clientRect = outerRingTarget.getBoundingClientRect();
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
      Object.assign(rootStyle, css);
    };
    return () => {
      if (canRender.value) {
        let children = [];
        children = hMergeSlot(ctx.slots.default, children);
        children.push(
          h(
            VcBtn,
            {
              ref: outerRingRef,
              class: "vc-compass-outerRing absolute-center",
              style: outerCircleStyle.value,
              size: outerOptions.value.size,
              dense: true,
              round: true,
              disabled: !props.enableCompassOuterRing,
            },
            () => [
              ctx.slots.outer
                ? ctx.slots.outer()
                : h(VcIcon, {
                    size: outerOptions.value.size,
                    name: outerOptions.value.icon,
                  }),
              outerOptions.value.tooltip
                ? h(
                    VcTooltip,
                    {
                      ref: compassState.iconOuterTooltipRef,
                      ...outerOptions.value.tooltip,
                      onBeforeShow: compassState.onTooltipBeforeShow,
                    },
                    () =>
                      h(
                        "strong",
                        {},
                        outerOptions.value.tooltip.tip ||
                          t("vc.navigation.compass.outerTip")
                      )
                  )
                : createCommentVNode("v-if"),
            ]
          )
        );
        children.push(
          h(
            VcBtn,
            {
              class: "vc-compass-innerRing absolute-center",
              style: innerRingStyle.value,
              size: innerOptions.value.size,
              dense: true,
              round: true,
            },
            () => [
              h(VcIcon, {
                size: innerOptions.value.size,
                name: innerOptions.value.icon,
              }),
              innerOptions.value.tooltip
                ? h(
                    VcTooltip,
                    {
                      ref: compassState.iconInnerTooltipRef,
                      ...innerOptions.value.tooltip,
                      onBeforeShow: compassState.onTooltipBeforeShow,
                    },
                    () =>
                      h(
                        "strong",
                        {},
                        innerOptions.value.tooltip.tip ||
                          t("vc.navigation.compass.innerTip")
                      )
                  )
                : createCommentVNode("v-if"),
            ]
          )
        );
        children.push(
          rotationMarkerStyle.value.opacity
            ? h(
                VcBtn,
                {
                  class: "vc-compass-rotation-marker absolute-center",
                  dense: true,
                  round: true,
                },
                () => [
                  h(VcIcon, {
                    size: markerOptions.value.size,
                    name: markerOptions.value.icon,
                    style: rotationMarkerStyle.value,
                  }),
                ]
              )
            : createCommentVNode("v-if")
        );
        return h(
          "div",
          {
            ref: rootRef,
            class: "vc-compass " + positionState.classes.value,
            style: rootStyle,
            onDblclick: compassState.handleDoubleClick,
            onMousedown: compassState.handleMouseDown,
            onMouseup: compassState.resetRotater,
            onTouchend: compassState.resetRotater,
            onTouchstart: compassState.handleMouseDown,
          },
          children
        );
      } else {
        return createCommentVNode("v-if");
      }
    };
  },
});

export { compassProps, Compass as default };
//# sourceMappingURL=index.mjs.map
