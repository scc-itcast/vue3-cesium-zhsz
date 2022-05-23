import ImageryProviderAmap from './amap/index.mjs';
export { amapImageryProviderProps } from './amap/index.mjs';
import ImageryProviderArcgis from './arcgis/imagery.mjs';
export { arcgisImageryProviderProps } from './arcgis/imagery.mjs';
import ImageryProviderBaidu from './baidu/index.mjs';
export { baiduImageryProviderProps } from './baidu/index.mjs';
import ImageryProviderBing from './bingmaps/index.mjs';
export { bingImageryProviderProps } from './bingmaps/index.mjs';
import ImageryProviderGoogle from './google-earth/index.mjs';
export { googleImageryProviderProps } from './google-earth/index.mjs';
import ImageryProviderGrid from './grid/index.mjs';
export { gridImageryProviderProps } from './grid/index.mjs';
import ImageryProviderIon from './ion/index.mjs';
export { ionImageryProviderProps } from './ion/index.mjs';
import ImageryProviderMapbox from './mapbox-style/index.mjs';
export { mapboxImageryProviderProps } from './mapbox-style/index.mjs';
import ImageryProviderOsm from './osm/index.mjs';
export { osmImageryProviderProps } from './osm/index.mjs';
import ImageryProviderSingletile from './single-tile/index.mjs';
export { singletileImageryProviderProps } from './single-tile/index.mjs';
import ImageryProviderSupermap from './supermap/index.mjs';
export { supermapImageryProviderProps } from './supermap/index.mjs';
import ImageryProviderTencent from './tencent/index.mjs';
export { tencentImageryProviderProps } from './tencent/index.mjs';
import ImageryProviderTianditu from './tianditu/imagery.mjs';
export { tiandituImageryProviderProps } from './tianditu/imagery.mjs';
import ImageryProviderTileCoordinates from './tile-coordinates/index.mjs';
export { tileCoordinatesImageryProviderProps } from './tile-coordinates/index.mjs';
import ImageryProviderTms from './tile-map-service/index.mjs';
export { tmsImageryProviderProps } from './tile-map-service/index.mjs';
import ImageryProviderTiledcache from './tiled-cache/index.mjs';
export { tiledcacheImageryProviderProps } from './tiled-cache/index.mjs';
import ImageryProviderUrltemplate from './url-template/index.mjs';
export { urltemplateImageryProviderProps } from './url-template/index.mjs';
import ImageryProviderWms from './wms/index.mjs';
export { wmsImageryProviderProps } from './wms/index.mjs';
import ImageryProviderWmts from './wmts/index.mjs';
export { wmtsImageryProviderProps } from './wmts/index.mjs';
import TerrainProviderCesium from './cesium-terrain/index.mjs';
export { cesiumTerrainProviderProps } from './cesium-terrain/index.mjs';
import TerrainProviderArcgis from './arcgis/terrain.mjs';
export { arcgisTerrainProviderProps } from './arcgis/terrain.mjs';
import TerrainProviderVrTheworld from './vr-theworld/index.mjs';
export { vrTheworldImageryProviderProps } from './vr-theworld/index.mjs';
import TerrainProviderTianditu from './tianditu/terrain.mjs';
export { tiandituTerrainProviderProps } from './tianditu/terrain.mjs';

const components = [
  ImageryProviderAmap,
  ImageryProviderArcgis,
  ImageryProviderBaidu,
  ImageryProviderBing,
  ImageryProviderGoogle,
  ImageryProviderGrid,
  ImageryProviderIon,
  ImageryProviderMapbox,
  ImageryProviderOsm,
  ImageryProviderSingletile,
  ImageryProviderSupermap,
  ImageryProviderTencent,
  ImageryProviderTianditu,
  ImageryProviderTileCoordinates,
  ImageryProviderTms,
  ImageryProviderTiledcache,
  ImageryProviderUrltemplate,
  ImageryProviderWms,
  ImageryProviderWmts,
  TerrainProviderCesium,
  TerrainProviderArcgis,
  TerrainProviderVrTheworld,
  TerrainProviderTianditu
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
const VcImageryProviderAmap = ImageryProviderAmap;
const VcImageryProviderArcgis = ImageryProviderArcgis;
const VcImageryProviderBaidu = ImageryProviderBaidu;
const VcImageryProviderBing = ImageryProviderBing;
const VcImageryProviderGoogle = ImageryProviderGoogle;
const VcImageryProviderGrid = ImageryProviderGrid;
const VcImageryProviderIon = ImageryProviderIon;
const VcImageryProviderMapbox = ImageryProviderMapbox;
const VcImageryProviderOsm = ImageryProviderOsm;
const VcImageryProviderSingletile = ImageryProviderSingletile;
const VcImageryProviderSupermap = ImageryProviderSupermap;
const VcImageryProviderTencent = ImageryProviderTencent;
const VcImageryProviderTianditu = ImageryProviderTianditu;
const VcImageryProviderTileCoordinates = ImageryProviderTileCoordinates;
const VcImageryProviderTms = ImageryProviderTms;
const VcImageryProviderTiledcache = ImageryProviderTiledcache;
const VcImageryProviderUrltemplate = ImageryProviderUrltemplate;
const VcImageryProviderWms = ImageryProviderWms;
const VcImageryProviderWmts = ImageryProviderWmts;
const VcTerrainProviderCesium = TerrainProviderCesium;
const VcTerrainProviderArcgis = TerrainProviderArcgis;
const VcTerrainProviderVrTheworld = TerrainProviderVrTheworld;
const VcTerrainProviderTianditu = TerrainProviderTianditu;

export { VcImageryProviderAmap, VcImageryProviderArcgis, VcImageryProviderBaidu, VcImageryProviderBing, VcImageryProviderGoogle, VcImageryProviderGrid, VcImageryProviderIon, VcImageryProviderMapbox, VcImageryProviderOsm, VcImageryProviderSingletile, VcImageryProviderSupermap, VcImageryProviderTencent, VcImageryProviderTianditu, VcImageryProviderTileCoordinates, VcImageryProviderTiledcache, VcImageryProviderTms, VcImageryProviderUrltemplate, VcImageryProviderWms, VcImageryProviderWmts, VcTerrainProviderArcgis, VcTerrainProviderCesium, VcTerrainProviderTianditu, VcTerrainProviderVrTheworld, index as default };
//# sourceMappingURL=index.mjs.map
