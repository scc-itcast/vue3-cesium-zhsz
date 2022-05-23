'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var usePosition = require('../../../composables/private/use-position.js');
var vm = require('../../../utils/private/vm.js');
var render = require('../../../utils/private/render.js');
require('../../../composables/index.js');
var compassSm = require('./compass-sm.js');
var zoomControlSm = require('./zoom-control-sm.js');
var emits$1 = require('../../../utils/emits.js');
var index = require('../../../composables/use-common/index.js');

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
  ...usePosition.positionProps,
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
  ...emits$1.commonEmits,
  zoomEvt: (evt) => true,
  compassEvt: (evt) => true
};
var NavigationSm = vue.defineComponent({
  name: "VcNavigationSm",
  inheritAttrs: false,
  props: navigationSmProps,
  emits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "VcNavigationSm";
    const commonState = index["default"](props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const canRender = vue.ref(false);
    const { $services } = commonState;
    const positionState = usePosition["default"](props, $services);
    const rootRef = vue.ref(null);
    const compassRef = vue.ref(null);
    const zoomControlRef = vue.ref(null);
    const rootStyle = vue.reactive({});
    const { emit } = ctx;
    vue.watch(() => props, () => {
      vue.nextTick(() => {
        var _a, _b;
        updateRootStyle();
        (_a = vm.$(compassRef)) == null ? void 0 : _a.reload();
        (_b = vm.$(zoomControlRef)) == null ? void 0 : _b.reload();
      });
    }, {
      deep: true
    });
    const compassOptions = vue.computed(() => Object.assign({}, compassOptsDefault, props.compassOpts));
    const zoomControlOptions = vue.computed(() => Object.assign({}, zoomOptsDefault, props.zoomOpts));
    const onCompassEvt = (e) => {
      const listener = vm.getInstanceListener(instance, "compassEvt");
      listener && emit("compassEvt", e);
    };
    const onZoomEvt = (e) => {
      const listener = vm.getInstanceListener(instance, "zoomEvt");
      listener && emit("zoomEvt", e);
    };
    instance.createCesiumObject = async () => {
      var _a;
      canRender.value = true;
      const { viewer } = $services;
      (_a = viewer.viewerWidgetResized) == null ? void 0 : _a.addEventListener(onViewerWidgetResized);
      return new Promise((resolve, reject) => {
        vue.nextTick(() => {
          const viewerElement = viewer._element;
          viewerElement.appendChild(vm.$(rootRef));
          resolve(vm.$(rootRef));
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
        target: vm.$(rootRef)
      });
      return true;
    };
    instance.unmount = async () => {
      var _a, _b;
      const { viewer } = $services;
      const viewerElement = viewer._element;
      viewerElement.contains(vm.$(rootRef)) && viewerElement.removeChild(vm.$(rootRef));
      (_a = viewer.viewerWidgetResized) == null ? void 0 : _a.removeEventListener(onViewerWidgetResized);
      (_b = viewer.viewerWidgetResized) == null ? void 0 : _b.raiseEvent({
        type: instance.cesiumClass,
        status: "unmounted",
        target: vm.$(rootRef)
      });
      return true;
    };
    const onViewerWidgetResized = () => {
      vue.nextTick(() => {
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
        children = render.hMergeSlot(ctx.slots.default, children);
        if (compassOptions.value && props.compassOpts !== false) {
          children.push(vue.h(compassSm["default"], {
            ref: compassRef,
            onCompassEvt,
            ...compassOptions.value
          }));
        }
        if (zoomControlOptions.value && props.zoomOpts !== false) {
          children.push(vue.h(zoomControlSm["default"], {
            ref: zoomControlRef,
            onZoomEvt,
            ...zoomControlOptions.value
          }));
        }
        return vue.h("div", {
          ref: rootRef,
          class: "vc-navigation-sm " + positionState.classes.value,
          style: rootStyle
        }, children);
      } else {
        return vue.createCommentVNode("v-if");
      }
    };
  }
});

exports["default"] = NavigationSm;
exports.navigationSmProps = navigationSmProps;
//# sourceMappingURL=index.js.map
