'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-graphics/index.js');

const corridorGraphicsProps = {
  ...cesiumProps.show,
  ...cesiumProps.positions,
  ...cesiumProps.width,
  ...cesiumProps.height,
  ...cesiumProps.heightReference,
  ...cesiumProps.extrudedHeight,
  ...cesiumProps.extrudedHeightReference,
  ...cesiumProps.cornerType,
  ...cesiumProps.granularity,
  ...cesiumProps.fill,
  ...cesiumProps.material,
  ...cesiumProps.outline,
  ...cesiumProps.outlineColor,
  ...cesiumProps.outlineWidth,
  ...cesiumProps.shadows,
  ...cesiumProps.distanceDisplayCondition,
  ...cesiumProps.classificationType,
  ...cesiumProps.zIndex
};
var GraphicsCorridor = vue.defineComponent({
  name: "VcGraphicsCorridor",
  props: corridorGraphicsProps,
  emits: emits.graphicsEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "CorridorGraphics";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GraphicsCorridor;
//# sourceMappingURL=index.js.map
