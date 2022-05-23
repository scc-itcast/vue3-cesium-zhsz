import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import BaiduMapImageryProvider from './BaiduMapImageryProvider.mjs';
import '../../../composables/index.mjs';
import { url, rectangle, ellipsoid, tileDiscardPolicy, credit, minimumLevel, maximumLevel } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const baiduImageryProviderProps = {
  ...url,
  ...rectangle,
  ...ellipsoid,
  ...tileDiscardPolicy,
  ...credit,
  ...minimumLevel,
  ...maximumLevel,
  protocol: {
    type: String,
    default: "https"
  },
  projectionTransforms: {
    type: [Boolean, Object],
    default: () => {
      return {
        from: "BD09",
        to: "WGS84"
      };
    }
  },
  scale: {
    type: Number,
    default: 1
  },
  ak: {
    type: String,
    default: "E4805d16520de693a3fe707cdc962045"
  },
  customid: {
    type: String,
    default: "normal"
  }
};
var ImageryProviderBaidu = defineComponent({
  name: "VcImageryProviderBaidu",
  props: baiduImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "BaiduMapImageryProvider";
    const providersState = useProviders(props, ctx, instance);
    if (providersState === void 0) {
      return;
    }
    instance.createCesiumObject = async () => {
      Cesium.BaiduMapImageryProvider = Cesium.BaiduMapImageryProvider || BaiduMapImageryProvider;
      if (providersState.unwatchFns.length === 0) {
        providersState.setPropsWatcher(true);
      }
      const options = providersState.transformProps(props);
      return new Cesium.BaiduMapImageryProvider(options);
    };
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { baiduImageryProviderProps, ImageryProviderBaidu as default };
//# sourceMappingURL=index.mjs.map
