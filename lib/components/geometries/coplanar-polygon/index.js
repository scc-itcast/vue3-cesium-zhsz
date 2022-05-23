'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var index = require('../../../composables/use-geometries/index.js');

const polygonCoplanarProps = {
  ...cesiumProps.polygonHierarchy,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.vertexFormat,
  ...cesiumProps.stRotation
};
var GeometryPolygonCoplanar = vue.defineComponent({
  name: "VcGeometryPolygonCoplanar",
  props: polygonCoplanarProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "CoplanarPolygonGeometry";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GeometryPolygonCoplanar;
exports.polygonCoplanarProps = polygonCoplanarProps;
//# sourceMappingURL=index.js.map
