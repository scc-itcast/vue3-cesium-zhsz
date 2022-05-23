import { defineComponent, getCurrentInstance, watch, onUnmounted, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { positions, polygonHierarchy, appearance, depthFailAppearance, show, id, classificationType, clampToGround, ellipsoid, allowPicking, asynchronous, enableMouseEvent } from '../../../utils/cesium-props.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import '../../../shared/index.mjs';
import { makeCartesian3Array, makePolygonHierarchy, makeAppearance } from '../../../utils/cesium-helpers.mjs';
import { primitiveCollectionEmits } from '../../../utils/emits.mjs';
import usePrimitiveCollectionItems from '../../../composables/use-primitive-collection-items/index.mjs';
import PolygonPrimitive from '../../../shared/src/PolygonPrimitive.mjs';

const polygonProps = {
  ...positions,
  ...polygonHierarchy,
  ...appearance,
  ...depthFailAppearance,
  ...show,
  ...id,
  ...classificationType,
  ...clampToGround,
  ...ellipsoid,
  ...allowPicking,
  ...asynchronous,
  ...enableMouseEvent
};
var Polygon = defineComponent({
  name: "VcPolygon",
  props: polygonProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "PolygonPrimitive";
    const primitiveCollectionItemsState = usePrimitiveCollectionItems(props, ctx, instance);
    if (primitiveCollectionItemsState === void 0) {
      return;
    }
    let unwatchFns = [];
    unwatchFns.push(watch(() => props.clampToGround, (val) => {
      const polygonPrimitive = instance.cesiumObject;
      polygonPrimitive && (polygonPrimitive.clampToGround = val);
    }));
    unwatchFns.push(watch(() => props.positions, (val) => {
      const polygonPrimitive = instance.cesiumObject;
      polygonPrimitive && (polygonPrimitive.positions = makeCartesian3Array(val));
    }));
    unwatchFns.push(watch(() => props.polygonHierarchy, (val) => {
      const polygonPrimitive = instance.cesiumObject;
      polygonPrimitive && (polygonPrimitive.polygonHierarchy = makePolygonHierarchy(val));
    }));
    unwatchFns.push(watch(() => props.appearance, (val) => {
      const polygonPrimitive = instance.cesiumObject;
      polygonPrimitive && (polygonPrimitive.appearance = makeAppearance.call(instance, val));
    }));
    unwatchFns.push(watch(() => props.depthFailAppearance, (val) => {
      const polygonPrimitive = instance.cesiumObject;
      polygonPrimitive && (polygonPrimitive.depthFailAppearance = makeAppearance.call(instance, val));
    }));
    unwatchFns.push(watch(() => props.show, (val) => {
      const polygonPrimitive = instance.cesiumObject;
      polygonPrimitive && (polygonPrimitive.show = val);
    }));
    unwatchFns.push(watch(() => props.classificationType, (val) => {
      const polygonPrimitive = instance.cesiumObject;
      polygonPrimitive && (polygonPrimitive.classificationType = val);
    }));
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionItemsState.transformProps(props);
      return new PolygonPrimitive(options);
    };
    instance.mount = async () => {
      const primitives = primitiveCollectionItemsState.$services.primitives;
      const collectionItem = instance.cesiumObject;
      collectionItem._vcParent = primitives;
      return primitives && primitives.add(collectionItem);
    };
    instance.unmount = async () => {
      const primitives = primitiveCollectionItemsState.$services.primitives;
      const collectionItem = instance.cesiumObject;
      return primitives && !primitives.isDestroyed() && primitives.remove(collectionItem);
    };
    onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""));
    };
  }
});

export { Polygon as default, polygonProps };
//# sourceMappingURL=index.mjs.map
