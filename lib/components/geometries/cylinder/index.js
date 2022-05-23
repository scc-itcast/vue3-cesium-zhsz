'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-geometries/index.js');

const cylinderGeometryProps = {
  ...cesiumProps.length,
  ...cesiumProps.topRadius,
  ...cesiumProps.bottomRadius,
  ...cesiumProps.slices,
  ...cesiumProps.vertexFormat
};
var GeometryCylinder = vue.defineComponent({
  name: "VcGeometryCylinder",
  props: cylinderGeometryProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "CylinderGeometry";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports.cylinderGeometryProps = cylinderGeometryProps;
exports["default"] = GeometryCylinder;
//# sourceMappingURL=index.js.map
