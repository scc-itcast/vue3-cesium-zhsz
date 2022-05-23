'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');

const wmsImageryProviderProps = {
  ...cesiumProps.url,
  ...cesiumProps.layers,
  parameters: Object,
  getFeatureInfoParameters: Object,
  ...cesiumProps.enablePickFeatures,
  ...cesiumProps.getFeatureInfoFormats,
  ...cesiumProps.rectangle,
  ...cesiumProps.tilingScheme,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.tileWidth,
  ...cesiumProps.tileHeight,
  ...cesiumProps.minimumLevel,
  ...cesiumProps.maximumLevel,
  crs: String,
  srs: String,
  ...cesiumProps.credit,
  ...cesiumProps.subdomains,
  ...cesiumProps.clock,
  ...cesiumProps.times,
  getFeatureInfoUrl: [String, Object]
};
var ImageryProviderWms = vue.defineComponent({
  name: "VcImageryProviderWms",
  props: wmsImageryProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "WebMapServiceImageryProvider";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = ImageryProviderWms;
exports.wmsImageryProviderProps = wmsImageryProviderProps;
//# sourceMappingURL=index.js.map
