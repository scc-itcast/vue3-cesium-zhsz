'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-geometries/index.js');

const corridorOutlineGeometryProps = {
  ...cesiumProps.positions,
  ...cesiumProps.width,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.granularity,
  ...cesiumProps.height,
  ...cesiumProps.extrudedHeight,
  ...cesiumProps.cornerType
};
var GeometryCorridorOutline = vue.defineComponent({
  name: "VcGeometryCorridorOutline",
  props: corridorOutlineGeometryProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "CorridorOutlineGeometry";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports.corridorOutlineGeometryProps = corridorOutlineGeometryProps;
exports["default"] = GeometryCorridorOutline;
//# sourceMappingURL=index.js.map
