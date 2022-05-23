import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { ellipsoid, tileDiscardPolicy } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const bingImageryProviderProps = {
  url: {
    type: [String, Object],
    default: "https://dev.virtualearth.net"
  },
  bmKey: String,
  tileProtocol: String,
  mapStyle: {
    type: String,
    default: "Aerial"
  },
  culture: {
    type: String,
    default: ""
  },
  ...ellipsoid,
  ...tileDiscardPolicy
};
var ImageryProviderBing = defineComponent({
  name: "VcImageryProviderBing",
  props: bingImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "BingMapsImageryProvider";
    useProviders(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { bingImageryProviderProps, ImageryProviderBing as default };
//# sourceMappingURL=index.mjs.map
