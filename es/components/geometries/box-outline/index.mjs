import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { dimensions } from '../../../utils/cesium-props.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useGeometries from '../../../composables/use-geometries/index.mjs';

const boxOutlineGeometryProps = {
  ...dimensions
};
var GeometryBoxOutline = defineComponent({
  name: "VcGeometryBoxOutline",
  props: boxOutlineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "BoxOutlineGeometry";
    const geometriesState = useGeometries(props, ctx, instance);
    instance.createCesiumObject = async () => {
      const options = geometriesState == null ? void 0 : geometriesState.transformProps(props);
      return Cesium.BoxOutlineGeometry.fromDimensions(options);
    };
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { boxOutlineGeometryProps, GeometryBoxOutline as default };
//# sourceMappingURL=index.mjs.map
