'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var render = require('../../../utils/private/render.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-primitives/index.js');

const primitiveProps = {
  ...cesiumProps.geometryInstances,
  ...cesiumProps.appearance,
  ...cesiumProps.depthFailAppearance,
  ...cesiumProps.show,
  ...cesiumProps.modelMatrix,
  ...cesiumProps.vertexCacheOptimize,
  ...cesiumProps.interleave,
  ...cesiumProps.compressVertices,
  ...cesiumProps.releaseGeometryInstances,
  ...cesiumProps.allowPicking,
  cull: {
    type: Boolean,
    default: true
  },
  ...cesiumProps.asynchronous,
  ...cesiumProps.debugShowBoundingVolume,
  ...cesiumProps.shadows,
  ...cesiumProps.enableMouseEvent
};
var Primitive = vue.defineComponent({
  name: "VcPrimitive",
  props: primitiveProps,
  emits: emits.primitiveEmits,
  setup(props, ctx) {
    var _a;
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "Primitive";
    index["default"](props, ctx, instance);
    const name = ((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "";
    return () => {
      var _a2;
      return ctx.slots.default ? vue.h("i", {
        class: util.kebabCase(name),
        style: { display: "none !important" }
      }, render.hSlot(ctx.slots.default)) : vue.createCommentVNode(util.kebabCase(((_a2 = instance.proxy) == null ? void 0 : _a2.$options.name) || ""));
    };
  }
});

exports["default"] = Primitive;
exports.primitiveProps = primitiveProps;
//# sourceMappingURL=index.js.map
