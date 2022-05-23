import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { fileExtension, credit, minimumLevel, maximumLevel, rectangle, tilingScheme, ellipsoid, tileWidth, tileHeight, projectionTransforms } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const tmsImageryProviderProps = {
  url: [String, Object],
  ...fileExtension,
  ...credit,
  ...minimumLevel,
  ...maximumLevel,
  ...rectangle,
  ...tilingScheme,
  ...ellipsoid,
  ...tileWidth,
  ...tileHeight,
  flipXY: Boolean,
  ...projectionTransforms
};
var ImageryProviderTms = defineComponent({
  name: "VcImageryProviderTms",
  props: tmsImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "TileMapServiceImageryProvider";
    useProviders(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { ImageryProviderTms as default, tmsImageryProviderProps };
//# sourceMappingURL=index.mjs.map
