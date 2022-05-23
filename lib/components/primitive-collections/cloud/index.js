'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var emits = require('../../../utils/emits.js');
var cesiumHelpers = require('../../../utils/cesium-helpers.js');
var index = require('../../../composables/use-primitive-collection-items/index.js');

const cumulusCloudProps = {
  brightness: {
    type: Number,
    default: 1
  },
  ...cesiumProps.color,
  maximumSize: {
    type: Object,
    watcherOptions: {
      cesiumObjectBuilder: cesiumHelpers.makeCartesian3
    }
  },
  ...cesiumProps.position,
  scale: {
    type: Object,
    watcherOptions: {
      cesiumObjectBuilder: cesiumHelpers.makeCartesian2
    }
  },
  ...cesiumProps.show,
  slice: {
    type: Number,
    default: -1
  }
};
var CumulusCloud = vue.defineComponent({
  name: "VcCumulusCloud",
  props: cumulusCloudProps,
  emits: emits.primitiveCollectionEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "CumulusCloud";
    index["default"](props, ctx, instance);
    return () => {
      var _a;
      return vue.createCommentVNode(util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

exports.cumulusCloudProps = cumulusCloudProps;
exports["default"] = CumulusCloud;
//# sourceMappingURL=index.js.map
