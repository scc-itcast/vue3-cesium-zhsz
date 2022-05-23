'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var render = require('../../../utils/private/render.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var cesiumHelpers = require('../../../utils/cesium-helpers.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-datasources/index.js');

const geojsonDatasourceProps = {
  ...cesiumProps.show,
  ...cesiumProps.enableMouseEvent,
  entities: {
    type: Array,
    default: () => []
  },
  ...cesiumProps.data,
  ...cesiumProps.sourceUri,
  describe: [Function, Object],
  markerSize: {
    type: Number,
    default: 48
  },
  markerSymbol: String,
  markerColor: {
    type: [Object, String, Array],
    default: () => ({ x: 0.2549019607843137, y: 0.4117647058823529, z: 0.8823529411764706 }),
    watcherOptions: {
      cesiumObjectBuilder: cesiumHelpers.makeColor
    }
  },
  stroke: {
    type: [Object, String, Array],
    default: () => ({ x: 1, y: 1, z: 0 }),
    watcherOptions: {
      cesiumObjectBuilder: cesiumHelpers.makeColor
    }
  },
  strokeWidth: {
    type: Number,
    default: 2
  },
  fill: {
    type: [Object, String, Array],
    default: () => ({ x: 1, y: 1, z: 0, w: 0.39215686274509803 }),
    watcherOptions: {
      cesiumObjectBuilder: cesiumHelpers.makeColor
    }
  },
  ...cesiumProps.clampToGround,
  ...cesiumProps.credit,
  destroy: {
    type: Boolean,
    default: false
  }
};
var DatasourceGeojson = vue.defineComponent({
  name: "VcDatasourceGeojson",
  props: geojsonDatasourceProps,
  emits: emits.datasourceEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "GeoJsonDataSource";
    const datasourcesState = index["default"](props, ctx, instance);
    if (datasourcesState === void 0) {
      return;
    }
    instance.createCesiumObject = async () => {
      const options = datasourcesState.transformProps(props);
      return Cesium.GeoJsonDataSource.load(props.data, options);
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

exports["default"] = DatasourceGeojson;
exports.geojsonDatasourceProps = geojsonDatasourceProps;
//# sourceMappingURL=index.js.map
