'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-graphics/index.js');

const boxGraphicsProps = {
  ...cesiumProps.show,
  ...cesiumProps.dimensions,
  ...cesiumProps.heightReference,
  ...cesiumProps.fill,
  ...cesiumProps.material,
  ...cesiumProps.outline,
  ...cesiumProps.outlineColor,
  ...cesiumProps.outlineWidth,
  ...cesiumProps.shadows,
  ...cesiumProps.distanceDisplayCondition
};
var GraphicsBox = vue.defineComponent({
  name: "VcGraphicsBox",
  props: boxGraphicsProps,
  emits: emits.graphicsEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "BoxGraphics";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports.boxGraphicsProps = boxGraphicsProps;
exports["default"] = GraphicsBox;
//# sourceMappingURL=index.js.map
