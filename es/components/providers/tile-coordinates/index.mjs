import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { tilingScheme, ellipsoid, tileWidth, tileHeight } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const tileCoordinatesImageryProviderProps = {
  ...tilingScheme,
  ...ellipsoid,
  color: {
    type: [Object, String, Array],
    default: "YELLOW"
  },
  ...tileWidth,
  ...tileHeight
};
var ImageryProviderTileCoordinates = defineComponent({
  name: "VcImageryProviderTileCoordinates",
  props: tileCoordinatesImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "TileCoordinatesImageryProvider";
    useProviders(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { ImageryProviderTileCoordinates as default, tileCoordinatesImageryProviderProps };
//# sourceMappingURL=index.mjs.map
