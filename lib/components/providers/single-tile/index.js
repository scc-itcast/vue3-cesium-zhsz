'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');

const singletileImageryProviderProps = {
  ...cesiumProps.url,
  ...cesiumProps.rectangle,
  ...cesiumProps.credit,
  ...cesiumProps.ellipsoid
};
var ImageryProviderSingletile = vue.defineComponent({
  name: "VcImageryProviderSingletile",
  props: singletileImageryProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "SingleTileImageryProvider";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = ImageryProviderSingletile;
exports.singletileImageryProviderProps = singletileImageryProviderProps;
//# sourceMappingURL=index.js.map
