'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-primitive-collection-items/index.js');

const pointProps = {
  ...cesiumProps.color,
  ...cesiumProps.disableDepthTestDistance,
  ...cesiumProps.distanceDisplayCondition,
  ...cesiumProps.id,
  ...cesiumProps.outlineColor,
  ...cesiumProps.outlineWidth,
  ...cesiumProps.pixelSize,
  ...cesiumProps.position,
  ...cesiumProps.scaleByDistance,
  ...cesiumProps.show,
  ...cesiumProps.translucencyByDistance,
  ...cesiumProps.enableMouseEvent
};
var Point = vue.defineComponent({
  name: "VcPoint",
  props: pointProps,
  emits: emits.primitiveCollectionEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "PointPrimitive";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = Point;
exports.pointProps = pointProps;
//# sourceMappingURL=index.js.map
