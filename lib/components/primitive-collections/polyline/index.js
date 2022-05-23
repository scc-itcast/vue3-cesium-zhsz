'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-primitive-collection-items/index.js');

const polylineProps = {
  ...cesiumProps.distanceDisplayCondition,
  ...cesiumProps.id,
  ...cesiumProps.loop,
  ...cesiumProps.material,
  ...cesiumProps.positions,
  ...cesiumProps.show,
  ...cesiumProps.width,
  ...cesiumProps.enableMouseEvent
};
var Polyline = vue.defineComponent({
  name: "VcPolyline",
  props: polylineProps,
  emits: emits.primitiveCollectionEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "Polyline";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = Polyline;
exports.polylineProps = polylineProps;
//# sourceMappingURL=index.js.map
