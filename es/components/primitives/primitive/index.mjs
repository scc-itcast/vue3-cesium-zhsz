import { defineComponent, getCurrentInstance, h, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { geometryInstances, appearance, depthFailAppearance, show, modelMatrix, vertexCacheOptimize, interleave, compressVertices, releaseGeometryInstances, allowPicking, asynchronous, debugShowBoundingVolume, shadows, enableMouseEvent } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import { primitiveEmits } from '../../../utils/emits.mjs';
import usePrimitives from '../../../composables/use-primitives/index.mjs';

const primitiveProps = {
  ...geometryInstances,
  ...appearance,
  ...depthFailAppearance,
  ...show,
  ...modelMatrix,
  ...vertexCacheOptimize,
  ...interleave,
  ...compressVertices,
  ...releaseGeometryInstances,
  ...allowPicking,
  cull: {
    type: Boolean,
    default: true
  },
  ...asynchronous,
  ...debugShowBoundingVolume,
  ...shadows,
  ...enableMouseEvent
};
var Primitive = defineComponent({
  name: "VcPrimitive",
  props: primitiveProps,
  emits: primitiveEmits,
  setup(props, ctx) {
    var _a;
    const instance = getCurrentInstance();
    instance.cesiumClass = "Primitive";
    usePrimitives(props, ctx, instance);
    const name = ((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "";
    return () => {
      var _a2;
      return ctx.slots.default ? h("i", {
        class: kebabCase(name),
        style: { display: "none !important" }
      }, hSlot(ctx.slots.default)) : createCommentVNode(kebabCase(((_a2 = instance.proxy) == null ? void 0 : _a2.$options.name) || ""));
    };
  }
});

export { Primitive as default, primitiveProps };
//# sourceMappingURL=index.mjs.map
