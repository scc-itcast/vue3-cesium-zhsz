import { defineComponent, getCurrentInstance, h, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import { show, enableMouseEvent } from '../../../utils/cesium-props.mjs';
import { datasourceEmits } from '../../../utils/emits.mjs';
import useDatasources from '../../../composables/use-datasources/index.mjs';

const customDatasourceProps = {
  ...show,
  ...enableMouseEvent,
  entities: {
    type: Array,
    default: () => []
  },
  name: String,
  destroy: {
    type: Boolean,
    default: false
  }
};
var DatasourceCustom = defineComponent({
  name: "VcDatasourceCustom",
  props: customDatasourceProps,
  emits: datasourceEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "CustomDataSource";
    useDatasources(props, ctx, instance);
    instance.createCesiumObject = async () => {
      return new Cesium.CustomDataSource(props.name);
    };
    return () => {
      var _a, _b;
      return ctx.slots.default ? h("i", {
        class: kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""),
        style: { display: "none !important" }
      }, hSlot(ctx.slots.default)) : createCommentVNode(kebabCase(((_b = instance.proxy) == null ? void 0 : _b.$options.name) || ""));
    };
  }
});

export { customDatasourceProps, DatasourceCustom as default };
//# sourceMappingURL=index.mjs.map
