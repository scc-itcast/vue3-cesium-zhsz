import { defineComponent, getCurrentInstance, watch, onUnmounted, h, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { cloneDeep, differenceBy } from 'lodash-unified';
import { modelMatrix, debugShowBoundingVolume, show, enableMouseEvent } from '../../../utils/cesium-props.mjs';
import { addCustomProperty, kebabCase } from '../../../utils/util.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import { primitiveCollectionEmits } from '../../../utils/emits.mjs';
import usePrimitiveCollections from '../../../composables/use-primitive-collections/index.mjs';

const polylineCollectionProps = {
  ...modelMatrix,
  ...debugShowBoundingVolume,
  ...show,
  ...enableMouseEvent,
  polylines: {
    type: Array,
    default: () => []
  }
};
var CollectionPolyline = defineComponent({
  name: "VcCollectionPolyline",
  props: polylineCollectionProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    var _a;
    const instance = getCurrentInstance();
    instance.cesiumClass = "PolylineCollection";
    const primitiveCollectionsState = usePrimitiveCollections(props, ctx, instance);
    if (primitiveCollectionsState === void 0) {
      return;
    }
    instance.alreadyListening.push("polylines");
    let unwatchFns = [];
    unwatchFns.push(watch(() => cloneDeep(props.polylines), (newVal, oldVal) => {
      if (!instance.mounted) {
        return;
      }
      const polylineCollection = instance.cesiumObject;
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
          const modifyPolyline = polylineCollection._polylines.find((v) => v.id === modify.oldOptions.id);
          modifyPolyline && Object.keys(modify.newOptions).forEach((prop) => {
            if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
              modifyPolyline[prop] = primitiveCollectionsState.transformProp(prop, modify.newOptions[prop]);
            }
          });
        });
      } else {
        const addeds = differenceBy(newVal, oldVal, "id");
        const deletes = differenceBy(oldVal, newVal, "id");
        const deletePolylines = [];
        for (let i = 0; i < deletes.length; i++) {
          const deletePolyline = polylineCollection._polylines.find((v) => v.id === deletes[i].id);
          deletePolyline && deletePolylines.push(deletePolyline);
        }
        deletePolylines.forEach((v) => {
          polylineCollection.remove(v);
        });
        addPolylines(polylineCollection, addeds);
      }
    }, {
      deep: true
    }));
    const addPolylines = (polylineCollection, polylines) => {
      for (let i = 0; i < polylines.length; i++) {
        const polylineOptions = polylines[i];
        polylineOptions.id = Cesium.defined(polylineOptions.id) ? polylineOptions.id : Cesium.createGuid();
        const polylineOptionsTransform = primitiveCollectionsState.transformProps(polylineOptions);
        const polyline = polylineCollection.add(polylineOptionsTransform);
        addCustomProperty(polyline, polylineOptionsTransform);
      }
    };
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState.transformProps(props);
      const polylineCollection = new Cesium.PolylineCollection(options);
      addPolylines(polylineCollection, props.polylines);
      return polylineCollection;
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

export { CollectionPolyline as default };
//# sourceMappingURL=index.mjs.map
