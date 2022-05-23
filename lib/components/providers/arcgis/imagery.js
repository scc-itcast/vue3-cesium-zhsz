'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');

const arcgisImageryProviderProps = {
  url: {
    type: [String, Object],
    default: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
  },
  ...cesiumProps.token,
  ...cesiumProps.tileDiscardPolicy,
  usePreCachedTilesIfAvailable: {
    type: Boolean,
    default: true
  },
  ...cesiumProps.layers,
  ...cesiumProps.enablePickFeatures,
  ...cesiumProps.rectangle,
  ...cesiumProps.tilingScheme,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.credit,
  ...cesiumProps.tileWidth,
  ...cesiumProps.tileHeight,
  ...cesiumProps.maximumLevel
};
var ImageryProviderArcgis = vue.defineComponent({
  name: "VcImageryProviderArcgis",
  props: arcgisImageryProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "ArcGisMapServerImageryProvider";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports.arcgisImageryProviderProps = arcgisImageryProviderProps;
exports["default"] = ImageryProviderArcgis;
//# sourceMappingURL=imagery.js.map
