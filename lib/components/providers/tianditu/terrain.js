'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var vm = require('../../../utils/private/vm.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');
var index$1 = require('../../../composables/use-vue-cesium/index.js');

const tiandituTerrainProviderProps = {
  url: {
    type: String,
    default: "https://{s}.tianditu.gov.cn/"
  },
  subdomains: {
    type: Array,
    default: () => ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"]
  },
  pluginPath: {
    type: String,
    default: "https://api.tianditu.gov.cn/cdn/plugins/cesium/cesiumTdt.js"
  },
  dataType: {
    type: String,
    default: "int",
    validator: (v) => ["int", "float"].includes(v)
  },
  tileType: {
    type: String,
    default: "heightmap",
    validator: (v) => ["heightmap", "quantized-mesh"].includes(v)
  },
  token: String
};
var TerrainProviderTianditu = vue.defineComponent({
  name: "VcTerrainProviderTianditu",
  props: tiandituTerrainProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "GeoTerrainProvider";
    const providersState = index["default"](props, ctx, instance);
    if (providersState === void 0) {
      return;
    }
    const { emit } = ctx;
    const vc = index$1["default"]();
    let $script;
    instance.createCesiumObject = async () => {
      return new Promise((resolve, reject) => {
        $script = document.createElement("script");
        document.body.appendChild($script);
        $script.src = props.pluginPath;
        $script.onload = () => {
          if (providersState.unwatchFns.length === 0) {
            providersState.setPropsWatcher(true);
          }
          const terrainUrls = [];
          for (let i = 0; i < props.subdomains.length; i++) {
            const url = props.url.replace("{s}", props.subdomains[i]) + "mapservice/swdx?tk=" + props.token;
            terrainUrls.push(url);
          }
          resolve(new Cesium.GeoTerrainProvider({
            urls: terrainUrls
          }));
        };
      });
    };
    instance.unmount = async () => {
      const terrainProvider = new Cesium.EllipsoidTerrainProvider();
      terrainProvider.readyPromise.then(() => {
        const listener = vm.getInstanceListener(instance, "readyPromise");
        listener && emit("readyPromise", terrainProvider, vc == null ? void 0 : vc.viewer, instance.proxy);
      });
      vc && (vc.viewer.terrainProvider = terrainProvider);
      $script == null ? void 0 : $script.parentNode.removeChild($script);
      return true;
    };
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = TerrainProviderTianditu;
exports.tiandituTerrainProviderProps = tiandituTerrainProviderProps;
//# sourceMappingURL=terrain.js.map
