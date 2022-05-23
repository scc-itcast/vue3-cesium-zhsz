'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./amap/index.js');
var imagery = require('./arcgis/imagery.js');
var index$2 = require('./baidu/index.js');
var index$3 = require('./bingmaps/index.js');
var index$5 = require('./google-earth/index.js');
var index$6 = require('./grid/index.js');
var index$7 = require('./ion/index.js');
var index$8 = require('./mapbox-style/index.js');
var index$9 = require('./osm/index.js');
var index$a = require('./single-tile/index.js');
var index$b = require('./supermap/index.js');
var index$c = require('./tencent/index.js');
var imagery$1 = require('./tianditu/imagery.js');
var index$d = require('./tile-coordinates/index.js');
var index$e = require('./tile-map-service/index.js');
var index$f = require('./tiled-cache/index.js');
var index$g = require('./url-template/index.js');
var index$i = require('./wms/index.js');
var index$j = require('./wmts/index.js');
var index$4 = require('./cesium-terrain/index.js');
var terrain = require('./arcgis/terrain.js');
var index$h = require('./vr-theworld/index.js');
var terrain$1 = require('./tianditu/terrain.js');

const components = [
  index$1["default"],
  imagery["default"],
  index$2["default"],
  index$3["default"],
  index$5["default"],
  index$6["default"],
  index$7["default"],
  index$8["default"],
  index$9["default"],
  index$a["default"],
  index$b["default"],
  index$c["default"],
  imagery$1["default"],
  index$d["default"],
  index$e["default"],
  index$f["default"],
  index$g["default"],
  index$i["default"],
  index$j["default"],
  index$4["default"],
  terrain["default"],
  index$h["default"],
  terrain$1["default"]
];
const install = (app) => {
  components.forEach((cmp) => {
    app.component(cmp.name, cmp);
  });
};
var index = {
  install
};
components.forEach((cmp) => {
  cmp["install"] = (app) => {
    app.component(cmp.name, cmp);
  };
});
const VcImageryProviderAmap = index$1["default"];
const VcImageryProviderArcgis = imagery["default"];
const VcImageryProviderBaidu = index$2["default"];
const VcImageryProviderBing = index$3["default"];
const VcImageryProviderGoogle = index$5["default"];
const VcImageryProviderGrid = index$6["default"];
const VcImageryProviderIon = index$7["default"];
const VcImageryProviderMapbox = index$8["default"];
const VcImageryProviderOsm = index$9["default"];
const VcImageryProviderSingletile = index$a["default"];
const VcImageryProviderSupermap = index$b["default"];
const VcImageryProviderTencent = index$c["default"];
const VcImageryProviderTianditu = imagery$1["default"];
const VcImageryProviderTileCoordinates = index$d["default"];
const VcImageryProviderTms = index$e["default"];
const VcImageryProviderTiledcache = index$f["default"];
const VcImageryProviderUrltemplate = index$g["default"];
const VcImageryProviderWms = index$i["default"];
const VcImageryProviderWmts = index$j["default"];
const VcTerrainProviderCesium = index$4["default"];
const VcTerrainProviderArcgis = terrain["default"];
const VcTerrainProviderVrTheworld = index$h["default"];
const VcTerrainProviderTianditu = terrain$1["default"];

exports.amapImageryProviderProps = index$1.amapImageryProviderProps;
exports.arcgisImageryProviderProps = imagery.arcgisImageryProviderProps;
exports.baiduImageryProviderProps = index$2.baiduImageryProviderProps;
exports.bingImageryProviderProps = index$3.bingImageryProviderProps;
exports.googleImageryProviderProps = index$5.googleImageryProviderProps;
exports.gridImageryProviderProps = index$6.gridImageryProviderProps;
exports.ionImageryProviderProps = index$7.ionImageryProviderProps;
exports.mapboxImageryProviderProps = index$8.mapboxImageryProviderProps;
exports.osmImageryProviderProps = index$9.osmImageryProviderProps;
exports.singletileImageryProviderProps = index$a.singletileImageryProviderProps;
exports.supermapImageryProviderProps = index$b.supermapImageryProviderProps;
exports.tencentImageryProviderProps = index$c.tencentImageryProviderProps;
exports.tiandituImageryProviderProps = imagery$1.tiandituImageryProviderProps;
exports.tileCoordinatesImageryProviderProps = index$d.tileCoordinatesImageryProviderProps;
exports.tmsImageryProviderProps = index$e.tmsImageryProviderProps;
exports.tiledcacheImageryProviderProps = index$f.tiledcacheImageryProviderProps;
exports.urltemplateImageryProviderProps = index$g.urltemplateImageryProviderProps;
exports.wmsImageryProviderProps = index$i.wmsImageryProviderProps;
exports.wmtsImageryProviderProps = index$j.wmtsImageryProviderProps;
exports.cesiumTerrainProviderProps = index$4.cesiumTerrainProviderProps;
exports.arcgisTerrainProviderProps = terrain.arcgisTerrainProviderProps;
exports.vrTheworldImageryProviderProps = index$h.vrTheworldImageryProviderProps;
exports.tiandituTerrainProviderProps = terrain$1.tiandituTerrainProviderProps;
exports.VcImageryProviderAmap = VcImageryProviderAmap;
exports.VcImageryProviderArcgis = VcImageryProviderArcgis;
exports.VcImageryProviderBaidu = VcImageryProviderBaidu;
exports.VcImageryProviderBing = VcImageryProviderBing;
exports.VcImageryProviderGoogle = VcImageryProviderGoogle;
exports.VcImageryProviderGrid = VcImageryProviderGrid;
exports.VcImageryProviderIon = VcImageryProviderIon;
exports.VcImageryProviderMapbox = VcImageryProviderMapbox;
exports.VcImageryProviderOsm = VcImageryProviderOsm;
exports.VcImageryProviderSingletile = VcImageryProviderSingletile;
exports.VcImageryProviderSupermap = VcImageryProviderSupermap;
exports.VcImageryProviderTencent = VcImageryProviderTencent;
exports.VcImageryProviderTianditu = VcImageryProviderTianditu;
exports.VcImageryProviderTileCoordinates = VcImageryProviderTileCoordinates;
exports.VcImageryProviderTiledcache = VcImageryProviderTiledcache;
exports.VcImageryProviderTms = VcImageryProviderTms;
exports.VcImageryProviderUrltemplate = VcImageryProviderUrltemplate;
exports.VcImageryProviderWms = VcImageryProviderWms;
exports.VcImageryProviderWmts = VcImageryProviderWmts;
exports.VcTerrainProviderArcgis = VcTerrainProviderArcgis;
exports.VcTerrainProviderCesium = VcTerrainProviderCesium;
exports.VcTerrainProviderTianditu = VcTerrainProviderTianditu;
exports.VcTerrainProviderVrTheworld = VcTerrainProviderVrTheworld;
exports["default"] = index;
//# sourceMappingURL=index.js.map
