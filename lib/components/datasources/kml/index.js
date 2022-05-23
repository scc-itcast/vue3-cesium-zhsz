'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var util = require('../../../utils/util.js');
var render = require('../../../utils/private/render.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-datasources/index.js');
var index$1 = require('../../../composables/use-vue-cesium/index.js');

const kmlDatasourceProps = {
  ...cesiumProps.show,
  ...cesiumProps.enableMouseEvent,
  entities: {
    type: Array,
    default: () => []
  },
  ...cesiumProps.data,
  camera: Object,
  canvas: HTMLCanvasElement,
  ...cesiumProps.sourceUri,
  ...cesiumProps.clampToGround,
  ...cesiumProps.ellipsoid,
  ...cesiumProps.credit,
  destroy: {
    type: Boolean,
    default: false
  },
  screenOverlayContainer: [Element, String]
};
var DatasourceKml = vue.defineComponent({
  name: "VcDatasourceKml",
  props: kmlDatasourceProps,
  emits: emits.datasourceEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "KmlDataSource";
    const datasourcesState = index["default"](props, ctx, instance);
    const vc = index$1["default"]();
    instance.createCesiumObject = async () => {
      const options = datasourcesState == null ? void 0 : datasourcesState.transformProps(props);
      if (!options.camera) {
        options.camera = vc == null ? void 0 : vc.viewer.camera;
      }
      if (!options.canvas) {
        options.canvas = vc == null ? void 0 : vc.viewer.canvas;
      }
      return Cesium.KmlDataSource.load(props.data || "", options);
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

exports["default"] = DatasourceKml;
exports.kmlDatasourceProps = kmlDatasourceProps;
//# sourceMappingURL=index.js.map
