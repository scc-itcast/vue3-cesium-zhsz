'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var TencentImageryProvider = require('./TencentImageryProvider.js');
var index = require('../../../composables/use-providers/index.js');

const tencentImageryProviderProps = {
  ...cesiumProps.url,
  subdomains: {
    type: Array,
    default: () => ["1", "2", "3"]
  },
  mapStyle: {
    type: String,
    default: "vector"
  },
  styleId: {
    type: String,
    default: "1"
  },
  protocol: String,
  ...cesiumProps.credit,
  ...cesiumProps.minimumLevel,
  ...cesiumProps.maximumLevel,
  ...cesiumProps.rectangle,
  ...cesiumProps.tilingScheme,
  ...cesiumProps.projectionTransforms
};
var ImageryProviderTencent = vue.defineComponent({
  name: "VcImageryProviderTencent",
  props: tencentImageryProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "TencentImageryProvider";
    const providersState = index["default"](props, ctx, instance);
    if (providersState === void 0) {
      return;
    }
    instance.createCesiumObject = async () => {
      Cesium.TencentImageryProvider = Cesium.TencentImageryProvider || TencentImageryProvider["default"];
      if (providersState.unwatchFns.length === 0) {
        providersState.setPropsWatcher(true);
      }
      const options = providersState.transformProps(props);
      return new Cesium.TencentImageryProvider(options);
    };
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = ImageryProviderTencent;
exports.tencentImageryProviderProps = tencentImageryProviderProps;
//# sourceMappingURL=index.js.map
