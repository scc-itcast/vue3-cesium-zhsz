'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-geometries/index.js');

const simplePolylineGeometryProps = {
  ...cesiumProps.positions,
  ...cesiumProps.colors,
  colorsPerVertex: {
    type: Boolean,
    default: false
  },
  ...cesiumProps.arcType,
  ...cesiumProps.granularity,
  ...cesiumProps.ellipsoid
};
var GeometrySimplePolyline = vue.defineComponent({
  name: "VcGeometrySimplePolyline",
  props: simplePolylineGeometryProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "SimplePolylineGeometry";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GeometrySimplePolyline;
exports.simplePolylineGeometryProps = simplePolylineGeometryProps;
//# sourceMappingURL=index.js.map
