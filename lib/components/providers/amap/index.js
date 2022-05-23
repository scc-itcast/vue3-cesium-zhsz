'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var AMapImageryProvider = require('./AMapImageryProvider.js');
var index = require('../../../composables/use-providers/index.js');

const amapImageryProviderProps = {
  url: {
    type: String,
    default: "https://{domain}{s}.is.autonavi.com/appmaptile?lang={lang}&size=1&style={style}&scl={scl}&ltype={ltype}&x={x}&y={y}&z={z}"
  },
  subdomains: {
    type: Array,
    default: () => ["01", "02", "03", "04"]
  },
  domain: {
    type: String,
    default: "webst"
  },
  lang: {
    type: String,
    default: "zh_cn"
  },
  mapStyle: {
    type: String,
    default: "6"
  },
  scl: {
    type: String,
    default: "1"
  },
  ltype: {
    type: String,
    default: "0"
  },
  ...cesiumProps.credit,
  ...cesiumProps.minimumLevel,
  ...cesiumProps.maximumLevel,
  ...cesiumProps.rectangle,
  ...cesiumProps.tilingScheme,
  ...cesiumProps.projectionTransforms
};
var ImageryProviderAmap = vue.defineComponent({
  name: "VcImageryProviderAmap",
  props: amapImageryProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "AMapImageryProvider";
    const providersState = index["default"](props, ctx, instance);
    if (providersState === void 0) {
      return;
    }
    instance.createCesiumObject = async () => {
      Cesium.AMapImageryProvider = Cesium.AMapImageryProvider || AMapImageryProvider["default"];
      if (providersState.unwatchFns.length === 0) {
        providersState.setPropsWatcher(true);
      }
      const options = providersState.transformProps(props);
      return new Cesium.AMapImageryProvider(options);
    };
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports.amapImageryProviderProps = amapImageryProviderProps;
exports["default"] = ImageryProviderAmap;
//# sourceMappingURL=index.js.map
