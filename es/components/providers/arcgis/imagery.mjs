import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { token, tileDiscardPolicy, layers, enablePickFeatures, rectangle, tilingScheme, ellipsoid, credit, tileWidth, tileHeight, maximumLevel } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const arcgisImageryProviderProps = {
  url: {
    type: [String, Object],
    default: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
  },
  ...token,
  ...tileDiscardPolicy,
  usePreCachedTilesIfAvailable: {
    type: Boolean,
    default: true
  },
  ...layers,
  ...enablePickFeatures,
  ...rectangle,
  ...tilingScheme,
  ...ellipsoid,
  ...credit,
  ...tileWidth,
  ...tileHeight,
  ...maximumLevel
};
var ImageryProviderArcgis = defineComponent({
  name: "VcImageryProviderArcgis",
  props: arcgisImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "ArcGisMapServerImageryProvider";
    useProviders(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { arcgisImageryProviderProps, ImageryProviderArcgis as default };
//# sourceMappingURL=imagery.mjs.map
