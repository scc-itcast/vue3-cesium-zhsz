import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { color, disableDepthTestDistance, distanceDisplayCondition, id, outlineColor, outlineWidth, pixelSize, position, scaleByDistance, show, translucencyByDistance, enableMouseEvent } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { primitiveCollectionEmits } from '../../../utils/emits.mjs';
import usePrimitiveCollectionItems from '../../../composables/use-primitive-collection-items/index.mjs';

const pointProps = {
  ...color,
  ...disableDepthTestDistance,
  ...distanceDisplayCondition,
  ...id,
  ...outlineColor,
  ...outlineWidth,
  ...pixelSize,
  ...position,
  ...scaleByDistance,
  ...show,
  ...translucencyByDistance,
  ...enableMouseEvent
};
var Point = defineComponent({
  name: "VcPoint",
  props: pointProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "PointPrimitive";
    usePrimitiveCollectionItems(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { Point as default, pointProps };
//# sourceMappingURL=index.mjs.map
