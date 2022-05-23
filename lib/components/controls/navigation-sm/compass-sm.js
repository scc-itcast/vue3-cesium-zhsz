'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var usePosition = require('../../../composables/private/use-position.js');
var vm = require('../../../utils/private/vm.js');
var render = require('../../../utils/private/render.js');
var index$2 = require('../../ui/index.js');
require('../../../composables/index.js');
var useCompass = require('./use-compass.js');
var emits$1 = require('../../../utils/emits.js');
var index = require('../../../composables/use-common/index.js');
var index$1 = require('../../../composables/use-locale/index.js');

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
  ...usePosition.positionProps
};
const emits = {
  ...emits$1.commonEmits,
  compassEvt: (evt) => true
};
var CompassSm = vue.defineComponent({
  name: "VcCompassSm",
  props: compassSmProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "VcCompassSm";
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
    const hasVcNavigation = ((_a = parentInstance.proxy) == null ? void 0 : _a.$options.name) === "VcNavigationSm";
    const canRender = vue.ref(hasVcNavigation);
    const rootStyle = vue.reactive({});
    vue.watch(() => props, (val) => {
      vue.nextTick(() => {
        if (!instance.mounted) {
          return;
        }
        updateRootStyle();
      });
    }, {
      deep: true
    });
    const tiltbarStyle = vue.computed(() => {
      return {
        left: compassState.tiltbarLeft.value + "px",
        top: compassState.tiltbarTop.value + "px",
        visibility: props.autoHidden ? "hidden" : "visible"
      };
    });
    const visibilityStyle = vue.computed(() => {
      return {
        visibility: props.autoHidden ? "hidden" : "visible"
      };
    });
    const outerRingStyle = vue.computed(() => {
      return {
        transform: "rotate(-" + compassState.heading.value + "rad)",
        WebkitTransform: "rotate(-" + compassState.heading.value + "rad)"
      };
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
      (_a2 = viewer.viewerWidgetResized) == null ? void 0 : _a2.raiseEvent({
        type: instance.cesiumClass,
        status: "mounted",
        target: vm.$(rootRef)
      });
      return compassState.load($services.viewer, vm.$(rootRef));
    };
    instance.unmount = async () => {
      var _a2;
      const { viewer } = $services;
      const viewerElement = viewer._element;
      if (!hasVcNavigation) {
        viewerElement.contains(vm.$(rootRef)) && viewerElement.removeChild(vm.$(rootRef));
      }
      (_a2 = viewer.viewerWidgetResized) == null ? void 0 : _a2.raiseEvent({
        type: instance.cesiumClass,
        status: "unmounted",
        target: vm.$(rootRef)
      });
      return compassState.unload();
    };
    const updateRootStyle = () => {
      const css = positionState.style.value;
      rootStyle.left = css.left;
      rootStyle.top = css.top;
      rootStyle.transform = css.transform;
      const side = positionState.attach.value;
      const outerRingTarget = vm.$(outerRingRef);
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
        children = render.hMergeSlot(ctx.slots.default, children);
        children.push(vue.h("div", {
          class: "vc-compass-tilt-sm",
          style: visibilityStyle.value
        }));
        children.push(vue.h("div", {
          class: "vc-compass-tiltbar-sm",
          style: tiltbarStyle.value
        }));
        children.push(vue.h("div", {
          class: "vc-compass-arrows-sm",
          style: visibilityStyle.value
        }));
        children.push(vue.h("div", {
          ref: outerRingRef,
          class: "vc-compass-outer-ring-sm",
          style: outerRingStyle.value
        }, props.tooltip ? vue.h(index$2.VcTooltip, {
          ref: compassState.tooltipRef,
          ...props.tooltip,
          onBeforeShow: compassState.onTooltipBeforeShow
        }, () => vue.h("strong", {}, props.tooltip.tip || t("vc.navigationSm.compass.outerTip"))) : vue.createCommentVNode("v-if")));
        children.push(vue.h("div", {
          class: "vc-arrows-e-sm",
          style: visibilityStyle.value
        }));
        children.push(vue.h("div", {
          class: "vc-arrows-n-sm",
          style: visibilityStyle.value
        }));
        children.push(vue.h("div", {
          class: "vc-arrows-s-sm",
          style: visibilityStyle.value
        }));
        children.push(vue.h("div", {
          class: "vc-arrows-w-sm",
          style: visibilityStyle.value
        }));
        return vue.h("div", {
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
        return vue.createCommentVNode("v-if");
      }
    };
  }
});

exports.compassSmProps = compassSmProps;
exports["default"] = CompassSm;
//# sourceMappingURL=compass-sm.js.map
