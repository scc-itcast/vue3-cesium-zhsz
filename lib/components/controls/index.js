'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./compass/index.js');
var index$a = require('./zoom-control/index.js');
var index$6 = require('./print/index.js');
var index$3 = require('./my-location/index.js');
var index$8 = require('./status-bar/index.js');
var index$2 = require('./distance-legend/index.js');
var index$4 = require('./navigation/index.js');
var compassSm = require('./navigation-sm/compass-sm.js');
var zoomControlSm = require('./navigation-sm/zoom-control-sm.js');
var index$5 = require('./navigation-sm/index.js');
var index$9 = require('./vc-overview-map/index.js');
var index$7 = require('./selection-indicator/index.js');

const components = [
  index$1["default"],
  index$a["default"],
  index$6["default"],
  index$3["default"],
  index$8["default"],
  index$2["default"],
  index$4["default"],
  compassSm["default"],
  zoomControlSm["default"],
  index$5["default"],
  index$9["default"],
  index$7["default"]
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
const VcCompass = index$1["default"];
const VcZoomControl = index$a["default"];
const VcPrint = index$6["default"];
const VcMyLocation = index$3["default"];
const VcStatusBar = index$8["default"];
const VcDistanceLegend = index$2["default"];
const VcNavigation = index$4["default"];
const VcCompassSm = compassSm["default"];
const VcZoomControlSm = zoomControlSm["default"];
const VcNavigationSm = index$5["default"];
const VcOverviewMap = index$9["default"];
const VcSelectionIndicator = index$7["default"];

exports.compassProps = index$1.compassProps;
exports.zoomControlProps = index$a.zoomControlProps;
exports.printProps = index$6.printProps;
exports.myLocationProps = index$3.myLocationProps;
exports.statusBarProps = index$8.statusBarProps;
exports.distanceLegendProps = index$2.distanceLegendProps;
exports.navigationProps = index$4.navigationProps;
exports.compassSmProps = compassSm.compassSmProps;
exports.zoomControlSmProps = zoomControlSm.zoomControlSmProps;
exports.navigationSmProps = index$5.navigationSmProps;
exports.overviewProps = index$9.overviewProps;
exports.selectionIndicatorProps = index$7.selectionIndicatorProps;
exports.VcCompass = VcCompass;
exports.VcCompassSm = VcCompassSm;
exports.VcDistanceLegend = VcDistanceLegend;
exports.VcMyLocation = VcMyLocation;
exports.VcNavigation = VcNavigation;
exports.VcNavigationSm = VcNavigationSm;
exports.VcOverviewMap = VcOverviewMap;
exports.VcPrint = VcPrint;
exports.VcSelectionIndicator = VcSelectionIndicator;
exports.VcStatusBar = VcStatusBar;
exports.VcZoomControl = VcZoomControl;
exports.VcZoomControlSm = VcZoomControlSm;
exports["default"] = index;
//# sourceMappingURL=index.js.map
