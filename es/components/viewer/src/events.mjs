import { viewerScreenSpaceEvents, pickEvents } from '../../../composables/use-events/index.mjs';
import '../../../utils/util.mjs';
import { camelCase } from 'lodash-unified';

const viewerEvents = [
  {
    name: "imageryLayers",
    events: ["layerAdded", "layerMoved", "layerRemoved", "layerShownOrHidden"]
  },
  {
    name: "dataSources",
    events: ["dataSourceAdded", "dataSourceMoved", "dataSourceRemoved"]
  },
  {
    name: "entities",
    events: ["collectionChanged"]
  },
  {
    name: "scene",
    events: ["morphComplete", "morphStart", "postRender", "postUpdate", "preRender", "preUpdate", "renderError", "terrainProviderChanged"]
  },
  {
    name: "camera",
    events: ["changed", "moveEnd", "moveStart"]
  },
  {
    name: "clock",
    events: ["onStop", "onTick"]
  },
  {
    name: "terrainProvider",
    events: ["errorEvent"]
  },
  {
    name: ["infoBox", "viewModel"],
    events: ["cameraClicked", "closeClicked"]
  },
  {
    name: ["scene", "globe"],
    events: ["imageryLayersUpdatedEvent", "terrainProviderChanged", "tileLoadProgressEvent"]
  }
];
const viewerScreenSpaceEventsCamel = viewerScreenSpaceEvents.map((v) => camelCase(v));
const cmpEvents = [
  "beforeLoad",
  "cesiumReady",
  "ready",
  "destroyed",
  "update:camera",
  "viewerWidgetResized",
  ...viewerScreenSpaceEvents,
  ...viewerScreenSpaceEventsCamel,
  ...pickEvents
];
const emits = viewerEvents.reduce((pre, cur) => {
  return pre.concat(cur.events);
}, cmpEvents);

export { emits, viewerEvents };
//# sourceMappingURL=events.mjs.map
