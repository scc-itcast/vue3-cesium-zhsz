'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-graphics/index.js');

const polylineGraphicsProps = {
  ...cesiumProps.show,
  ...cesiumProps.positions,
  ...cesiumProps.width,
  ...cesiumProps.granularity,
  ...cesiumProps.material,
  ...cesiumProps.depthFailMaterial,
  ...cesiumProps.arcType,
  ...cesiumProps.clampToGround,
  ...cesiumProps.shadows,
  ...cesiumProps.distanceDisplayCondition,
  ...cesiumProps.classificationType,
  ...cesiumProps.zIndex
};
var GraphicsPolyline = vue.defineComponent({
  name: "VcGraphicsPolyline",
  props: polylineGraphicsProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "PolylineGraphics";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GraphicsPolyline;
exports.polylineGraphicsProps = polylineGraphicsProps;
//# sourceMappingURL=index.js.map
