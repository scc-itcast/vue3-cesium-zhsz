import useCommon from '../use-common/index.mjs';
import { mergeDescriptors } from '../../utils/merge-descriptors.mjs';
import { watch, onUnmounted, provide } from 'vue';
import { vcKey } from '../../utils/config.mjs';
import { cloneDeep, differenceBy } from 'lodash-unified';
import { addCustomProperty } from '../../utils/util.mjs';

function useDatasources(props, ctx, vcInstance) {
  vcInstance.cesiumEvents = ["changedEvent", "errorEvent", "loadingEvent"];
  if (vcInstance.cesiumClass === "KmlDataSource") {
    vcInstance.cesiumEvents.push("refreshEvent");
    vcInstance.cesiumEvents.push("unsupportedNodeEvent");
  }
  vcInstance.cesiumMembersEvents = [
    {
      name: "clock",
      events: ["definitionChanged"]
    },
    {
      name: "clustering",
      events: ["clusterEvent"]
    },
    {
      name: "entities",
      events: ["collectionChanged"]
    }
  ];
  const commonState = useCommon(props, ctx, vcInstance);
  if (commonState === void 0) {
    return;
  }
  vcInstance.alreadyListening.push("entities");
  let unwatchFns = [];
  unwatchFns.push(watch(() => cloneDeep(props.entities), (newVal, oldVal) => {
    if (!vcInstance.mounted) {
      return;
    }
    const datasource = vcInstance.cesiumObject;
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
      modifies.forEach((v) => {
        const modifyEntity = datasource.entities.getById(v.oldOptions.id);
        if (v.oldOptions.id === v.newOptions.id) {
          modifyEntity && Object.keys(v.newOptions).forEach((prop) => {
            if (v.oldOptions[prop] !== v.newOptions[prop]) {
              modifyEntity[prop] = commonState.transformProp(prop, v.newOptions[prop]);
            }
          });
        } else {
          datasource.entities.remove(modifyEntity);
          const entityOptions = v.newOptions;
          addEntities(datasource, [entityOptions]);
        }
      });
    } else {
      const addeds = differenceBy(newVal, oldVal, "id");
      const deletes = differenceBy(oldVal, newVal, "id");
      const deletedEntities = [];
      for (let i = 0; i < deletes.length; i++) {
        const deleteEntity = datasource.entities.getById(deletes[i].id);
        deletedEntities.push(deleteEntity);
      }
      deletedEntities.forEach((v) => {
        datasource.entities.remove(v);
      });
      addEntities(datasource, addeds);
    }
  }, {
    deep: true
  }));
  const addEntities = (datasource, entities) => {
    for (let i = 0; i < entities.length; i++) {
      const entityOptions = entities[i];
      const entityOptionsTransform = commonState.transformProps(entityOptions);
      const entity = datasource.entities.add(entityOptionsTransform);
      entityOptions.id !== entity.id && (entityOptions.id = entity.id);
      addCustomProperty(entity, entityOptionsTransform);
    }
  };
  vcInstance.mount = async () => {
    const dataSources = commonState.$services.dataSources;
    const datasource = vcInstance.cesiumObject;
    datasource.show = props.show;
    addEntities(datasource, props.entities);
    return dataSources.add(datasource).then(() => {
      return true;
    });
  };
  vcInstance.unmount = async () => {
    const dataSources = commonState.$services.dataSources;
    const datasource = vcInstance.cesiumObject;
    return dataSources && dataSources.remove(datasource, props.destroy);
  };
  const getServices = () => {
    return mergeDescriptors(commonState.getServices(), {
      get datasource() {
        return vcInstance.cesiumObject;
      },
      get entities() {
        var _a;
        return (_a = vcInstance.cesiumObject) == null ? void 0 : _a.entities;
      }
    });
  };
  onUnmounted(() => {
    unwatchFns.forEach((item) => item());
    unwatchFns = [];
  });
  provide(vcKey, getServices());
  vcInstance.appContext.config.globalProperties.$VueCesium = getServices();
  return {
    transformProps: commonState.transformProps,
    unwatchFns: commonState.unwatchFns,
    setPropsWatcher: commonState.setPropsWatcher
  };
}

export { useDatasources as default };
//# sourceMappingURL=index.mjs.map
