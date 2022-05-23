'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');

const ionImageryProviderProps = {};
var ImageryProviderIon = vue.defineComponent({
  name: "VcImageryProviderIon",
  props: {
    assetId: Number,
    ...cesiumProps.accessToken,
    server: [String, Object]
  },
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "IonImageryProvider";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = ImageryProviderIon;
exports.ionImageryProviderProps = ionImageryProviderProps;
//# sourceMappingURL=index.js.map
