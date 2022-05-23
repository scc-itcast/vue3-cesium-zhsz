import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { ellipsoid, token } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { providerEmits } from '../../../utils/emits.mjs';
import useProviders from '../../../composables/use-providers/index.mjs';

const arcgisTerrainProviderProps = {
  url: {
    type: [String, Object],
    default: "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"
  },
  ...ellipsoid,
  ...token
};
var TerrainProviderArcgis = defineComponent({
  name: "VcTerrainProviderArcgis",
  props: arcgisTerrainProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "ArcGISTiledElevationTerrainProvider";
    useProviders(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { arcgisTerrainProviderProps, TerrainProviderArcgis as default };
//# sourceMappingURL=terrain.mjs.map
