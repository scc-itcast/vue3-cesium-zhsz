import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { ellipsoid, credit } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const vrTheworldImageryProviderProps = {
  url: {
    type: [String, Object],
    default: "https://www.vr-theworld.com/vr-theworld/tiles1.0.0/73/"
  },
  ...ellipsoid,
  ...credit
};
var TerrainProviderVrTheworld = defineComponent({
  name: "VcTerrainProviderVrTheworld",
  props: vrTheworldImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "VRTheWorldTerrainProvider";
    useProviders(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { TerrainProviderVrTheworld as default, vrTheworldImageryProviderProps };
//# sourceMappingURL=index.mjs.map
