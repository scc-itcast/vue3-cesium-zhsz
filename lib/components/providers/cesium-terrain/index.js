'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');

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
  ...cesiumProps.ellipsoid,
  ...cesiumProps.credit
};
var TerrainProviderCesium = vue.defineComponent({
  name: "VcTerrainProviderCesium",
  props: cesiumTerrainProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "CesiumTerrainProvider";
    const providersState = index["default"](props, ctx, instance);
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
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports.cesiumTerrainProviderProps = cesiumTerrainProviderProps;
exports["default"] = TerrainProviderCesium;
//# sourceMappingURL=index.js.map
