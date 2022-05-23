'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');

const bingImageryProviderProps = {
  url: {
    type: [String, Object],
    default: "https://dev.virtualearth.net"
  },
  bmKey: String,
  tileProtocol: String,
  mapStyle: {
    type: String,
    default: "Aerial"
  },
  culture: {
    type: String,
    default: ""
  },
  ...cesiumProps.ellipsoid,
  ...cesiumProps.tileDiscardPolicy
};
var ImageryProviderBing = vue.defineComponent({
  name: "VcImageryProviderBing",
  props: bingImageryProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "BingMapsImageryProvider";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports.bingImageryProviderProps = bingImageryProviderProps;
exports["default"] = ImageryProviderBing;
//# sourceMappingURL=index.js.map
