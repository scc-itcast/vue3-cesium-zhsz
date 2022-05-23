import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { url, layers, enablePickFeatures, getFeatureInfoFormats, rectangle, tilingScheme, ellipsoid, tileWidth, tileHeight, minimumLevel, maximumLevel, credit, subdomains, clock, times } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const wmsImageryProviderProps = {
  ...url,
  ...layers,
  parameters: Object,
  getFeatureInfoParameters: Object,
  ...enablePickFeatures,
  ...getFeatureInfoFormats,
  ...rectangle,
  ...tilingScheme,
  ...ellipsoid,
  ...tileWidth,
  ...tileHeight,
  ...minimumLevel,
  ...maximumLevel,
  crs: String,
  srs: String,
  ...credit,
  ...subdomains,
  ...clock,
  ...times,
  getFeatureInfoUrl: [String, Object]
};
var ImageryProviderWms = defineComponent({
  name: "VcImageryProviderWms",
  props: wmsImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "WebMapServiceImageryProvider";
    useProviders(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { ImageryProviderWms as default, wmsImageryProviderProps };
//# sourceMappingURL=index.mjs.map
