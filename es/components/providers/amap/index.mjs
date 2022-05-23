import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { credit, minimumLevel, maximumLevel, rectangle, tilingScheme, projectionTransforms } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import AMapImageryProvider from './AMapImageryProvider.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const amapImageryProviderProps = {
  url: {
    type: String,
    default: "https://{domain}{s}.is.autonavi.com/appmaptile?lang={lang}&size=1&style={style}&scl={scl}&ltype={ltype}&x={x}&y={y}&z={z}"
  },
  subdomains: {
    type: Array,
    default: () => ["01", "02", "03", "04"]
  },
  domain: {
    type: String,
    default: "webst"
  },
  lang: {
    type: String,
    default: "zh_cn"
  },
  mapStyle: {
    type: String,
    default: "6"
  },
  scl: {
    type: String,
    default: "1"
  },
  ltype: {
    type: String,
    default: "0"
  },
  ...credit,
  ...minimumLevel,
  ...maximumLevel,
  ...rectangle,
  ...tilingScheme,
  ...projectionTransforms
};
var ImageryProviderAmap = defineComponent({
  name: "VcImageryProviderAmap",
  props: amapImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "AMapImageryProvider";
    const providersState = useProviders(props, ctx, instance);
    if (providersState === void 0) {
      return;
    }
    instance.createCesiumObject = async () => {
      Cesium.AMapImageryProvider = Cesium.AMapImageryProvider || AMapImageryProvider;
      if (providersState.unwatchFns.length === 0) {
        providersState.setPropsWatcher(true);
      }
      const options = providersState.transformProps(props);
      return new Cesium.AMapImageryProvider(options);
    };
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { amapImageryProviderProps, ImageryProviderAmap as default };
//# sourceMappingURL=index.mjs.map
