'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-graphics/index.js');

const ellipseGraphicsProps = {
  ...cesiumProps.show,
  ...cesiumProps.semiMajorAxis,
  ...cesiumProps.semiMinorAxis,
  ...cesiumProps.height,
  ...cesiumProps.heightReference,
  ...cesiumProps.extrudedHeight,
  ...cesiumProps.extrudedHeightReference,
  ...cesiumProps.rotation,
  ...cesiumProps.stRotation,
  ...cesiumProps.granularity,
  ...cesiumProps.fill,
  ...cesiumProps.material,
  ...cesiumProps.outline,
  ...cesiumProps.outlineColor,
  ...cesiumProps.outlineWidth,
  ...cesiumProps.numberOfVerticalLines,
  ...cesiumProps.shadows,
  ...cesiumProps.distanceDisplayCondition,
  ...cesiumProps.classificationType,
  ...cesiumProps.zIndex
};
var GraphicsEllipse = vue.defineComponent({
  name: "VcGraphicsEllipse",
  props: ellipseGraphicsProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "EllipseGraphics";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GraphicsEllipse;
exports.ellipseGraphicsProps = ellipseGraphicsProps;
//# sourceMappingURL=index.js.map
