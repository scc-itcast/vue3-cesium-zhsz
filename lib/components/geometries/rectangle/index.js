'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-geometries/index.js');

const rectangleGeometryProps = {
  ...cesiumProps.rectangle,
  ...cesiumProps.vertexFormat,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.granularity,
  ...cesiumProps.height,
  ...cesiumProps.rotation,
  ...cesiumProps.stRotation,
  ...cesiumProps.extrudedHeight
};
var GeometryRectangle = vue.defineComponent({
  name: "VcGeometryRectangle",
  props: rectangleGeometryProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "RectangleGeometry";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GeometryRectangle;
exports.rectangleGeometryProps = rectangleGeometryProps;
//# sourceMappingURL=index.js.map
