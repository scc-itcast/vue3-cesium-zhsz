import { defineComponent, getCurrentInstance, watch, onUnmounted, h, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { cloneDeep, differenceBy } from 'lodash-unified';
import { modelMatrix, debugShowBoundingVolume, blendOption, show, enableMouseEvent } from '../../../utils/cesium-props.mjs';
import { addCustomProperty, kebabCase } from '../../../utils/util.mjs';
import { hSlot } from '../../../utils/private/render.mjs';
import { primitiveCollectionEmits } from '../../../utils/emits.mjs';
import usePrimitiveCollections from '../../../composables/use-primitive-collections/index.mjs';

const pointCollectionProps = {
  ...modelMatrix,
  ...debugShowBoundingVolume,
  ...blendOption,
  ...show,
  ...enableMouseEvent,
  points: {
    type: Array,
    default: () => []
  }
};
var CollectionPoint = defineComponent({
  name: "VcCollectionPoint",
  props: pointCollectionProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "PointPrimitiveCollection";
    const primitiveCollectionsState = usePrimitiveCollections(props, ctx, instance);
    if (primitiveCollectionsState === void 0) {
      return;
    }
    instance.alreadyListening.push("points");
    let unwatchFns = [];
    unwatchFns.push(watch(() => cloneDeep(props.points), (newVal, oldVal) => {
      if (!instance.mounted) {
        return;
      }
      const pointCollection = instance.cesiumObject;
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
          const modifyPoint = pointCollection._pointPrimitives.find((v) => v && v.id === modify.oldOptions.id);
          modifyPoint && Object.keys(modify.newOptions).forEach((prop) => {
            if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
              modifyPoint[prop] = primitiveCollectionsState.transformProp(prop, modify.newOptions[prop]);
            }
          });
        });
      } else {
        const addeds = differenceBy(newVal, oldVal, "id");
        const deletes = differenceBy(oldVal, newVal, "id");
        const deletePoints = [];
        for (let i = 0; i < deletes.length; i++) {
          const deletePoint = pointCollection._pointPrimitives.find((v) => v.id === deletes[i].id);
          deletePoint && deletePoints.push(deletePoint);
        }
        deletePoints.forEach((v) => {
          pointCollection.remove(v);
        });
        addPoints(pointCollection, addeds);
      }
    }, {
      deep: true
    }));
    const addPoints = (pointCollection, points) => {
      for (let i = 0; i < points.length; i++) {
        const pointOptions = points[i];
        pointOptions.id = Cesium.defined(pointOptions.id) ? pointOptions.id : Cesium.createGuid();
        const pointOptionsTransform = primitiveCollectionsState.transformProps(pointOptions);
        const point = pointCollection.add(pointOptionsTransform);
        addCustomProperty(point, pointOptionsTransform);
      }
    };
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState.transformProps(props);
      const pointCollection = new Cesium.PointPrimitiveCollection(options);
      addPoints(pointCollection, props.points);
      return pointCollection;
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

export { CollectionPoint as default, pointCollectionProps };
//# sourceMappingURL=index.mjs.map
