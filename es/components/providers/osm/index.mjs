import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { fileExtension, rectangle, minimumLevel, maximumLevel, ellipsoid } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const osmImageryProviderProps = {
  url: {
    type: String,
    default: "https://a.tile.openstreetmap.org"
  },
  ...fileExtension,
  ...rectangle,
  ...minimumLevel,
  ...maximumLevel,
  ...ellipsoid,
  credit: {
    type: [String, Object],
    default: "MapQuest, Open Street Map and contributors, CC-BY-SA"
  }
};
var ImageryProviderOsm = defineComponent({
  name: "VcImageryProviderOsm",
  props: osmImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "OpenStreetMapImageryProvider";
    useProviders(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { ImageryProviderOsm as default, osmImageryProviderProps };
//# sourceMappingURL=index.mjs.map
