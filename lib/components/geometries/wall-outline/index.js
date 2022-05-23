'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-geometries/index.js');

const wallOutlineProps = {
  ...cesiumProps.positions,
  ...cesiumProps.granularity,
  ...cesiumProps.maximumHeights,
  ...cesiumProps.minimumHeights,
  ...cesiumProps.ellipsoid
};
var GeometryWallOutline = vue.defineComponent({
  name: "VcGeometryWallOutline",
  props: wallOutlineProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "WallOutlineGeometry";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GeometryWallOutline;
exports.wallOutlineProps = wallOutlineProps;
//# sourceMappingURL=index.js.map
