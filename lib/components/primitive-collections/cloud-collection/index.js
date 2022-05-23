'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../composables/index.js');
var lodashUnified = require('lodash-unified');
var cesiumProps = require('../../../utils/cesium-props.js');
var util = require('../../../utils/util.js');
var render = require('../../../utils/private/render.js');
var emits = require('../../../utils/emits.js');
var index$1 = require('../cloud/index.js');
var index = require('../../../composables/use-primitive-collections/index.js');

const cloudCollectionProps = {
  ...cesiumProps.show,
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
var CollectionCloud = vue.defineComponent({
  name: "VcCollectionCloud",
  props: cloudCollectionProps,
  emits: emits.commonEmits,
  setup(props, ctx) {
    var _a;
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "CloudCollection";
    const primitiveCollectionsState = index["default"](props, ctx, instance);
    if (primitiveCollectionsState === void 0) {
      return;
    }
    instance.alreadyListening.push("clouds");
    let unwatchFns = [];
    unwatchFns.push(vue.watch(() => lodashUnified.cloneDeep(props.clouds), (newVal, oldVal) => {
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
        const addeds = lodashUnified.differenceBy(newVal, oldVal, "id");
        const deletes = lodashUnified.differenceBy(oldVal, newVal, "id");
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
        const cloudOptionsTransform = primitiveCollectionsState.transformProps(cloudOptions, index$1["default"].props);
        const cloud = cloudCollection.add(cloudOptionsTransform);
        util.addCustomProperty(cloud, cloudOptionsTransform);
      }
    };
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState.transformProps(props, index$1["default"].props);
      const cloudCollection = new Cesium.CloudCollection(options);
      addClouds(cloudCollection, props.clouds);
      return cloudCollection;
    };
    vue.onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    const name = ((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "";
    return () => ctx.slots.default ? vue.h("i", {
      class: util.kebabCase(name),
      style: { display: "none !important" }
    }, render.hSlot(ctx.slots.default)) : vue.createCommentVNode(util.kebabCase(name));
  }
});

exports.cloudCollectionProps = cloudCollectionProps;
exports["default"] = CollectionCloud;
//# sourceMappingURL=index.js.map
