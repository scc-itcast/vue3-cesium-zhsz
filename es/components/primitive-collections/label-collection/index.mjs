import { defineComponent, getCurrentInstance, watch, onUnmounted, h, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { cloneDeep, differenceBy } from 'lodash-unified';
import { modelMatrix, debugShowBoundingVolume, scene, blendOption, show, enableMouseEvent } from '../../../utils/cesium-props.mjs';
import { addCustomProperty, kebabCase } from '../../../utils/util.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import { primitiveCollectionEmits } from '../../../utils/emits.mjs';
import usePrimitiveCollections from '../../../composables/use-primitive-collections/index.mjs';

const labelCollectionProps = {
  ...modelMatrix,
  ...debugShowBoundingVolume,
  ...scene,
  ...blendOption,
  ...show,
  ...enableMouseEvent,
  labels: {
    type: Array,
    default: () => []
  }
};
var CollectionLabel = defineComponent({
  name: "VcCollectionLabel",
  props: labelCollectionProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    var _a;
    const instance = getCurrentInstance();
    instance.cesiumClass = "LabelCollection";
    const primitiveCollectionsState = usePrimitiveCollections(props, ctx, instance);
    if (primitiveCollectionsState === void 0) {
      return;
    }
    instance.alreadyListening.push("labels");
    let unwatchFns = [];
    unwatchFns.push(watch(() => cloneDeep(props.labels), (newVal, oldVal) => {
      if (!instance.mounted) {
        return;
      }
      const labelCollection = instance.cesiumObject;
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
          const modifyLabel = labelCollection._labels.find((v) => v.id === modify.oldOptions.id);
          modifyLabel && Object.keys(modify.newOptions).forEach((prop) => {
            if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
              modifyLabel[prop] = primitiveCollectionsState.transformProp(prop, modify.newOptions[prop]);
            }
          });
        });
      } else {
        const addeds = differenceBy(newVal, oldVal, "id");
        const deletes = differenceBy(oldVal, newVal, "id");
        const deleteLabels = [];
        for (let i = 0; i < deletes.length; i++) {
          const deleteLabel = labelCollection._labels.find((v) => v.id === deletes[i].id);
          deleteLabel && deleteLabels.push(deleteLabel);
        }
        deleteLabels.forEach((v) => {
          labelCollection.remove(v);
        });
        addLabels(labelCollection, addeds);
      }
    }, {
      deep: true
    }));
    const addLabels = (labelCollection, labels) => {
      for (let i = 0; i < labels.length; i++) {
        const labelOptions = labels[i];
        labelOptions.id = Cesium.defined(labelOptions.id) ? labelOptions.id : Cesium.createGuid();
        const labelOptionsTransform = primitiveCollectionsState.transformProps(labelOptions);
        const label = labelCollection.add(labelOptionsTransform);
        addCustomProperty(label, labelOptionsTransform);
      }
    };
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState.transformProps(props);
      const labelCollection = new Cesium.LabelCollection(options);
      addLabels(labelCollection, props.labels);
      return labelCollection;
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

export { CollectionLabel as default, labelCollectionProps };
//# sourceMappingURL=index.mjs.map
