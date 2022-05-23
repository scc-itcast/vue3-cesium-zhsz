import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { url, credit, minimumLevel, maximumLevel, rectangle, tilingScheme, projectionTransforms } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import TencentImageryProvider from './TencentImageryProvider.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const tencentImageryProviderProps = {
  ...url,
  subdomains: {
    type: Array,
    default: () => ["1", "2", "3"]
  },
  mapStyle: {
    type: String,
    default: "vector"
  },
  styleId: {
    type: String,
    default: "1"
  },
  protocol: String,
  ...credit,
  ...minimumLevel,
  ...maximumLevel,
  ...rectangle,
  ...tilingScheme,
  ...projectionTransforms
};
var ImageryProviderTencent = defineComponent({
  name: "VcImageryProviderTencent",
  props: tencentImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "TencentImageryProvider";
    const providersState = useProviders(props, ctx, instance);
    if (providersState === void 0) {
      return;
    }
    instance.createCesiumObject = async () => {
      Cesium.TencentImageryProvider = Cesium.TencentImageryProvider || TencentImageryProvider;
      if (providersState.unwatchFns.length === 0) {
        providersState.setPropsWatcher(true);
      }
      const options = providersState.transformProps(props);
      return new Cesium.TencentImageryProvider(options);
    };
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { ImageryProviderTencent as default, tencentImageryProviderProps };
//# sourceMappingURL=index.mjs.map
