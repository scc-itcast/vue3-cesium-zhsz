'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var cesiumHelpers = require('../../../utils/cesium-helpers.js');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-graphics/index.js');

const planeGraphicsProps = {
  ...cesiumProps.show,
  ...cesiumProps.plane,
  dimensions: {
    type: [Object, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: cesiumHelpers.makeCartesian2
    }
  },
  ...cesiumProps.fill,
  ...cesiumProps.material,
  ...cesiumProps.outline,
  ...cesiumProps.outlineColor,
  ...cesiumProps.outlineWidth,
  ...cesiumProps.shadows,
  ...cesiumProps.distanceDisplayCondition
};
var GraphicsPlane = vue.defineComponent({
  name: "VcGraphicsPlane",
  props: planeGraphicsProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "PlaneGraphics";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GraphicsPlane;
exports.planeGraphicsProps = planeGraphicsProps;
//# sourceMappingURL=index.js.map
