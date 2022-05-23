'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var SuperMapImageryProvider = require('./SuperMapImageryProvider.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');

const supermapImageryProviderProps = {
  url: String,
  ...cesiumProps.minimumLevel,
  ...cesiumProps.maximumLevel,
  name: String,
  transparent: {
    type: Boolean,
    default: true
  },
  credit: {
    type: [String, Object],
    default: "MapQuest, SuperMap iServer Imagery"
  },
  ...cesiumProps.projectionTransforms
};
var ImageryProviderSupermap = vue.defineComponent({
  name: "VcImageryProviderSupermap",
  props: supermapImageryProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "SuperMapImageryProvider";
    const providersState = index["default"](props, ctx, instance);
    if (providersState === void 0) {
      return;
    }
    instance.createCesiumObject = async () => {
      Cesium.SuperMapImageryProvider = Cesium.SuperMapImageryProvider || SuperMapImageryProvider["default"];
      if (providersState.unwatchFns.length === 0) {
        providersState.setPropsWatcher(true);
      }
      const options = providersState.transformProps(props);
      return new Cesium.SuperMapImageryProvider(options);
    };
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = ImageryProviderSupermap;
exports.supermapImageryProviderProps = supermapImageryProviderProps;
//# sourceMappingURL=index.js.map
