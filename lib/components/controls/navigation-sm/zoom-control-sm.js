'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var usePosition = require('../../../composables/private/use-position.js');
var vm = require('../../../utils/private/vm.js');
var render = require('../../../utils/private/render.js');
require('../../../composables/index.js');
var useZoomControl = require('./use-zoom-control.js');
var index$2 = require('../../ui/index.js');
require('../../../utils/util.js');
var emits$1 = require('../../../utils/emits.js');
var index = require('../../../composables/use-common/index.js');
var index$1 = require('../../../composables/use-locale/index.js');
var shared = require('@vue/shared');

const zoomControlSmProps = {
  ...usePosition.positionProps,
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
  ...emits$1.commonEmits,
  zoomEvt: (evt) => true
};
var ZoomControlSm = vue.defineComponent({
  name: "VcZoomControlSm",
  props: zoomControlSmProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "VcZoomControlSm";
    instance.cesiumEvents = [];
    const rootRef = vue.ref(null);
    const zoomInRef = vue.ref(null);
    const zoomBarRef = vue.ref(null);
    const zoomOutRef = vue.ref(null);
    const parentInstance = vm.getVcParentInstance(instance);
    const hasVcNavigation = ((_a = parentInstance.proxy) == null ? void 0 : _a.$options.name) === "VcNavigationSm";
    const canRender = vue.ref(hasVcNavigation);
    const rootStyle = vue.reactive({});
    const commonState = index["default"](props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { t } = index$1.useLocale();
    const { $services } = commonState;
    const positionState = usePosition["default"](props, $services);
    const zoomControlState = useZoomControl["default"](props, ctx, instance, $services);
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
    const zoombarStyle = vue.computed(() => ({ top: zoomControlState.zoombarTop.value + "px" }));
    instance.createCesiumObject = async () => {
      return new Promise((resolve, reject) => {
        canRender.value = true;
        vue.nextTick(() => {
          const rootEl = vm.$(rootRef);
          const { viewer } = $services;
          if (!hasVcNavigation) {
            const viewerElement = viewer._element;
            shared.isObject(rootEl) && (viewerElement == null ? void 0 : viewerElement.appendChild(rootEl));
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
        target: vm.$(rootRef)
      });
      return zoomControlState.load(vm.$(rootRef));
    };
    instance.unmount = async () => {
      var _a2;
      const { viewer } = $services;
      if (!hasVcNavigation) {
        const viewerElement = viewer._element;
        const rootEl = vm.$(rootRef);
        shared.isObject(rootEl) && (viewerElement == null ? void 0 : viewerElement.contains(rootEl)) && viewerElement.removeChild(rootEl);
      }
      (_a2 = viewer.viewerWidgetResized) == null ? void 0 : _a2.raiseEvent({
        type: instance.cesiumClass,
        status: "unmounted",
        target: vm.$(rootRef)
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
        children = render.hMergeSlot(ctx.slots.default, children);
        children.push(vue.h("div", {
          ref: zoomInRef,
          class: "vc-zoomin-sm",
          onMousedown: zoomControlState.handleZoomInMouseDown,
          onTouchstart: zoomControlState.handleZoomInMouseDown
        }, props.tooltip ? vue.h(index$2.VcTooltip, {
          ref: zoomControlState.zoomInTooltipRef,
          ...props.tooltip,
          onBeforeShow: zoomControlState.onTooltipBeforeShow
        }, () => vue.h("strong", {}, props.tooltip.zoomInTip || t("vc.navigationSm.zoomCotrol.zoomInTip"))) : vue.createCommentVNode("v-if")));
        children.push(vue.h("div", {
          ref: zoomOutRef,
          class: "vc-zoomout-sm",
          onMousedown: zoomControlState.handleZoomOutMouseDown,
          onTouchstart: zoomControlState.handleZoomOutMouseDown
        }, props.tooltip ? vue.h(index$2.VcTooltip, {
          ref: zoomControlState.zoomInTooltipRef,
          ...props.tooltip,
          onBeforeShow: zoomControlState.onTooltipBeforeShow
        }, () => vue.h("strong", {}, props.tooltip.zoomOutTip || t("vc.navigationSm.zoomCotrol.zoomOutTip"))) : vue.createCommentVNode("v-if")));
        children.push(vue.h("div", {
          ref: zoomBarRef,
          class: "vc-zoombar-sm",
          style: zoombarStyle.value,
          onMousedown: zoomControlState.handleZoomBarScrollMouseDown,
          onTouchstart: zoomControlState.handleZoomBarScrollMouseDown
        }, props.tooltip ? vue.h(index$2.VcTooltip, {
          ref: zoomControlState.zoomInTooltipRef,
          ...props.tooltip,
          onBeforeShow: zoomControlState.onTooltipBeforeShow
        }, () => vue.h("strong", {}, props.tooltip.zoomBarTip || t("vc.navigationSm.zoomCotrol.zoomBarTip"))) : vue.createCommentVNode("v-if")));
        return vue.h("div", {
          ref: rootRef,
          class: "vc-zoom-control-sm " + positionState.classes.value,
          style: rootStyle
        }, children);
      } else {
        return vue.createCommentVNode("v-if");
      }
    };
  }
});

exports["default"] = ZoomControlSm;
exports.zoomControlSmProps = zoomControlSmProps;
//# sourceMappingURL=zoom-control-sm.js.map
