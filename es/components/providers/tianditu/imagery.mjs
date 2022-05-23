import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { url, minimumLevel, maximumLevel, rectangle, projectionTransforms } from '../../../utils/cesium-props.mjs';
import TiandituImageryProvider from './TiandituImageryProvider.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const tiandituImageryProviderProps = {
  ...url,
  ...minimumLevel,
  ...maximumLevel,
  ...rectangle,
  mapStyle: {
    type: String,
    default: "img_w",
    validator: (v) => [
      "cia_c",
      "cia_w",
      "cta_c",
      "cta_w",
      "cva_c",
      "cva_w",
      "ela_c",
      "ela_w",
      "eva_c",
      "eva_w",
      "img_c",
      "img_w",
      "ter_c",
      "ter_w",
      "vec_c",
      "vec_w",
      "ibo_c",
      "ibo_w"
    ].includes(v)
  },
  token: String,
  protocol: {
    type: String,
    default: "https"
  },
  credit: {
    type: [String, Object],
    default: "\u5929\u5730\u56FE\u5168\u7403\u5F71\u50CF\u670D\u52A1"
  },
  ...projectionTransforms
};
var ImageryProviderTianditu = defineComponent({
  name: "VcImageryProviderTianditu",
  props: tiandituImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "TiandituImageryProvider";
    const providersState = useProviders(props, ctx, instance);
    if (providersState === void 0) {
      return;
    }
    instance.createCesiumObject = async () => {
      Cesium.TiandituImageryProvider = Cesium.TiandituImageryProvider || TiandituImageryProvider;
      if (providersState.unwatchFns.length === 0) {
        providersState.setPropsWatcher(true);
      }
      const options = providersState.transformProps(props);
      return new Cesium.TiandituImageryProvider(options);
    };
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { ImageryProviderTianditu as default, tiandituImageryProviderProps };
//# sourceMappingURL=imagery.mjs.map
