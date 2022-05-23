'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-geometries/index.js');

const polylineVolumeGeometryProps = {
  ...cesiumProps.polylinePositions,
  ...cesiumProps.shapePositions,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.granularity,
  ...cesiumProps.vertexFormat,
  ...cesiumProps.cornerType
};
var GeometryPolylineVolume = vue.defineComponent({
  name: "VcGeometryPolylineVolume",
  props: polylineVolumeGeometryProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "PolylineVolumeGeometry";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GeometryPolylineVolume;
exports.polylineVolumeGeometryProps = polylineVolumeGeometryProps;
//# sourceMappingURL=index.js.map
