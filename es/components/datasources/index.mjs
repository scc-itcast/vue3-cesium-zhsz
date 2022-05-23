import DatasourceCustom from './custom/index.mjs';
export { customDatasourceProps } from './custom/index.mjs';
import DatasourceCzml from './czml/index.mjs';
export { czmlDatasourceProps } from './czml/index.mjs';
import DatasourceGeojson from './geojson/index.mjs';
export { geojsonDatasourceProps } from './geojson/index.mjs';
import DatasourceKml from './kml/index.mjs';
export { kmlDatasourceProps } from './kml/index.mjs';

const components = [DatasourceCustom, DatasourceCzml, DatasourceGeojson, DatasourceKml];
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
const VcDatasourceCustom = DatasourceCustom;
const VcDatasourceCzml = DatasourceCzml;
const VcDatasourceGeojson = DatasourceGeojson;
const VcDatasourceKml = DatasourceKml;

export { VcDatasourceCustom, VcDatasourceCzml, VcDatasourceGeojson, VcDatasourceKml, index as default };
//# sourceMappingURL=index.mjs.map
