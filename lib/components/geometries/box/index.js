'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-geometries/index.js');

const boxGeometryProps = {
  ...cesiumProps.dimensions,
  ...cesiumProps.vertexFormat
};
var GeometryBox = vue.defineComponent({
  name: "VcGeometryBox",
  props: boxGeometryProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "BoxGeometry";
    const geometriesState = index["default"](props, ctx, instance);
    instance.createCesiumObject = async () => {
      const options = geometriesState == null ? void 0 : geometriesState.transformProps(props);
      return Cesium.BoxGeometry.fromDimensions(options);
    };
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports.boxGeometryProps = boxGeometryProps;
exports["default"] = GeometryBox;
//# sourceMappingURL=index.js.map
