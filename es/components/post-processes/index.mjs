import PostProcessStage from './post-process-stage/index.mjs';
export { postProcessStageProps } from './post-process-stage/index.mjs';
import PostProcessStageScan from './post-process-stage-scan/index.mjs';
export { postProcessStageScanProps } from './post-process-stage-scan/index.mjs';
import PostProcessStageCollection from './post-process-stage-collection/index.mjs';
export { postProcessStageCollectionProps } from './post-process-stage-collection/index.mjs';

const components = [PostProcessStage, PostProcessStageScan, PostProcessStageCollection];
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
const VcPostProcessStage = PostProcessStage;
const VcPostProcessStageScan = PostProcessStageScan;
const VcPostProcessStageCollection = PostProcessStageCollection;

export { VcPostProcessStage, VcPostProcessStageCollection, VcPostProcessStageScan, index as default };
//# sourceMappingURL=index.mjs.map
