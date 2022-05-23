import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { url, subdomains, credit, minimumLevel, maximumLevel, rectangle, tilingScheme, ellipsoid, tileWidth, tileHeight, getFeatureInfoFormats, enablePickFeatures, projectionTransforms } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const urltemplateImageryProviderProps = {
  ...url,
  pickFeaturesUrl: [String, Object],
  urlSchemeZeroPadding: Object,
  ...subdomains,
  ...credit,
  ...minimumLevel,
  ...maximumLevel,
  ...rectangle,
  ...tilingScheme,
  ...ellipsoid,
  ...tileWidth,
  ...tileHeight,
  hasAlphaChannel: {
    type: Boolean,
    default: true
  },
  ...getFeatureInfoFormats,
  ...enablePickFeatures,
  customTags: Object,
  ...projectionTransforms
};
var ImageryProviderUrltemplate = defineComponent({
  name: "VcImageryProviderUrltemplate",
  props: urltemplateImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "UrlTemplateImageryProvider";
    useProviders(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { ImageryProviderUrltemplate as default, urltemplateImageryProviderProps };
//# sourceMappingURL=index.mjs.map
