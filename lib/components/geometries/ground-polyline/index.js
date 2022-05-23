'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-geometries/index.js');

const groundPolylineGeometryProps = {
  ...cesiumProps.positions,
  ...cesiumProps.width,
  ...cesiumProps.granularity,
  ...cesiumProps.loop,
  ...cesiumProps.arcType
};
var GeometryGroundPolyline = vue.defineComponent({
  name: "VcGeometryGroundPolyline",
  props: groundPolylineGeometryProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "GroundPolylineGeometry";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GeometryGroundPolyline;
exports.groundPolylineGeometryProps = groundPolylineGeometryProps;
//# sourceMappingURL=index.js.map
