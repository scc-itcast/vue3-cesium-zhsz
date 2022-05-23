'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');

const osmImageryProviderProps = {
  url: {
    type: String,
    default: "https://a.tile.openstreetmap.org"
  },
  ...cesiumProps.fileExtension,
  ...cesiumProps.rectangle,
  ...cesiumProps.minimumLevel,
  ...cesiumProps.maximumLevel,
  ...cesiumProps.ellipsoid,
  credit: {
    type: [String, Object],
    default: "MapQuest, Open Street Map and contributors, CC-BY-SA"
  }
};
var ImageryProviderOsm = vue.defineComponent({
  name: "VcImageryProviderOsm",
  props: osmImageryProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "OpenStreetMapImageryProvider";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = ImageryProviderOsm;
exports.osmImageryProviderProps = osmImageryProviderProps;
//# sourceMappingURL=index.js.map
