import { defineComponent, getCurrentInstance, h, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import { show, enableMouseEvent, data, sourceUri, clampToGround, ellipsoid, credit } from '../../../utils/cesium-props.mjs';
import { datasourceEmits } from '../../../utils/emits.mjs';
import useDatasources from '../../../composables/use-datasources/index.mjs';
import useVueCesium from '../../../composables/use-vue-cesium/index.mjs';

const kmlDatasourceProps = {
  ...show,
  ...enableMouseEvent,
  entities: {
    type: Array,
    default: () => []
  },
  ...data,
  camera: Object,
  canvas: HTMLCanvasElement,
  ...sourceUri,
  ...clampToGround,
  ...ellipsoid,
  ...credit,
  destroy: {
    type: Boolean,
    default: false
  },
  screenOverlayContainer: [Element, String]
};
var DatasourceKml = defineComponent({
  name: "VcDatasourceKml",
  props: kmlDatasourceProps,
  emits: datasourceEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "KmlDataSource";
    const datasourcesState = useDatasources(props, ctx, instance);
    const vc = useVueCesium();
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
      return ctx.slots.default ? h("i", {
        class: kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""),
        style: { display: "none !important" }
      }, hSlot(ctx.slots.default)) : createCommentVNode(kebabCase(((_b = instance.proxy) == null ? void 0 : _b.$options.name) || ""));
    };
  }
});

export { DatasourceKml as default, kmlDatasourceProps };
//# sourceMappingURL=index.mjs.map
