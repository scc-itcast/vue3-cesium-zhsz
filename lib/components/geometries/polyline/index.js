'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-geometries/index.js');

const polylineGeometryProps = {
  ...cesiumProps.positions,
  ...cesiumProps.width,
  ...cesiumProps.colors,
  colorsPerVertex: {
    type: Boolean,
    default: false
  },
  ...cesiumProps.arcType,
  ...cesiumProps.granularity,
  ...cesiumProps.vertexFormat,
  ...cesiumProps.ellipsoid
};
var GeometryPolyline = vue.defineComponent({
  name: "VcGeometryPolyline",
  props: polylineGeometryProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "PolylineGeometry";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GeometryPolyline;
exports.polylineGeometryProps = polylineGeometryProps;
//# sourceMappingURL=index.js.map
