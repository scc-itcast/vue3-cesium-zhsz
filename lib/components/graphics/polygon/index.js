'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-graphics/index.js');

const polygonGraphicsProps = {
  ...cesiumProps.show,
  ...cesiumProps.hierarchy,
  ...cesiumProps.height,
  ...cesiumProps.heightReference,
  ...cesiumProps.extrudedHeight,
  ...cesiumProps.extrudedHeightReference,
  ...cesiumProps.stRotation,
  ...cesiumProps.granularity,
  ...cesiumProps.fill,
  ...cesiumProps.material,
  ...cesiumProps.outline,
  ...cesiumProps.outlineColor,
  ...cesiumProps.outlineWidth,
  ...cesiumProps.perPositionHeight,
  ...cesiumProps.closeTop,
  ...cesiumProps.closeBottom,
  ...cesiumProps.arcType,
  ...cesiumProps.shadows,
  ...cesiumProps.distanceDisplayCondition,
  ...cesiumProps.classificationType,
  ...cesiumProps.zIndex
};
var GraphicsPolygon = vue.defineComponent({
  name: "VcGraphicsPolygon",
  props: polygonGraphicsProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "PolygonGraphics";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GraphicsPolygon;
exports.polygonGraphicsProps = polygonGraphicsProps;
//# sourceMappingURL=index.js.map
