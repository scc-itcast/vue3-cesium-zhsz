'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');

const urltemplateImageryProviderProps = {
  ...cesiumProps.url,
  pickFeaturesUrl: [String, Object],
  urlSchemeZeroPadding: Object,
  ...cesiumProps.subdomains,
  ...cesiumProps.credit,
  ...cesiumProps.minimumLevel,
  ...cesiumProps.maximumLevel,
  ...cesiumProps.rectangle,
  ...cesiumProps.tilingScheme,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.tileWidth,
  ...cesiumProps.tileHeight,
  hasAlphaChannel: {
    type: Boolean,
    default: true
  },
  ...cesiumProps.getFeatureInfoFormats,
  ...cesiumProps.enablePickFeatures,
  customTags: Object,
  ...cesiumProps.projectionTransforms
};
var ImageryProviderUrltemplate = vue.defineComponent({
  name: "VcImageryProviderUrltemplate",
  props: urltemplateImageryProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "UrlTemplateImageryProvider";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = ImageryProviderUrltemplate;
exports.urltemplateImageryProviderProps = urltemplateImageryProviderProps;
//# sourceMappingURL=index.js.map
