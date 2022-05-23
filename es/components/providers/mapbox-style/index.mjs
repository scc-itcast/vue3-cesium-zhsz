import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { accessToken, ellipsoid, minimumLevel, maximumLevel, rectangle, credit } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const mapboxImageryProviderProps = {
  url: {
    type: [String, Object],
    default: "https://api.mapbox.com/styles/v1/"
  },
  username: {
    type: String,
    default: "mapbox"
  },
  styleId: String,
  ...accessToken,
  tilesize: {
    type: Number,
    default: 512
  },
  scaleFactor: Boolean,
  ...ellipsoid,
  ...minimumLevel,
  ...maximumLevel,
  ...rectangle,
  ...credit
};
var ImageryProviderMapbox = defineComponent({
  name: "VcImageryProviderMapbox",
  props: mapboxImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "MapboxStyleImageryProvider";
    useProviders(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { ImageryProviderMapbox as default, mapboxImageryProviderProps };
//# sourceMappingURL=index.mjs.map
