'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-geometries/index.js');

const ellipsoidGeometryProps = {
  ...cesiumProps.radii,
  ...cesiumProps.innerRadii,
  ...cesiumProps.minimumClock,
  ...cesiumProps.maximumClock,
  ...cesiumProps.minimumCone,
  ...cesiumProps.maximumCone,
  ...cesiumProps.stackPartitions,
  ...cesiumProps.slicePartitions,
  ...cesiumProps.vertexFormat
};
var GeometryEllipsoid = vue.defineComponent({
  name: "VcGeometryEllipsoid",
  props: ellipsoidGeometryProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "EllipsoidGeometry";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GeometryEllipsoid;
exports.ellipsoidGeometryProps = ellipsoidGeometryProps;
//# sourceMappingURL=index.js.map
