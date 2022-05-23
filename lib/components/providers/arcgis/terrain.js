'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');

const arcgisTerrainProviderProps = {
  url: {
    type: [String, Object],
    default: "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"
  },
  ...cesiumProps.ellipsoid,
  ...cesiumProps.token
};
var TerrainProviderArcgis = vue.defineComponent({
  name: "VcTerrainProviderArcgis",
  props: arcgisTerrainProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "ArcGISTiledElevationTerrainProvider";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports.arcgisTerrainProviderProps = arcgisTerrainProviderProps;
exports["default"] = TerrainProviderArcgis;
//# sourceMappingURL=terrain.js.map
