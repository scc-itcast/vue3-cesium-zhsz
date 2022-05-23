'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-graphics/index.js');

const tilesetGraphicsProps = {
  ...cesiumProps.show,
  ...cesiumProps.uri,
  ...cesiumProps.maximumScreenSpaceError
};
var GraphicsTileset = vue.defineComponent({
  name: "VcGraphicsTileset",
  props: tilesetGraphicsProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "Cesium3DTilesetGraphics";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GraphicsTileset;
exports.tilesetGraphicsProps = tilesetGraphicsProps;
//# sourceMappingURL=index.js.map
