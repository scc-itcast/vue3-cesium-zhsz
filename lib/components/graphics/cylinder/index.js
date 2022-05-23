'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-graphics/index.js');

const cylinderGraphicsProps = {
  ...cesiumProps.show,
  ...cesiumProps.length,
  ...cesiumProps.topRadius,
  ...cesiumProps.bottomRadius,
  ...cesiumProps.heightReference,
  ...cesiumProps.fill,
  ...cesiumProps.material,
  ...cesiumProps.outline,
  ...cesiumProps.outlineColor,
  ...cesiumProps.outlineWidth,
  ...cesiumProps.numberOfVerticalLines,
  ...cesiumProps.slices,
  ...cesiumProps.shadows,
  ...cesiumProps.distanceDisplayCondition
};
var GraphicsCylinder = vue.defineComponent({
  name: "VcGraphicsCylinder",
  props: cylinderGraphicsProps,
  emits: emits.graphicsEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "CylinderGraphics";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports.cylinderGraphicsProps = cylinderGraphicsProps;
exports["default"] = GraphicsCylinder;
//# sourceMappingURL=index.js.map
