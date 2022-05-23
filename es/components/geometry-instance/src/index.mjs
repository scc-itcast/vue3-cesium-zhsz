import { defineComponent, getCurrentInstance, ref, provide, h, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { modelMatrix, id } from '../../../utils/cesium-props.mjs';
import { getVcParentInstance, getInstanceListener } from '../../../utils/private/vm.mjs';
import { mergeDescriptors } from '../../../utils/merge-descriptors.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import { vcKey } from '../../../utils/config.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useCommon from '../../../composables/use-common/index.mjs';

const geometryInstanceProps = {
  geometry: Object,
  ...modelMatrix,
  ...id,
  attributes: Object
};
const emits = {
  ...commonEmits,
  "update:geometry": (payload) => true
};
var GeometryInstance = defineComponent({
  name: "VcGeometryInstance",
  props: geometryInstanceProps,
  emits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.renderByParent = true;
    instance.cesiumClass = "GeometryInstance";
    instance.cesiumEvents = [];
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { emit } = ctx;
    const vcIndex = ref(0);
    instance.createCesiumObject = async () => {
      const options = commonState.transformProps(props);
      if (!options.geometry) {
        options.geometry = new Cesium.Geometry({ attributes: new Cesium.GeometryAttributes() });
      }
      return new Cesium.GeometryInstance(options);
    };
    instance.mount = async () => {
      var _a;
      const parentVM = getVcParentInstance(instance).proxy;
      if (parentVM.__childCount !== void 0) {
        vcIndex.value = parentVM.__childCount.value || 0;
        parentVM.__childCount.value += 1;
      }
      const geometryInstance = instance.cesiumObject;
      (_a = parentVM.__updateGeometryInstances) == null ? void 0 : _a.call(parentVM, geometryInstance, vcIndex.value);
      return true;
    };
    instance.unmount = async () => {
      var _a;
      const geometryInstance = instance.cesiumObject;
      const parentVM = getVcParentInstance(instance).proxy;
      (_a = parentVM.__removeGeometryInstances) == null ? void 0 : _a.call(parentVM, geometryInstance);
      return true;
    };
    const updateGeometry = (geometry) => {
      const listener = getInstanceListener(instance, "update:geometry");
      if (listener) {
        emit("update:geometry", geometry);
      } else {
        const geometryInstance = instance.cesiumObject;
        geometryInstance.geometry = geometry;
      }
      return true;
    };
    const getServices = () => {
      return mergeDescriptors(commonState.getServices(), {
        get geometryInstance() {
          return instance.cesiumObject;
        }
      });
    };
    provide(vcKey, getServices());
    instance.appContext.config.globalProperties.$VueCesium = getServices();
    Object.assign(instance.proxy, {
      __updateGeometry: updateGeometry
    });
    return () => {
      var _a, _b;
      return ctx.slots.default ? h("i", {
        class: kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""),
        style: { display: "none !important" }
      }, hSlot(ctx.slots.default)) : createCommentVNode(kebabCase(((_b = instance.proxy) == null ? void 0 : _b.$options.name) || "v-if"));
    };
  }
});

export { GeometryInstance as default, geometryInstanceProps };
//# sourceMappingURL=index.mjs.map
