'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var render = require('../../../utils/private/render.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-datasources/index.js');

const czmlDatasourceProps = {
  ...cesiumProps.show,
  ...cesiumProps.enableMouseEvent,
  entities: {
    type: Array,
    default: () => []
  },
  czml: {
    type: [String, Object],
    required: true
  },
  ...cesiumProps.sourceUri,
  ...cesiumProps.credit,
  destroy: {
    type: Boolean,
    default: false
  }
};
var DatasourceCzml = vue.defineComponent({
  name: "VcDatasourceCzml",
  props: czmlDatasourceProps,
  emits: emits.datasourceEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "CzmlDataSource";
    const datasourcesState = index["default"](props, ctx, instance);
    if (datasourcesState === void 0) {
      return;
    }
    instance.createCesiumObject = async () => {
      const options = datasourcesState.transformProps(props);
      return Cesium.CzmlDataSource.load(props.czml, options);
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

exports.czmlDatasourceProps = czmlDatasourceProps;
exports["default"] = DatasourceCzml;
//# sourceMappingURL=index.js.map
