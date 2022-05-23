'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');

const tileCoordinatesImageryProviderProps = {
  ...cesiumProps.tilingScheme,
  ...cesiumProps.ellipsoid,
  color: {
    type: [Object, String, Array],
    default: "YELLOW"
  },
  ...cesiumProps.tileWidth,
  ...cesiumProps.tileHeight
};
var ImageryProviderTileCoordinates = vue.defineComponent({
  name: "VcImageryProviderTileCoordinates",
  props: tileCoordinatesImageryProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "TileCoordinatesImageryProvider";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = ImageryProviderTileCoordinates;
exports.tileCoordinatesImageryProviderProps = tileCoordinatesImageryProviderProps;
//# sourceMappingURL=index.js.map
