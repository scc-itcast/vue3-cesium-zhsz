'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../../../composables/use-events/index.js');
require('../../../utils/util.js');
var lodashUnified = require('lodash-unified');

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
const viewerScreenSpaceEventsCamel = index.viewerScreenSpaceEvents.map((v) => lodashUnified.camelCase(v));
const cmpEvents = [
  "beforeLoad",
  "cesiumReady",
  "ready",
  "destroyed",
  "update:camera",
  "viewerWidgetResized",
  ...index.viewerScreenSpaceEvents,
  ...viewerScreenSpaceEventsCamel,
  ...index.pickEvents
];
const emits = viewerEvents.reduce((pre, cur) => {
  return pre.concat(cur.events);
}, cmpEvents);

exports.emits = emits;
exports.viewerEvents = viewerEvents;
//# sourceMappingURL=events.js.map
