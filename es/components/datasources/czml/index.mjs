import { defineComponent, getCurrentInstance, h, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import { show, enableMouseEvent, sourceUri, credit } from '../../../utils/cesium-props.mjs';
import { datasourceEmits } from '../../../utils/emits.mjs';
import useDatasources from '../../../composables/use-datasources/index.mjs';

const czmlDatasourceProps = {
  ...show,
  ...enableMouseEvent,
  entities: {
    type: Array,
    default: () => []
  },
  czml: {
    type: [String, Object],
    required: true
  },
  ...sourceUri,
  ...credit,
  destroy: {
    type: Boolean,
    default: false
  }
};
var DatasourceCzml = defineComponent({
  name: "VcDatasourceCzml",
  props: czmlDatasourceProps,
  emits: datasourceEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "CzmlDataSource";
    const datasourcesState = useDatasources(props, ctx, instance);
    if (datasourcesState === void 0) {
      return;
    }
    instance.createCesiumObject = async () => {
      const options = datasourcesState.transformProps(props);
      return Cesium.CzmlDataSource.load(props.czml, options);
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

export { czmlDatasourceProps, DatasourceCzml as default };
//# sourceMappingURL=index.mjs.map
