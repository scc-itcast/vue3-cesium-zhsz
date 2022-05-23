'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var usePosition = require('../../../composables/private/use-position.js');
var vm = require('../../../utils/private/vm.js');
var render = require('../../../utils/private/render.js');
var defaultProps = require('./defaultProps.js');
require('../../../composables/index.js');
var index$6 = require('../distance-legend/index.js');
var index$5 = require('../status-bar/index.js');
var index$2 = require('../zoom-control/index.js');
var index$4 = require('../my-location/index.js');
var index$1 = require('../compass/index.js');
var index$3 = require('../print/index.js');
var emits$1 = require('../../../utils/emits.js');
var index = require('../../../composables/use-common/index.js');

const emits = {
  ...emits$1.commonEmits,
  zoomEvt: (evt) => true,
  compassEvt: (evt) => true,
  locationEvt: (evt) => true,
  printEvt: (evt) => true,
  statusBarEvt: (evt) => true,
  distanceLegendEvt: (evt) => true
};
const navigationProps = defaultProps.defaultProps;
var Navigation = vue.defineComponent({
  name: "VcNavigation",
  inheritAttrs: false,
  props: navigationProps,
  emits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "VcNavigation";
    const commonState = index["default"](props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const canRender = vue.ref(false);
    const { $services } = commonState;
    const positionState = usePosition["default"](props, $services);
    const positionStateOther = usePosition["default"](props.otherOpts || { position: "bottom-right" }, $services);
    const rootRef = vue.ref(null);
    const secondRootRef = vue.ref(null);
    const compassRef = vue.ref(null);
    const zoomControlRef = vue.ref(null);
    const printRef = vue.ref(null);
    const myLocationRef = vue.ref(null);
    const statusBarRef = vue.ref(null);
    const distanceLegendRef = vue.ref(null);
    const rootStyle = vue.reactive({});
    const secondRootStyle = vue.reactive({});
    const { emit } = ctx;
    vue.watch(() => props, () => {
      vue.nextTick(() => {
        var _a, _b, _c, _d, _e, _f;
        updateRootStyle();
        (_a = vm.$(compassRef)) == null ? void 0 : _a.reload();
        (_b = vm.$(zoomControlRef)) == null ? void 0 : _b.reload();
        (_c = vm.$(myLocationRef)) == null ? void 0 : _c.reload();
        (_d = vm.$(printRef)) == null ? void 0 : _d.reload();
        (_e = vm.$(statusBarRef)) == null ? void 0 : _e.reload();
        (_f = vm.$(distanceLegendRef)) == null ? void 0 : _f.reload();
      });
    }, {
      deep: true
    });
    const compassOptions = vue.computed(() => Object.assign({}, defaultProps.defaultOptions.compassOpts, props.compassOpts));
    const zoomControlOptions = vue.computed(() => Object.assign({}, defaultProps.defaultOptions.zoomOpts, props.zoomOpts));
    const printViewOptions = vue.computed(() => Object.assign({}, defaultProps.defaultOptions.printOpts, props.printOpts));
    const myLocationOptions = vue.computed(() => Object.assign({}, defaultProps.defaultOptions.locationOpts, props.locationOpts));
    const otherControlOptions = vue.computed(() => Object.assign({}, defaultProps.defaultOptions.otherOpts, props.otherOpts));
    const onCompassEvt = (evt) => {
      const listener = vm.getInstanceListener(instance, "compassEvt");
      listener && emit("compassEvt", evt);
    };
    const onZoomEvt = (evt) => {
      const listener = vm.getInstanceListener(instance, "zoomEvt");
      listener && emit("zoomEvt", evt);
    };
    const onPrintEvt = (evt) => {
      const listener = vm.getInstanceListener(instance, "printEvt");
      listener && emit("printEvt", evt);
    };
    const onLocationEvt = (evt) => {
      const listener = vm.getInstanceListener(instance, "locationEvt");
      listener && emit("locationEvt", evt);
    };
    const onStatusBarEvt = (evt) => {
      const listener = vm.getInstanceListener(instance, "statusBarEvt");
      listener && emit("statusBarEvt", evt);
    };
    const onDistanceLegendEvt = (evt) => {
      const listener = vm.getInstanceListener(instance, "distanceLegendEvt");
      listener && emit("distanceLegendEvt", evt);
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
          vm.$(secondRootRef) && viewerElement.appendChild(vm.$(secondRootRef));
          resolve([vm.$(rootRef), vm.$(secondRootRef)]);
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
      viewerElement.contains(vm.$(secondRootRef)) && viewerElement.removeChild(vm.$(secondRootRef));
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
      var _a, _b, _c, _d, _e;
      const compassTarget = (_a = vm.$(compassRef)) == null ? void 0 : _a.$el;
      let height = 0;
      let marginX = 0;
      if (compassTarget !== void 0) {
        const margin = getComputedStyle(compassTarget.parentNode).margin;
        marginX = parseInt(margin);
        height += compassTarget.getBoundingClientRect().height + marginX * 2;
      }
      const zoomControlTarget = (_b = vm.$(zoomControlRef)) == null ? void 0 : _b.$el;
      if (zoomControlTarget !== void 0) {
        height += zoomControlTarget.getBoundingClientRect().height + marginX * 2;
      }
      const printTarget = (_c = vm.$(printRef)) == null ? void 0 : _c.$el;
      if (printTarget !== void 0) {
        height += printTarget.getBoundingClientRect().height + marginX * 2;
      }
      const myLocationTarget = (_d = vm.$(myLocationRef)) == null ? void 0 : _d.$el;
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
      const statusBarRefTarget = (_e = vm.$(statusBarRef)) == null ? void 0 : _e.$el;
      if (statusBarRefTarget !== void 0) {
        height2 += statusBarRefTarget.getBoundingClientRect().height;
      }
      Object.assign(secondRootStyle, cssSecondRoot, { height: `${height2}px` });
    };
    return () => {
      if (canRender.value) {
        const inner = [];
        if (compassOptions.value && props.compassOpts !== false) {
          inner.push(vue.h("div", {
            class: "vc-navigation-control"
          }, [
            vue.h(index$1["default"], {
              ref: compassRef,
              ...compassOptions.value,
              onCompassEvt
            })
          ]));
        } else {
          inner.push(vue.createCommentVNode("v-if"));
        }
        if (zoomControlOptions.value && props.zoomOpts !== false) {
          inner.push(vue.h("div", {
            class: "vc-navigation-control"
          }, [
            vue.h(index$2["default"], {
              ref: zoomControlRef,
              ...zoomControlOptions.value,
              onZoomEvt
            })
          ]));
        } else {
          inner.push(vue.createCommentVNode("v-if"));
        }
        if (printViewOptions.value && props.printOpts !== false) {
          inner.push(vue.h("div", {
            class: "vc-navigation-control"
          }, [
            vue.h(index$3["default"], {
              ref: printRef,
              ...printViewOptions.value,
              onPrintEvt
            })
          ]));
        } else {
          inner.push(vue.createCommentVNode("v-if"));
        }
        if (myLocationOptions.value && props.locationOpts !== false) {
          inner.push(vue.h("div", {
            class: "vc-navigation-control"
          }, [
            vue.h(index$4["default"], {
              ref: myLocationRef,
              ...myLocationOptions.value,
              onLocationEvt
            })
          ]));
        } else {
          inner.push(vue.createCommentVNode("v-if"));
        }
        let children = [vue.h("div", { class: "vc-navigation-controls" }, inner)];
        children = render.hMergeSlot(ctx.slots.default, children);
        const root = [];
        root.push(vue.h("div", {
          ref: rootRef,
          class: "vc-navigation " + positionState.classes.value,
          style: rootStyle
        }, children));
        if (props.otherOpts !== false) {
          root.push(vue.h("div", {
            ref: secondRootRef,
            class: "vc-location-other-controls " + positionStateOther.classes.value,
            style: secondRootStyle
          }, [
            vue.h(index$5["default"], {
              ref: statusBarRef,
              ...otherControlOptions.value.statusBarOpts,
              onStatusBarEvt
            }),
            vue.h(index$6["default"], {
              ref: distanceLegendRef,
              ...otherControlOptions.value.distancelegendOpts,
              onDistanceLegendEvt
            })
          ]));
        }
        return root;
      } else {
        return vue.createCommentVNode("v-if");
      }
    };
  }
});

exports["default"] = Navigation;
exports.navigationProps = navigationProps;
//# sourceMappingURL=index.js.map
