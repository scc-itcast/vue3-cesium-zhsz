'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');

const tmsImageryProviderProps = {
  url: [String, Object],
  ...cesiumProps.fileExtension,
  ...cesiumProps.credit,
  ...cesiumProps.minimumLevel,
  ...cesiumProps.maximumLevel,
  ...cesiumProps.rectangle,
  ...cesiumProps.tilingScheme,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.tileWidth,
  ...cesiumProps.tileHeight,
  flipXY: Boolean,
  ...cesiumProps.projectionTransforms
};
var ImageryProviderTms = vue.defineComponent({
  name: "VcImageryProviderTms",
  props: tmsImageryProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "TileMapServiceImageryProvider";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = ImageryProviderTms;
exports.tmsImageryProviderProps = tmsImageryProviderProps;
//# sourceMappingURL=index.js.map
