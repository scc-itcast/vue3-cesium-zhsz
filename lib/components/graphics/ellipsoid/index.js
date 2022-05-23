'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-graphics/index.js');

const ellipsoidGraphicsProps = {
  ...cesiumProps.show,
  ...cesiumProps.radii,
  ...cesiumProps.innerRadii,
  ...cesiumProps.minimumClock,
  ...cesiumProps.maximumClock,
  ...cesiumProps.minimumCone,
  ...cesiumProps.maximumCone,
  ...cesiumProps.heightReference,
  ...cesiumProps.fill,
  ...cesiumProps.material,
  ...cesiumProps.outline,
  ...cesiumProps.outlineColor,
  ...cesiumProps.outlineWidth,
  ...cesiumProps.stackPartitions,
  ...cesiumProps.slicePartitions,
  ...cesiumProps.subdivisions,
  ...cesiumProps.shadows,
  ...cesiumProps.distanceDisplayCondition
};
var GraphicsEllipsoid = vue.defineComponent({
  name: "VcGraphicsEllipsoid",
  props: ellipsoidGraphicsProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "EllipsoidGraphics";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

exports["default"] = GraphicsEllipsoid;
exports.ellipsoidGraphicsProps = ellipsoidGraphicsProps;
//# sourceMappingURL=index.js.map
