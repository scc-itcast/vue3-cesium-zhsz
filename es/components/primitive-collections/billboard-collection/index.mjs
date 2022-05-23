import { defineComponent, getCurrentInstance, watch, onUnmounted, h, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { cloneDeep, differenceBy } from 'lodash-unified';
import { scene, blendOption, show, enableMouseEvent, modelMatrix, debugShowBoundingVolume } from '../../../utils/cesium-props.mjs';
import { addCustomProperty, kebabCase } from '../../../utils/util.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import { primitiveCollectionEmits } from '../../../utils/emits.mjs';
import usePrimitiveCollections from '../../../composables/use-primitive-collections/index.mjs';

const billboardCollectionProps = {
  ...scene,
  ...blendOption,
  ...show,
  ...enableMouseEvent,
  ...modelMatrix,
  ...debugShowBoundingVolume,
  billboards: {
    type: Array,
    default: () => []
  }
};
var CollectionBillboard = defineComponent({
  name: "VcCollectionBillboard",
  props: billboardCollectionProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "BillboardCollection";
    const primitiveCollectionsState = usePrimitiveCollections(props, ctx, instance);
    let unwatchFns = [];
    unwatchFns.push(watch(() => cloneDeep(props.billboards), (newVal, oldVal) => {
      if (!instance.mounted) {
        return;
      }
      const billboardCollection = instance.cesiumObject;
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
          const modifyBillboard = billboardCollection._billboards.find((v) => v.id === modify.oldOptions.id);
          modifyBillboard && Object.keys(modify.newOptions).forEach((prop) => {
            if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
              modifyBillboard[prop] = primitiveCollectionsState == null ? void 0 : primitiveCollectionsState.transformProp(prop, modify.newOptions[prop]);
            }
          });
        });
      } else {
        const addeds = differenceBy(newVal, oldVal, "id");
        const deletes = differenceBy(oldVal, newVal, "id");
        const deleteBillboards = [];
        for (let i = 0; i < deletes.length; i++) {
          const deleteBillboard = billboardCollection._billboards.find((v) => v.id === deletes[i].id);
          deleteBillboard && deleteBillboards.push(deleteBillboard);
        }
        deleteBillboards.forEach((v) => {
          billboardCollection.remove(v);
        });
        addBillboards(billboardCollection, addeds);
      }
    }, {
      deep: true
    }));
    instance.alreadyListening.push("billboards");
    const addBillboards = (billboardCollection, billboards) => {
      for (let i = 0; i < billboards.length; i++) {
        const billboardOptions = billboards[i];
        billboardOptions.id = Cesium.defined(billboardOptions.id) ? billboardOptions.id : Cesium.createGuid();
        const billboardOptionsTransform = primitiveCollectionsState == null ? void 0 : primitiveCollectionsState.transformProps(billboardOptions);
        const billboard = billboardCollection.add(billboardOptionsTransform);
        addCustomProperty(billboard, billboardOptionsTransform);
      }
    };
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState == null ? void 0 : primitiveCollectionsState.transformProps(props);
      const billboardCollection = new Cesium.BillboardCollection(options);
      addBillboards(billboardCollection, props.billboards);
      return billboardCollection;
    };
    onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    return () => {
      var _a, _b;
      return ctx.slots.default ? h("i", {
        class: kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""),
        style: { display: "none !important" }
      }, hSlot(ctx.slots.default)) : createCommentVNode(kebabCase(((_b = instance.proxy) == null ? void 0 : _b.$options.name) || ""));
    };
  }
});

export { billboardCollectionProps, CollectionBillboard as default };
//# sourceMappingURL=index.mjs.map
