"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var vue = require("vue");
var usePosition = require("../../../composables/private/use-position.js");
var vm = require("../../../utils/private/vm.js");
var defaultProps = require("./defaultProps.js");
var render = require("../../../utils/private/render.js");
var index$2 = require("../../ui/index.js");
require("../../../composables/index.js");
var useCompass = require("./use-compass.js");
var emits$1 = require("../../../utils/emits.js");
var index = require("../../../composables/use-common/index.js");
var index$1 = require("../../../composables/use-locale/index.js");

const emits = {
  ...emits$1.commonEmits,
  compassEvt: (evt) => true,
};
const compassProps = defaultProps.defaultProps;
var Compass = vue.defineComponent({
  name: "VcCompass",
  props: compassProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "VcCompass";
    const commonState = index["default"](props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { t } = index$1.useLocale();
    const parentInstance = vm.getVcParentInstance(instance);
    const { $services } = commonState;
    const compassState = useCompass["default"](props, ctx, instance);
    const positionState = usePosition["default"](props, $services);
    const rootRef = vue.ref(null);
    const outerRingRef = vue.ref(null);
    const hasVcNavigation =
      ((_a = parentInstance.proxy) == null ? void 0 : _a.$options.name) ===
      "VcNavigation";
    const canRender = vue.ref(hasVcNavigation);
    const rootStyle = vue.reactive({});
    vue.watch(
      () => props,
      (val) => {
        vue.nextTick(() => {
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
    const innerOptions = vue.computed(() => {
      return Object.assign(
        {},
        defaultProps.defaultOptions.innerOptions,
        props.innerOptions
      );
    });
    const outerOptions = vue.computed(() => {
      return Object.assign(
        {},
        defaultProps.defaultOptions.outerOptions,
        props.outerOptions
      );
    });
    const markerOptions = vue.computed(() => {
      return Object.assign(
        {},
        defaultProps.defaultOptions.markerOptions,
        props.markerOptions
      );
    });
    const outerCircleStyle = vue.computed(() => {
      return {
        transform:
          "translate(-50%,-50%) rotate(-" + compassState.heading.value + "rad)",
        WebkitTransform:
          "translate(-50%,-50%) rotate(-" + compassState.heading.value + "rad)",
        opacity: void 0,
        background: outerOptions.value.background,
        color: outerOptions.value.color,
      };
    });
    const rotationMarkerStyle = vue.computed(() => {
      return {
        transform: "rotate(-" + compassState.orbitCursorAngle.value + "rad)",
        WebkitTransform:
          "rotate(-" + compassState.orbitCursorAngle.value + "rad)",
        opacity: compassState.orbitCursorOpacity.value,
        color: markerOptions.value.color,
      };
    });
    const innerRingStyle = vue.computed(() => {
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
        vue.nextTick(() => {
          if (!hasVcNavigation) {
            const viewerElement = viewer._element;
            viewerElement.appendChild(vm.$(rootRef));
            resolve(vm.$(rootRef));
          } else {
            resolve(vm.$(rootRef));
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
            target: vm.$(rootRef),
          });
      return compassState.load($services.viewer);
    };
    instance.unmount = async () => {
      var _a2;
      const { viewer } = $services;
      const viewerElement = viewer._element;
      if (!hasVcNavigation) {
        viewerElement.contains(vm.$(rootRef)) &&
          viewerElement.removeChild(vm.$(rootRef));
      }
      (_a2 = viewer.viewerWidgetResized) == null
        ? void 0
        : _a2.raiseEvent({
            type: instance.cesiumClass,
            status: "unmounted",
            target: vm.$(rootRef),
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
        (_a2 = vm.$(outerRingRef)) == null ? void 0 : _a2.$el;
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
        children = render.hMergeSlot(ctx.slots.default, children);
        children.push(
          vue.h(
            index$2.VcBtn,
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
                : vue.h(index$2.VcIcon, {
                    size: outerOptions.value.size,
                    name: outerOptions.value.icon,
                  }),
              outerOptions.value.tooltip
                ? vue.h(
                    index$2.VcTooltip,
                    {
                      ref: compassState.iconOuterTooltipRef,
                      ...outerOptions.value.tooltip,
                      onBeforeShow: compassState.onTooltipBeforeShow,
                    },
                    () =>
                      vue.h(
                        "strong",
                        {},
                        outerOptions.value.tooltip.tip ||
                          t("vc.navigation.compass.outerTip")
                      )
                  )
                : vue.createCommentVNode("v-if"),
            ]
          )
        );
        children.push(
          vue.h(
            index$2.VcBtn,
            {
              class: "vc-compass-innerRing absolute-center",
              style: innerRingStyle.value,
              size: innerOptions.value.size,
              dense: true,
              round: true,
            },
            () => [
              vue.h(index$2.VcIcon, {
                size: innerOptions.value.size,
                name: innerOptions.value.icon,
              }),
              innerOptions.value.tooltip
                ? vue.h(
                    index$2.VcTooltip,
                    {
                      ref: compassState.iconInnerTooltipRef,
                      ...innerOptions.value.tooltip,
                      onBeforeShow: compassState.onTooltipBeforeShow,
                    },
                    () =>
                      vue.h(
                        "strong",
                        {},
                        innerOptions.value.tooltip.tip ||
                          t("vc.navigation.compass.innerTip")
                      )
                  )
                : vue.createCommentVNode("v-if"),
            ]
          )
        );
        children.push(
          rotationMarkerStyle.value.opacity
            ? vue.h(
                index$2.VcBtn,
                {
                  class: "vc-compass-rotation-marker absolute-center",
                  dense: true,
                  round: true,
                },
                () => [
                  vue.h(index$2.VcIcon, {
                    size: markerOptions.value.size,
                    name: markerOptions.value.icon,
                    style: rotationMarkerStyle.value,
                  }),
                ]
              )
            : vue.createCommentVNode("v-if")
        );
        return vue.h(
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
        return vue.createCommentVNode("v-if");
      }
    };
  },
});

exports.compassProps = compassProps;
exports["default"] = Compass;
//# sourceMappingURL=index.js.map
