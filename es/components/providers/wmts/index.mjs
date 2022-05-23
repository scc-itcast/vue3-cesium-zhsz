import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { url, format, clock, times, tileWidth, tileHeight, tilingScheme, rectangle, minimumLevel, maximumLevel, ellipsoid, credit, subdomains } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const wmtsImageryProviderProps = {
  ...url,
  ...format,
  layer: {
    type: String,
    required: true
  },
  wmtsStyle: {
    type: String,
    required: true
  },
  tileMatrixSetID: {
    type: String,
    required: true
  },
  tileMatrixLabels: Array,
  ...clock,
  ...times,
  dimensions: Object,
  ...tileWidth,
  ...tileHeight,
  ...tilingScheme,
  ...rectangle,
  ...minimumLevel,
  ...maximumLevel,
  ...ellipsoid,
  ...credit,
  ...subdomains
};
var ImageryProviderWmts = defineComponent({
  name: "VcImageryProviderWmts",
  props: wmtsImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "WebMapTileServiceImageryProvider";
    useProviders(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { ImageryProviderWmts as default, wmtsImageryProviderProps };
//# sourceMappingURL=index.mjs.map
