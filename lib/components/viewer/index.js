'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./src/index.js');
var useViewer = require('./src/useViewer.js');

index["default"].install = (app, opts) => {
  app.component(index["default"].name, index["default"]);
};
const _Viewer = index["default"];
const VcViewer = _Viewer;

exports.viewerProps = useViewer.viewerProps;
exports.VcViewer = VcViewer;
exports["default"] = _Viewer;
//# sourceMappingURL=index.js.map
