'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-geometries/index.js');

const circleOutlineGeometryProps = {
  ...cesiumProps.center,
  ...cesiumProps.radius,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.height,
  ...cesiumProps.granularity,
  ...cesiumProps.extrudedHeight,
  ...cesiumProps.numberOfVerticalLines
};
var GeometryCircleOutline = vue.defineComponent({
  name: "VcGeometryCircleOutline",
  props: circleOutlineGeometryProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "CircleOutlineGeometry";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports.circleOutlineGeometryProps = circleOutlineGeometryProps;
exports["default"] = GeometryCircleOutline;
//# sourceMappingURL=index.js.map
