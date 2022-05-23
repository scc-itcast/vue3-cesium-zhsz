import { defineComponent, getCurrentInstance, reactive, computed, ref } from 'vue';
import '../../../composables/index.mjs';
import { analysesProps, defaultOptions } from './defaultProps.mjs';
export { analysesProps } from './defaultProps.mjs';
import '../../../utils/util.mjs';
import useDrawingFab from '../../../composables/use-drawing/use-drawing-fab.mjs';
import VcAnalysisSightline from './sightline/index.mjs';
export { default as VcAnalysisSightline } from './sightline/index.mjs';
import VcAnalysisViewshed from './viewshed/index.mjs';
export { default as VcAnalysisViewshed } from './viewshed/index.mjs';
import { drawingEmit } from '../../../utils/emits.mjs';
import { useLocale } from '../../../composables/use-locale/index.mjs';
import { camelize } from '@vue/shared';

const emits = {
  ...drawingEmit,
  fabUpdated: (value) => true
};
var Analyses = defineComponent({
  name: "VcAnalyses",
  props: analysesProps,
  emits,
  setup(props, ctx) {
    var _a;
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcAnalyses";
    const { t } = useLocale();
    const options = {};
    const clearActionOpts = reactive(Object.assign({}, defaultOptions.clearActionOpts, props.clearActionOpts));
    const mainFabOpts = reactive(Object.assign({}, defaultOptions.mainFabOpts, props.mainFabOpts));
    const sightlineActionOpts = reactive(Object.assign({}, defaultOptions.sightlineActionOpts, props.sightlineActionOpts));
    const sightlineAnalysisOpts = reactive(Object.assign({}, defaultOptions.sightlineAnalysisOpts, props.sightlineAnalysisOpts));
    const viewshedActionOpts = reactive(Object.assign({}, defaultOptions.viewshedActionOpts, props.viewshedActionOpts));
    const viewshedAnalysisOpts = reactive(Object.assign({}, defaultOptions.viewshedAnalysisOpts, props.viewshedAnalysisOpts));
    options.sightlineActionOpts = sightlineActionOpts;
    options.sightlineAnalysisOpts = sightlineAnalysisOpts;
    options.viewshedActionOpts = viewshedActionOpts;
    options.viewshedAnalysisOpts = viewshedAnalysisOpts;
    options.clearActionOpts = clearActionOpts;
    const drawingActionInstances = computed(() => {
      return props.analyses.map((analysisName) => ({
        name: analysisName,
        type: "analysis",
        actionStyle: {
          background: options[`${camelize(analysisName)}ActionOpts`].color,
          color: options[`${camelize(analysisName)}ActionOpts`].textColor
        },
        actionClass: `vc-analysis-${analysisName} vc-analysis-button`,
        actionRef: ref(null),
        actionOpts: options[`${camelize(analysisName)}ActionOpts`],
        cmp: getDrawingCmp(analysisName),
        cmpRef: ref(null),
        cmpOpts: options[`${camelize(analysisName)}AnalysisOpts`],
        tip: options[`${camelize(analysisName)}ActionOpts`].tooltip.tip || t(`vc.analysis.${camelize(analysisName)}.tip`),
        isActive: false
      }));
    });
    function getDrawingCmp(name) {
      switch (name) {
        case "sightline":
          return VcAnalysisSightline;
        case "viewshed":
          return VcAnalysisViewshed;
        default:
          return void 0;
      }
    }
    return (_a = useDrawingFab(props, ctx, instance, drawingActionInstances, mainFabOpts, clearActionOpts, "analysis")) == null ? void 0 : _a.renderContent;
  }
});

export { Analyses as default };
//# sourceMappingURL=index.mjs.map
