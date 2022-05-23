'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');

const wmtsImageryProviderProps = {
  ...cesiumProps.url,
  ...cesiumProps.format,
  layer: {
    type: String,
    required: true
  },
  wmtsStyle: {
    type: String,
    required: true
  },
  tileMatrixSetID: {
    type: String,
    required: true
  },
  tileMatrixLabels: Array,
  ...cesiumProps.clock,
  ...cesiumProps.times,
  dimensions: Object,
  ...cesiumProps.tileWidth,
  ...cesiumProps.tileHeight,
  ...cesiumProps.tilingScheme,
  ...cesiumProps.rectangle,
  ...cesiumProps.minimumLevel,
  ...cesiumProps.maximumLevel,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.credit,
  ...cesiumProps.subdomains
};
var ImageryProviderWmts = vue.defineComponent({
  name: "VcImageryProviderWmts",
  props: wmtsImageryProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "WebMapTileServiceImageryProvider";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = ImageryProviderWmts;
exports.wmtsImageryProviderProps = wmtsImageryProviderProps;
//# sourceMappingURL=index.js.map
