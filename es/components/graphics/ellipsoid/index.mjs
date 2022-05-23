import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show, radii, innerRadii, minimumClock, maximumClock, minimumCone, maximumCone, heightReference, fill, material, outline, outlineColor, outlineWidth, stackPartitions, slicePartitions, subdivisions, shadows, distanceDisplayCondition } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGraphics from '../../../composables/use-graphics/index.mjs';

const ellipsoidGraphicsProps = {
  ...show,
  ...radii,
  ...innerRadii,
  ...minimumClock,
  ...maximumClock,
  ...minimumCone,
  ...maximumCone,
  ...heightReference,
  ...fill,
  ...material,
  ...outline,
  ...outlineColor,
  ...outlineWidth,
  ...stackPartitions,
  ...slicePartitions,
  ...subdivisions,
  ...shadows,
  ...distanceDisplayCondition
};
var GraphicsEllipsoid = defineComponent({
  name: "VcGraphicsEllipsoid",
  props: ellipsoidGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "EllipsoidGraphics";
    useGraphics(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { GraphicsEllipsoid as default, ellipsoidGraphicsProps };
//# sourceMappingURL=index.mjs.map
