'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var render = require('../../../utils/private/render.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-datasources/index.js');

const customDatasourceProps = {
  ...cesiumProps.show,
  ...cesiumProps.enableMouseEvent,
  entities: {
    type: Array,
    default: () => []
  },
  name: String,
  destroy: {
    type: Boolean,
    default: false
  }
};
var DatasourceCustom = vue.defineComponent({
  name: "VcDatasourceCustom",
  props: customDatasourceProps,
  emits: emits.datasourceEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "CustomDataSource";
    index["default"](props, ctx, instance);
    instance.createCesiumObject = async () => {
      return new Cesium.CustomDataSource(props.name);
    };
    return () => {
      var _a, _b;
      return ctx.slots.default ? vue.h("i", {
        class: util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""),
        style: { display: "none !important" }
      }, render.hSlot(ctx.slots.default)) : vue.createCommentVNode(util.kebabCase(((_b = instance.proxy) == null ? void 0 : _b.$options.name) || ""));
    };
  }
});

exports.customDatasourceProps = customDatasourceProps;
exports["default"] = DatasourceCustom;
//# sourceMappingURL=index.js.map
