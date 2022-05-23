import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { ellipsoid, credit } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const cesiumTerrainProviderProps = {
  url: [String, Object],
  requestVertexNormals: {
    type: Boolean,
    default: false
  },
  requestWaterMask: {
    type: Boolean,
    default: false
  },
  requestMetadata: {
    type: Boolean,
    default: true
  },
  ...ellipsoid,
  ...credit
};
var TerrainProviderCesium = defineComponent({
  name: "VcTerrainProviderCesium",
  props: cesiumTerrainProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "CesiumTerrainProvider";
    const providersState = useProviders(props, ctx, instance);
    if (providersState === void 0) {
      return;
    }
    instance.createCesiumObject = async () => {
      if (providersState.unwatchFns.length === 0) {
        providersState.setPropsWatcher(true);
      }
      const options = providersState.transformProps(props);
      return Cesium.defined(options.url) ? new Cesium.CesiumTerrainProvider(options) : Cesium.createWorldTerrain({ requestVertexNormals: options.requestVertexNormals, requestWaterMask: options.requestWaterMask });
    };
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { cesiumTerrainProviderProps, TerrainProviderCesium as default };
//# sourceMappingURL=index.mjs.map
