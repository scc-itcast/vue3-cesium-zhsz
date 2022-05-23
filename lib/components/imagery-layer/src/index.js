'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var render = require('../../../utils/private/render.js');
require('../../../composables/index.js');
var defaultProps = require('./defaultProps.js');
var vm = require('../../../utils/private/vm.js');
var util = require('../../../utils/util.js');
var emits$1 = require('../../../utils/emits.js');
var index = require('../../../composables/use-common/index.js');
var lodashUnified = require('lodash-unified');

const emits = {
  ...emits$1.commonEmits,
  "update:imageryProvider": (payload) => true
};
const imageryLayerProps = defaultProps["default"];
var ImageryLayer = vue.defineComponent({
  name: "VcLayerImagery",
  props: imageryLayerProps,
  emits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "ImageryLayer";
    instance.cesiumEvents = [];
    const commonState = index["default"](props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { $services } = commonState;
    const { emit } = ctx;
    instance.createCesiumObject = async () => {
      const options = commonState.transformProps(props);
      const imageryProvider = props.imageryProvider || {};
      return new Cesium.ImageryLayer(imageryProvider, options);
    };
    instance.mount = async () => {
      const { viewer } = $services;
      const imageryLayer = instance.cesiumObject;
      imageryLayer.sortOrder = props.sortOrder;
      viewer.imageryLayers.add(imageryLayer);
      return !viewer.isDestroyed() && viewer.imageryLayers.contains(imageryLayer);
    };
    instance.unmount = async () => {
      const { viewer } = $services;
      const imageryLayer = instance.cesiumObject;
      return !viewer.isDestroyed() && viewer.imageryLayers.remove(imageryLayer);
    };
    const updateProvider = (provider) => {
      var _a;
      if (lodashUnified.isUndefined(provider)) {
        return (_a = instance.unmount) == null ? void 0 : _a.call(instance);
      } else {
        const imageryLayer = instance.cesiumObject;
        imageryLayer._imageryProvider = provider;
        const listener = vm.getInstanceListener(instance, "update:imageryProvider");
        if (listener)
          emit("update:imageryProvider", provider);
      }
      return true;
    };
    Object.assign(instance.proxy, {
      __updateProvider: updateProvider
    });
    return () => {
      var _a, _b;
      return ctx.slots.default ? vue.h("i", {
        class: util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""),
        style: { display: "none !important" }
      }, render.hSlot(ctx.slots.default)) : vue.createCommentVNode(util.kebabCase(((_b = instance.proxy) == null ? void 0 : _b.$options.name) || "v-if"));
    };
  }
});

exports["default"] = ImageryLayer;
exports.imageryLayerProps = imageryLayerProps;
//# sourceMappingURL=index.js.map
