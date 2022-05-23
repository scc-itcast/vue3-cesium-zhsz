import { defineComponent, getCurrentInstance, watch, onUnmounted, h, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show, enableMouseEvent } from '../../../utils/cesium-props.mjs';
import { addCustomProperty, kebabCase } from '../../../utils/util.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import { cloneDeep, differenceBy } from 'lodash-unified';
import '../../../shared/index.mjs';
import { primitiveCollectionEmits } from '../../../utils/emits.mjs';
import usePrimitiveCollections from '../../../composables/use-primitive-collections/index.mjs';
import PolygonPrimitive from '../../../shared/src/PolygonPrimitive.mjs';

const primitiveCollectionProps = {
  ...show,
  destroyPrimitives: {
    type: Boolean,
    default: true
  },
  ...enableMouseEvent,
  polygons: {
    type: Array,
    default: () => []
  }
};
var CollectionPrimitive = defineComponent({
  name: "VcCollectionPrimitive",
  props: primitiveCollectionProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    var _a;
    const instance = getCurrentInstance();
    instance.cesiumClass = "PrimitiveCollection";
    const primitiveCollectionsState = usePrimitiveCollections(props, ctx, instance);
    if (primitiveCollectionsState === void 0) {
      return;
    }
    instance.alreadyListening.push("polygons");
    let unwatchFns = [];
    unwatchFns.push(watch(() => cloneDeep(props.polygons), (newVal, oldVal) => {
      if (!instance.mounted) {
        return;
      }
      const primitiveCollection = instance.cesiumObject;
      if (newVal.length === oldVal.length) {
        const modifies = [];
        for (let i = 0; i < newVal.length; i++) {
          const options = newVal[i];
          const oldOptions = oldVal[i];
          if (JSON.stringify(options) !== JSON.stringify(oldOptions)) {
            modifies.push({
              newOptions: options,
              oldOptions
            });
          }
        }
        modifies.forEach((modify) => {
          const modifyPolygon = primitiveCollection._primitives.find((v) => v._id === modify.oldOptions.id);
          modifyPolygon && Object.keys(modify.newOptions).forEach((prop) => {
            if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
              modifyPolygon[prop] = primitiveCollectionsState.transformProp(prop, modify.newOptions[prop]);
            }
          });
        });
      } else {
        const addeds = differenceBy(newVal, oldVal, "id");
        const deletes = differenceBy(oldVal, newVal, "id");
        const deletePolygons = [];
        for (let i = 0; i < deletes.length; i++) {
          const deletePolygon = primitiveCollection._primitives.find((v) => v.id === deletes[i].id);
          deletePolygon && deletePolygons.push(deletePolygon);
        }
        deletePolygons.forEach((v) => {
          primitiveCollection.remove(v);
        });
        addPolygons(primitiveCollection, addeds);
      }
    }, {
      deep: true
    }));
    const addPolygons = (primitiveCollection, polygons) => {
      for (let i = 0; i < polygons.length; i++) {
        const polygonOptions = polygons[i];
        polygonOptions.id = Cesium.defined(polygonOptions.id) ? polygonOptions.id : Cesium.createGuid();
        const polygonOptionsTransform = primitiveCollectionsState.transformProps(polygonOptions);
        const polygonPrimitive = new PolygonPrimitive(polygonOptionsTransform);
        polygonPrimitive._vcParent = primitiveCollection;
        addCustomProperty(polygonPrimitive, polygonOptionsTransform);
        primitiveCollection.add(polygonPrimitive);
      }
    };
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState.transformProps(props);
      const primitiveCollection = new Cesium.PrimitiveCollection(options);
      addPolygons(primitiveCollection, props.polygons);
      return primitiveCollection;
    };
    onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    const name = ((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "";
    return () => ctx.slots.default ? h("i", {
      class: kebabCase(name),
      style: { display: "none !important" }
    }, hSlot(ctx.slots.default)) : createCommentVNode(kebabCase(name));
  }
});

export { CollectionPrimitive as default, primitiveCollectionProps };
//# sourceMappingURL=index.mjs.map
