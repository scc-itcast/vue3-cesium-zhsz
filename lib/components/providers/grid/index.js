'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var cesiumHelpers = require('../../../utils/cesium-helpers.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');

const gridImageryProviderProps = {
  ...cesiumProps.tilingScheme,
  ...cesiumProps.ellipsoid,
  cells: {
    type: Number,
    default: 8
  },
  color: {
    type: [String, Object, Array],
    default: () => [1, 1, 1, 0.4],
    watcherOptions: {
      cesiumObjectBuilder: cesiumHelpers.makeColor
    }
  },
  ...cesiumProps.glowColor,
  glowWidth: {
    type: Number,
    default: 6
  },
  backgroundColor: {
    type: [String, Array, Object],
    default: () => [0, 0.5, 0, 0.2],
    watcherOptions: {
      cesiumObjectBuilder: cesiumHelpers.makeColor
    }
  },
  ...cesiumProps.tileWidth,
  ...cesiumProps.tileHeight,
  canvasSize: {
    type: Number,
    default: 256
  }
};
var ImageryProviderGrid = vue.defineComponent({
  name: "VcImageryProviderGrid",
  props: gridImageryProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "GridImageryProvider";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = ImageryProviderGrid;
exports.gridImageryProviderProps = gridImageryProviderProps;
//# sourceMappingURL=index.js.map
