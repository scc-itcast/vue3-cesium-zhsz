'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-geometries/index.js');

const polygonOutlineGeometryProps = {
  ...cesiumProps.polygonHierarchy,
  ...cesiumProps.height,
  ...cesiumProps.extrudedHeight,
  ...cesiumProps.vertexFormat,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.granularity,
  ...cesiumProps.perPositionHeight,
  ...cesiumProps.arcType
};
var GeometryPolygonOutline = vue.defineComponent({
  name: "VcGeometryPolygonOutline",
  props: polygonOutlineGeometryProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "PolygonOutlineGeometry";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GeometryPolygonOutline;
exports.polygonOutlineGeometryProps = polygonOutlineGeometryProps;
//# sourceMappingURL=index.js.map
