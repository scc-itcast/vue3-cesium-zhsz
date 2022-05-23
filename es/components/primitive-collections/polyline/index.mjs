import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { distanceDisplayCondition, id, loop, material, positions, show, width, enableMouseEvent } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { primitiveCollectionEmits } from '../../../utils/emits.mjs';
import usePrimitiveCollectionItems from '../../../composables/use-primitive-collection-items/index.mjs';

const polylineProps = {
  ...distanceDisplayCondition,
  ...id,
  ...loop,
  ...material,
  ...positions,
  ...show,
  ...width,
  ...enableMouseEvent
};
var Polyline = defineComponent({
  name: "VcPolyline",
  props: polylineProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "Polyline";
    usePrimitiveCollectionItems(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { Polyline as default, polylineProps };
//# sourceMappingURL=index.mjs.map
