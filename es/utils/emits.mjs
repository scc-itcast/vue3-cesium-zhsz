const commonEmits = {
  beforeLoad: (instance) => true,
  ready: (readyObj) => readyObj.viewer instanceof Cesium.Viewer,
  destroyed: (instance) => true
};
const pickEventEmits = {
  mousedown: (evt) => true,
  mouseup: (evt) => true,
  click: (evt) => true,
  clickout: (evt) => true,
  dblclick: (evt) => true,
  mousemove: (evt) => true,
  mouseover: (evt) => true,
  mouseout: (evt) => true
};
const graphicsEmits = {
  ...commonEmits,
  definitionChanged: (property) => true
};
const providerEmits = {
  ...commonEmits,
  errorEvent: (evt) => true,
  readyPromise: (evt, viewer, instance) => true
};
const primitiveEmits = {
  ...commonEmits,
  ...pickEventEmits,
  readyPromise: (primitive, viewer, instance) => true,
  "update:geometryInstances": (instances) => true
};
const primitiveCollectionEmits = {
  ...commonEmits,
  ...pickEventEmits
};
const datasourceEmits = {
  ...commonEmits,
  ...pickEventEmits,
  definitionChanged: (property) => true,
  clusterEvent: (entities, cluster) => true,
  collectionChanged: (collection, addedArray, removedArray, changedArray) => true,
  changedEvent: (datasource) => true,
  errorEvent: (datasource, error) => true,
  loadingEvent: (datasource, isLoading) => true,
  refreshEvent: (datasource, url) => true,
  unsupportedNodeEvent: (datasource, parentEntity, node, entityCollection, styleCollection, sourceResource, uriResolver) => true
};
const drawingEmit = {
  ...commonEmits,
  activeEvt: (evt, viewer) => true,
  drawEvt: (evt, viewer) => true,
  editorEvt: (evt, viewer) => true,
  mouseEvt: (evt, viewer) => true
};

export { commonEmits, datasourceEmits, drawingEmit, graphicsEmits, pickEventEmits, primitiveCollectionEmits, primitiveEmits, providerEmits };
//# sourceMappingURL=emits.mjs.map
