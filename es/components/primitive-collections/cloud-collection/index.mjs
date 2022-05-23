import { defineComponent, getCurrentInstance, watch, onUnmounted, h, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { cloneDeep, differenceBy } from 'lodash-unified';
import { show } from '../../../utils/cesium-props.mjs';
import { addCustomProperty, kebabCase } from '../../../utils/util.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import CumulusCloud from '../cloud/index.mjs';
import usePrimitiveCollections from '../../../composables/use-primitive-collections/index.mjs';

const cloudCollectionProps = {
  ...show,
  noiseDetail: {
    type: Number,
    default: 16
  },
  noiseOffset: {
    type: Object
  },
  debugBillboards: {
    type: Boolean,
    default: false
  },
  debugEllipsoids: {
    type: Boolean,
    default: false
  },
  clouds: {
    type: Array,
    default: () => []
  }
};
var CollectionCloud = defineComponent({
  name: "VcCollectionCloud",
  props: cloudCollectionProps,
  emits: commonEmits,
  setup(props, ctx) {
    var _a;
    const instance = getCurrentInstance();
    instance.cesiumClass = "CloudCollection";
    const primitiveCollectionsState = usePrimitiveCollections(props, ctx, instance);
    if (primitiveCollectionsState === void 0) {
      return;
    }
    instance.alreadyListening.push("clouds");
    let unwatchFns = [];
    unwatchFns.push(watch(() => cloneDeep(props.clouds), (newVal, oldVal) => {
      if (!instance.mounted) {
        return;
      }
      const cloudCollection = instance.cesiumObject;
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
          const modifyCloud = cloudCollection._clouds.find((v) => v.id === modify.oldOptions.id);
          modifyCloud && Object.keys(modify.newOptions).forEach((prop) => {
            if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
              modifyCloud[prop] = primitiveCollectionsState.transformProp(prop, modify.newOptions[prop]);
            }
          });
        });
      } else {
        const addeds = differenceBy(newVal, oldVal, "id");
        const deletes = differenceBy(oldVal, newVal, "id");
        const deleteClouds = [];
        for (let i = 0; i < deletes.length; i++) {
          const deleteCloud = cloudCollection._clouds.find((v) => v.id === deletes[i].id);
          deleteCloud && deleteClouds.push(deleteCloud);
        }
        deleteClouds.forEach((v) => {
          cloudCollection.remove(v);
        });
        addClouds(cloudCollection, addeds);
      }
    }, {
      deep: true
    }));
    const addClouds = (cloudCollection, clouds) => {
      for (let i = 0; i < clouds.length; i++) {
        const cloudOptions = clouds[i];
        cloudOptions.id = Cesium.defined(cloudOptions.id) ? cloudOptions.id : Cesium.createGuid();
        const cloudOptionsTransform = primitiveCollectionsState.transformProps(cloudOptions, CumulusCloud.props);
        const cloud = cloudCollection.add(cloudOptionsTransform);
        addCustomProperty(cloud, cloudOptionsTransform);
      }
    };
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState.transformProps(props, CumulusCloud.props);
      const cloudCollection = new Cesium.CloudCollection(options);
      addClouds(cloudCollection, props.clouds);
      return cloudCollection;
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

export { cloudCollectionProps, CollectionCloud as default };
//# sourceMappingURL=index.mjs.map
