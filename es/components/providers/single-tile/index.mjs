import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { url, rectangle, credit, ellipsoid } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const singletileImageryProviderProps = {
  ...url,
  ...rectangle,
  ...credit,
  ...ellipsoid
};
var ImageryProviderSingletile = defineComponent({
  name: "VcImageryProviderSingletile",
  props: singletileImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "SingleTileImageryProvider";
    useProviders(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { ImageryProviderSingletile as default, singletileImageryProviderProps };
//# sourceMappingURL=index.mjs.map
