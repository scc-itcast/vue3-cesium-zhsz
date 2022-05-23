'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-geometries/index.js');

const polygonGeometryProps = {
  ...cesiumProps.polygonHierarchy,
  ...cesiumProps.height,
  ...cesiumProps.extrudedHeight,
  ...cesiumProps.vertexFormat,
  ...cesiumProps.stRotation,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.granularity,
  ...cesiumProps.perPositionHeight,
  ...cesiumProps.closeTop,
  ...cesiumProps.closeBottom,
  ...cesiumProps.arcType
};
var GeometryPolygon = vue.defineComponent({
  name: "VcGeometryPolygon",
  props: polygonGeometryProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "PolygonGeometry";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GeometryPolygon;
exports.polygonGeometryProps = polygonGeometryProps;
//# sourceMappingURL=index.js.map
