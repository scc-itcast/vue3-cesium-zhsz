'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');

const mapboxImageryProviderProps = {
  url: {
    type: [String, Object],
    default: "https://api.mapbox.com/styles/v1/"
  },
  username: {
    type: String,
    default: "mapbox"
  },
  styleId: String,
  ...cesiumProps.accessToken,
  tilesize: {
    type: Number,
    default: 512
  },
  scaleFactor: Boolean,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.minimumLevel,
  ...cesiumProps.maximumLevel,
  ...cesiumProps.rectangle,
  ...cesiumProps.credit
};
var ImageryProviderMapbox = vue.defineComponent({
  name: "VcImageryProviderMapbox",
  props: mapboxImageryProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "MapboxStyleImageryProvider";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = ImageryProviderMapbox;
exports.mapboxImageryProviderProps = mapboxImageryProviderProps;
//# sourceMappingURL=index.js.map
