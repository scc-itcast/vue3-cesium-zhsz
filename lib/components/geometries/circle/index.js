'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-geometries/index.js');

const circleGeometryProps = {
  ...cesiumProps.center,
  ...cesiumProps.radius,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.height,
  ...cesiumProps.granularity,
  ...cesiumProps.vertexFormat,
  ...cesiumProps.extrudedHeight,
  ...cesiumProps.stRotation
};
var GeometryCircle = vue.defineComponent({
  name: "VcGeometryCircle",
  props: circleGeometryProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "CircleGeometry";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports.circleGeometryProps = circleGeometryProps;
exports["default"] = GeometryCircle;
//# sourceMappingURL=index.js.map
