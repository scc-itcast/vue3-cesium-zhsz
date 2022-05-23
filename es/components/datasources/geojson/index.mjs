import { defineComponent, getCurrentInstance, h, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import { show, enableMouseEvent, data, sourceUri, clampToGround, credit } from '../../../utils/cesium-props.mjs';
import { makeColor } from '../../../utils/cesium-helpers.mjs';
import { datasourceEmits } from '../../../utils/emits.mjs';
import useDatasources from '../../../composables/use-datasources/index.mjs';

const geojsonDatasourceProps = {
  ...show,
  ...enableMouseEvent,
  entities: {
    type: Array,
    default: () => []
  },
  ...data,
  ...sourceUri,
  describe: [Function, Object],
  markerSize: {
    type: Number,
    default: 48
  },
  markerSymbol: String,
  markerColor: {
    type: [Object, String, Array],
    default: () => ({ x: 0.2549019607843137, y: 0.4117647058823529, z: 0.8823529411764706 }),
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  },
  stroke: {
    type: [Object, String, Array],
    default: () => ({ x: 1, y: 1, z: 0 }),
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  },
  strokeWidth: {
    type: Number,
    default: 2
  },
  fill: {
    type: [Object, String, Array],
    default: () => ({ x: 1, y: 1, z: 0, w: 0.39215686274509803 }),
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  },
  ...clampToGround,
  ...credit,
  destroy: {
    type: Boolean,
    default: false
  }
};
var DatasourceGeojson = defineComponent({
  name: "VcDatasourceGeojson",
  props: geojsonDatasourceProps,
  emits: datasourceEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "GeoJsonDataSource";
    const datasourcesState = useDatasources(props, ctx, instance);
    if (datasourcesState === void 0) {
      return;
    }
    instance.createCesiumObject = async () => {
      const options = datasourcesState.transformProps(props);
      return Cesium.GeoJsonDataSource.load(props.data, options);
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

export { DatasourceGeojson as default, geojsonDatasourceProps };
//# sourceMappingURL=index.mjs.map
