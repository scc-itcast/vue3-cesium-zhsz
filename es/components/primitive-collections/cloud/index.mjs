import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { color, position, show } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { primitiveCollectionEmits } from '../../../utils/emits.mjs';
import { makeCartesian3, makeCartesian2 } from '../../../utils/cesium-helpers.mjs';
import usePrimitiveCollectionItems from '../../../composables/use-primitive-collection-items/index.mjs';

const cumulusCloudProps = {
  brightness: {
    type: Number,
    default: 1
  },
  ...color,
  maximumSize: {
    type: Object,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3
    }
  },
  ...position,
  scale: {
    type: Object,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2
    }
  },
  ...show,
  slice: {
    type: Number,
    default: -1
  }
};
var CumulusCloud = defineComponent({
  name: "VcCumulusCloud",
  props: cumulusCloudProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "CumulusCloud";
    usePrimitiveCollectionItems(props, ctx, instance);
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { cumulusCloudProps, CumulusCloud as default };
//# sourceMappingURL=index.mjs.map
