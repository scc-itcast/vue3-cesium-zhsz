'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-geometries/index.js');

const rectangleOutlineGeometryProps = {
  ...cesiumProps.rectangle,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.granularity,
  ...cesiumProps.height,
  ...cesiumProps.rotation,
  ...cesiumProps.extrudedHeight
};
var GeometryRectangleOutline = vue.defineComponent({
  name: "VcGeometryRectangleOutline",
  props: rectangleOutlineGeometryProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "RectangleOutlineGeometry";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GeometryRectangleOutline;
exports.rectangleOutlineGeometryProps = rectangleOutlineGeometryProps;
//# sourceMappingURL=index.js.map
