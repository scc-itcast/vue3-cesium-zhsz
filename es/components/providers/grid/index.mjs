import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { tilingScheme, ellipsoid, glowColor, tileWidth, tileHeight } from '../../../utils/cesium-props.mjs';
import { makeColor } from '../../../utils/cesium-helpers.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const gridImageryProviderProps = {
  ...tilingScheme,
  ...ellipsoid,
  cells: {
    type: Number,
    default: 8
  },
  color: {
    type: [String, Object, Array],
    default: () => [1, 1, 1, 0.4],
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  },
  ...glowColor,
  glowWidth: {
    type: Number,
    default: 6
  },
  backgroundColor: {
    type: [String, Array, Object],
    default: () => [0, 0.5, 0, 0.2],
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  },
  ...tileWidth,
  ...tileHeight,
  canvasSize: {
    type: Number,
    default: 256
  }
};
var ImageryProviderGrid = defineComponent({
  name: "VcImageryProviderGrid",
  props: gridImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "GridImageryProvider";
    useProviders(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { ImageryProviderGrid as default, gridImageryProviderProps };
//# sourceMappingURL=index.mjs.map
