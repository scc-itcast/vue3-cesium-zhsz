'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var props = require('../../../../composables/use-drawing/props.js');
var useDrawingSegment = require('../../../../composables/use-drawing/use-drawing-segment.js');
var fragmentShader = require('./fragmentShader.js');
var emits = require('../../../../utils/emits.js');

var VcAnalysisViewshed = vue.defineComponent({
  name: "VcAnalysisViewshed",
  props: {
    ...props.useDrawingActionProps,
    polylineOpts: Object,
    primitiveOpts: Object,
    ellipsoidOpts: Object
  },
  emits: emits.drawingEmit,
  setup(props, ctx) {
    return useDrawingSegment["default"](props, ctx, "VcAnalysisViewshed", fragmentShader["default"]);
  }
});

exports["default"] = VcAnalysisViewshed;
//# sourceMappingURL=index.js.map
