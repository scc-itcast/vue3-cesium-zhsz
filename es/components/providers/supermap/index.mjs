import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { minimumLevel, maximumLevel, projectionTransforms } from '../../../utils/cesium-props.mjs';
import SuperMapImageryProvider from './SuperMapImageryProvider.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const supermapImageryProviderProps = {
  url: String,
  ...minimumLevel,
  ...maximumLevel,
  name: String,
  transparent: {
    type: Boolean,
    default: true
  },
  credit: {
    type: [String, Object],
    default: "MapQuest, SuperMap iServer Imagery"
  },
  ...projectionTransforms
};
var ImageryProviderSupermap = defineComponent({
  name: "VcImageryProviderSupermap",
  props: supermapImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "SuperMapImageryProvider";
    const providersState = useProviders(props, ctx, instance);
    if (providersState === void 0) {
      return;
    }
    instance.createCesiumObject = async () => {
      Cesium.SuperMapImageryProvider = Cesium.SuperMapImageryProvider || SuperMapImageryProvider;
      if (providersState.unwatchFns.length === 0) {
        providersState.setPropsWatcher(true);
      }
      const options = providersState.transformProps(props);
      return new Cesium.SuperMapImageryProvider(options);
    };
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { ImageryProviderSupermap as default, supermapImageryProviderProps };
//# sourceMappingURL=index.mjs.map
