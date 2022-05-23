'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-graphics/index.js');

const pathGraphicsProps = {
  ...cesiumProps.show,
  leadTime: [Number, Object, Function],
  trailTime: [Number, Object, Function],
  ...cesiumProps.width,
  resolution: {
    type: [Number, Object, Function],
    default: 60
  },
  ...cesiumProps.material,
  ...cesiumProps.distanceDisplayCondition
};
var GraphicsPath = vue.defineComponent({
  name: "VcGraphicsPath",
  props: pathGraphicsProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "PathGraphics";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports["default"] = GraphicsPath;
exports.pathGraphicsProps = pathGraphicsProps;
//# sourceMappingURL=index.js.map
