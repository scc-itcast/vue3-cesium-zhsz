'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var render = require('../../../utils/private/render.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-primitives/index.js');

const groundPolylinePrimitiveProps = {
  ...cesiumProps.geometryInstances,
  ...cesiumProps.appearance,
  ...cesiumProps.show,
  ...cesiumProps.interleave,
  ...cesiumProps.compressVertices,
  ...cesiumProps.releaseGeometryInstances,
  ...cesiumProps.allowPicking,
  ...cesiumProps.asynchronous,
  ...cesiumProps.classificationType,
  ...cesiumProps.debugShowBoundingVolume,
  ...cesiumProps.debugShowShadowVolume,
  ...cesiumProps.enableMouseEvent
};
var PrimitiveGroundPolyline = vue.defineComponent({
  name: "VcPrimitiveGroundPolyline",
  props: groundPolylinePrimitiveProps,
  emits: emits.primitiveEmits,
  setup(props, ctx) {
    var _a;
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "GroundPolylinePrimitive";
    index["default"](props, ctx, instance);
    const name = ((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "";
    return () => ctx.slots.default ? vue.h("i", {
      class: util.kebabCase(name),
      style: { display: "none !important" }
    }, render.hSlot(ctx.slots.default)) : vue.createCommentVNode(util.kebabCase(name));
  }
});

exports["default"] = PrimitiveGroundPolyline;
exports.groundPolylinePrimitiveProps = groundPolylinePrimitiveProps;
//# sourceMappingURL=index.js.map
