import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { url, ellipsoid, tileDiscardPolicy, credit } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const googleImageryProviderProps = {
  ...url,
  ...ellipsoid,
  ...tileDiscardPolicy,
  ...credit,
  metadata: Object
};
var ImageryProviderGoogle = defineComponent({
  name: "VcImageryProviderGoogle",
  props: googleImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "GoogleEarthEnterpriseImageryProvider";
    useProviders(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { ImageryProviderGoogle as default, googleImageryProviderProps };
//# sourceMappingURL=index.mjs.map
