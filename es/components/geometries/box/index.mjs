import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { dimensions, vertexFormat } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const boxGeometryProps = {
  ...dimensions,
  ...vertexFormat
};
var GeometryBox = defineComponent({
  name: "VcGeometryBox",
  props: boxGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "BoxGeometry";
    const geometriesState = useGeometries(props, ctx, instance);
    instance.createCesiumObject = async () => {
      const options = geometriesState == null ? void 0 : geometriesState.transformProps(props);
      return Cesium.BoxGeometry.fromDimensions(options);
    };
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { boxGeometryProps, GeometryBox as default };
//# sourceMappingURL=index.mjs.map
