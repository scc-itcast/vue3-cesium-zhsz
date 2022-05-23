import OverlayHtml from './html/index.mjs';
export { htmlOverlayProps } from './html/index.mjs';
import OverlayHeatmap from './heatmap/index.mjs';
export { heatmapOverlayProps } from './heatmap/index.mjs';
import OverlayEcharts from './echarts/index.mjs';
export { echartsOverlayProps } from './echarts/index.mjs';
import OverlayWind from './wind/index.mjs';
export { windmapOverlayProps } from './wind/index.mjs';
import OverlayDynamic from './dynamic/index.mjs';
export { dynamicOverlayProps } from './dynamic/index.mjs';

const components = [OverlayHtml, OverlayHeatmap, OverlayEcharts, OverlayWind, OverlayDynamic];
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
const VcOverlayHtml = OverlayHtml;
const VcOverlayHeatmap = OverlayHeatmap;
const VcOverlayEcharts = OverlayEcharts;
const VcOverlayWind = OverlayWind;
const VcOverlayDynamic = OverlayDynamic;

export { VcOverlayDynamic, VcOverlayEcharts, VcOverlayHeatmap, VcOverlayHtml, VcOverlayWind, index as default };
//# sourceMappingURL=index.mjs.map
