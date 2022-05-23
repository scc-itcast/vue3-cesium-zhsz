'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var BaiduMapImageryProvider = require('./BaiduMapImageryProvider.js');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');

const baiduImageryProviderProps = {
  ...cesiumProps.url,
  ...cesiumProps.rectangle,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.tileDiscardPolicy,
  ...cesiumProps.credit,
  ...cesiumProps.minimumLevel,
  ...cesiumProps.maximumLevel,
  protocol: {
    type: String,
    default: "https"
  },
  projectionTransforms: {
    type: [Boolean, Object],
    default: () => {
      return {
        from: "BD09",
        to: "WGS84"
      };
    }
  },
  scale: {
    type: Number,
    default: 1
  },
  ak: {
    type: String,
    default: "E4805d16520de693a3fe707cdc962045"
  },
  customid: {
    type: String,
    default: "normal"
  }
};
var ImageryProviderBaidu = vue.defineComponent({
  name: "VcImageryProviderBaidu",
  props: baiduImageryProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "BaiduMapImageryProvider";
    const providersState = index["default"](props, ctx, instance);
    if (providersState === void 0) {
      return;
    }
    instance.createCesiumObject = async () => {
      Cesium.BaiduMapImageryProvider = Cesium.BaiduMapImageryProvider || BaiduMapImageryProvider["default"];
      if (providersState.unwatchFns.length === 0) {
        providersState.setPropsWatcher(true);
      }
      const options = providersState.transformProps(props);
      return new Cesium.BaiduMapImageryProvider(options);
    };
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports.baiduImageryProviderProps = baiduImageryProviderProps;
exports["default"] = ImageryProviderBaidu;
//# sourceMappingURL=index.js.map
