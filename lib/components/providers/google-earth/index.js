'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-providers/index.js');

const googleImageryProviderProps = {
  ...cesiumProps.url,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.tileDiscardPolicy,
  ...cesiumProps.credit,
  metadata: Object
};
var ImageryProviderGoogle = vue.defineComponent({
  name: "VcImageryProviderGoogle",
  props: googleImageryProviderProps,
  emits: emits.providerEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "GoogleEarthEnterpriseImageryProvider";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = ImageryProviderGoogle;
exports.googleImageryProviderProps = googleImageryProviderProps;
//# sourceMappingURL=index.js.map
