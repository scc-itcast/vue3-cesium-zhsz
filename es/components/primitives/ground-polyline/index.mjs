import { defineComponent, getCurrentInstance, h, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { geometryInstances, appearance, show, interleave, compressVertices, releaseGeometryInstances, allowPicking, asynchronous, classificationType, debugShowBoundingVolume, debugShowShadowVolume, enableMouseEvent } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import { primitiveEmits } from '../../../utils/emits.mjs';
import usePrimitives from '../../../composables/use-primitives/index.mjs';

const groundPolylinePrimitiveProps = {
  ...geometryInstances,
  ...appearance,
  ...show,
  ...interleave,
  ...compressVertices,
  ...releaseGeometryInstances,
  ...allowPicking,
  ...asynchronous,
  ...classificationType,
  ...debugShowBoundingVolume,
  ...debugShowShadowVolume,
  ...enableMouseEvent
};
var PrimitiveGroundPolyline = defineComponent({
  name: "VcPrimitiveGroundPolyline",
  props: groundPolylinePrimitiveProps,
  emits: primitiveEmits,
  setup(props, ctx) {
    var _a;
    const instance = getCurrentInstance();
    instance.cesiumClass = "GroundPolylinePrimitive";
    usePrimitives(props, ctx, instance);
    const name = ((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "";
    return () => ctx.slots.default ? h("i", {
      class: kebabCase(name),
      style: { display: "none !important" }
    }, hSlot(ctx.slots.default)) : createCommentVNode(kebabCase(name));
  }
});

export { PrimitiveGroundPolyline as default, groundPolylinePrimitiveProps };
//# sourceMappingURL=index.mjs.map
