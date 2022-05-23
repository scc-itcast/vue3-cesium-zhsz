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

const labelCollectionProps = {
  ...cesiumProps.modelMatrix,
  ...cesiumProps.debugShowBoundingVolume,
  ...cesiumProps.scene,
  ...cesiumProps.blendOption,
  ...cesiumProps.show,
  ...cesiumProps.enableMouseEvent,
  labels: {
    type: Array,
    default: () => []
  }
};
var CollectionLabel = vue.defineComponent({
  name: "VcCollectionLabel",
  props: labelCollectionProps,
  emits: emits.primitiveCollectionEmits,
  setup(props, ctx) {
    var _a;
    const instance = vue.getCurrentInstance();
    instance.cesiumClass = "LabelCollection";
    const primitiveCollectionsState = index["default"](props, ctx, instance);
    if (primitiveCollectionsState === void 0) {
      return;
    }
    instance.alreadyListening.push("labels");
    let unwatchFns = [];
    unwatchFns.push(vue.watch(() => lodashUnified.cloneDeep(props.labels), (newVal, oldVal) => {
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
        const addeds = lodashUnified.differenceBy(newVal, oldVal, "id");
        const deletes = lodashUnified.differenceBy(oldVal, newVal, "id");
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
        util.addCustomProperty(label, labelOptionsTransform);
      }
    };
    instance.createCesiumObject = async () => {
      const options = primitiveCollectionsState.transformProps(props);
      const labelCollection = new Cesium.LabelCollection(options);
      addLabels(labelCollection, props.labels);
      return labelCollection;
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

exports["default"] = CollectionLabel;
exports.labelCollectionProps = labelCollectionProps;
//# sourceMappingURL=index.js.map
