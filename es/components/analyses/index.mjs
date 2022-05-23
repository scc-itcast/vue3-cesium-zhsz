import AnalysisFlood from './flood/index.mjs';
import Analyses from './src/index.mjs';
export { default as VcAnalysisSightline } from './src/sightline/index.mjs';
export { default as VcAnalysisViewshed } from './src/viewshed/index.mjs';
export { analysesProps } from './src/defaultProps.mjs';

const components = [AnalysisFlood, Analyses];
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
const VcAnalysisFlood = AnalysisFlood;
const VcAnalyses = Analyses;

export { VcAnalyses, VcAnalysisFlood, index as default };
//# sourceMappingURL=index.mjs.map
