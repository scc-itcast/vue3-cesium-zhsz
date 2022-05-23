'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var TiandituImageryProvider = require('./TiandituImageryProvider.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');

const tiandituImageryProviderProps = {
  ...cesiumProps.url,
  ...cesiumProps.minimumLevel,
  ...cesiumProps.maximumLevel,
  ...cesiumProps.rectangle,
  mapStyle: {
    type: String,
    default: "img_w",
    validator: (v) => [
      "cia_c",
      "cia_w",
      "cta_c",
      "cta_w",
      "cva_c",
      "cva_w",
      "ela_c",
      "ela_w",
      "eva_c",
      "eva_w",
      "img_c",
      "img_w",
      "ter_c",
      "ter_w",
      "vec_c",
      "vec_w",
      "ibo_c",
      "ibo_w"
    ].includes(v)
  },
  token: String,
  protocol: {
    type: String,
    default: "https"
  },
  credit: {
    type: [String, Object],
    default: "\u5929\u5730\u56FE\u5168\u7403\u5F71\u50CF\u670D\u52A1"
  },
  ...cesiumProps.projectionTransforms
};
var ImageryProviderTianditu = vue.defineComponent({
  name: "VcImageryProviderTianditu",
  props: tiandituImageryProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "TiandituImageryProvider";
    const providersState = index["default"](props, ctx, instance);
    if (providersState === void 0) {
      return;
    }
    instance.createCesiumObject = async () => {
      Cesium.TiandituImageryProvider = Cesium.TiandituImageryProvider || TiandituImageryProvider["default"];
      if (providersState.unwatchFns.length === 0) {
        providersState.setPropsWatcher(true);
      }
      const options = providersState.transformProps(props);
      return new Cesium.TiandituImageryProvider(options);
    };
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = ImageryProviderTianditu;
exports.tiandituImageryProviderProps = tiandituImageryProviderProps;
//# sourceMappingURL=imagery.js.map
