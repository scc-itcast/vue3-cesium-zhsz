'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var lodashUnified = require('lodash-unified');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var render = require('../../../utils/private/render.js');
var emits = require('../../../utils/emits.js');
var index = require('../../../composables/use-primitive-collections/index.js');

const pointCollectionProps = {
  ...cesiumProps.modelMatrix,
  ...cesiumProps.debugShowBoundingVolume,
  ...cesiumProps.blendOption,
  ...cesiumProps.show,
  ...cesiumProps.enableMouseEvent,
  points: {
    type: Array,
    default: () => []
  }
};
var CollectionPoint = vue.defineComponent({
  name: "VcCollectionPoint",
  props: pointCollectionProps,
  emits: emits.primitiveCollectionEmits,
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "PointPrimitiveCollection";
    const primitiveCollectionsState = index["default"](props, ctx, instance);
    if (primitiveCollectionsState === void 0) {
      return;
    }
    instance.alreadyListening.push("points");
    let unwatchFns = [];
    unwatchFns.push(vue.watch(() => lodashUnified.cloneDeep(props.points), (newVal, oldVal) => {
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
        const addeds = lodashUnified.differenceBy(newVal, oldVal, "id");
        const deletes = lodashUnified.differenceBy(oldVal, newVal, "id");
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
        util.addCustomProperty(point, pointOptionsTransform);
      }
    };
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState.transformProps(props);
      const pointCollection = new Cesium.PointPrimitiveCollection(options);
      addPoints(pointCollection, props.points);
      return pointCollection;
    };
    vue.onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    return () => {
      var _a, _b;
      return ctx.slots.default ? vue.h("i", {
        class: util.kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || ""),
        style: { display: "none !important" }
      }, render.hSlot(ctx.slots.default)) : vue.createCommentVNode(util.kebabCase(((_b = instance.proxy) == null ? void 0 : _b.$options.name) || ""));
    };
  }
});

exports["default"] = CollectionPoint;
exports.pointCollectionProps = pointCollectionProps;
//# sourceMappingURL=index.js.map
