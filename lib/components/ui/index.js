'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$2 = require('./btn/index.js');
var index$3 = require('./icon/index.js');
require('./spinner/index.js');
var index$5 = require('./tooltip/index.js');
var index$1 = require('./ajax-bar/index.js');
var index$4 = require('./skeleton/index.js');
var fab = require('./fab/fab.js');
var fabAction = require('./fab/fab-action.js');
var spinnerBall = require('./spinner/spinner-ball.js');
var spinnerBars = require('./spinner/spinner-bars.js');
var spinnerDots = require('./spinner/spinner-dots.js');
var spinnerGears = require('./spinner/spinner-gears.js');
var spinnerHourglass = require('./spinner/spinner-hourglass.js');
var spinnerIos = require('./spinner/spinner-ios.js');
var spinnerOrbit = require('./spinner/spinner-orbit.js');
var spinnerOval = require('./spinner/spinner-oval.js');
var spinnerPuff = require('./spinner/spinner-puff.js');
var spinnerRings = require('./spinner/spinner-rings.js');
var spinnerTail = require('./spinner/spinner-tail.js');
var spinner = require('./spinner/spinner.js');

const components = [
  index$2["default"],
  index$3["default"],
  spinnerBall["default"],
  spinnerBars["default"],
  spinnerDots["default"],
  spinnerGears["default"],
  spinnerHourglass["default"],
  spinnerIos["default"],
  spinnerOrbit["default"],
  spinnerOval["default"],
  spinnerPuff["default"],
  spinnerRings["default"],
  spinnerTail["default"],
  spinner["default"],
  index$5["default"],
  index$1["default"],
  index$4["default"],
  fab["default"],
  fabAction["default"]
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
const VcBtn = index$2["default"];
const VcIcon = index$3["default"];
const VcSpinnerBall = spinnerBall["default"];
const VcSpinnerBars = spinnerBars["default"];
const VcSpinnerDots = spinnerDots["default"];
const VcSpinnerGears = spinnerGears["default"];
const VcSpinnerHourglass = spinnerHourglass["default"];
const VcSpinnerIos = spinnerIos["default"];
const VcSpinnerOrbit = spinnerOrbit["default"];
const VcSpinnerOval = spinnerOval["default"];
const VcSpinnerPuff = spinnerPuff["default"];
const VcSpinnerRings = spinnerRings["default"];
const VcSpinnerTail = spinnerTail["default"];
const VcSpinner = spinner["default"];
const VcTooltip = index$5["default"];
const VcAjaxBar = index$1["default"];
const VcSkeleton = index$4["default"];
const VcFab = fab["default"];
const VcFabAction = fabAction["default"];

exports.btnProps = index$2.btnProps;
exports.iconProps = index$3.iconProps;
exports.tooltipProps = index$5.tooltipProps;
exports.ajaxBarProps = index$1.ajaxBarProps;
exports.skeletonAnimations = index$4.skeletonAnimations;
exports.skeletonProps = index$4.skeletonProps;
exports.skeletonTypes = index$4.skeletonTypes;
exports.fabProps = fab.fabProps;
exports.fabActionProps = fabAction.fabActionProps;
exports.SpinnerBall = spinnerBall["default"];
exports.SpinnerBars = spinnerBars["default"];
exports.SpinnerDots = spinnerDots["default"];
exports.SpinnerGears = spinnerGears["default"];
exports.SpinnerHourglass = spinnerHourglass["default"];
exports.SpinnerIos = spinnerIos["default"];
exports.SpinnerOrbit = spinnerOrbit["default"];
exports.SpinnerOval = spinnerOval["default"];
exports.SpinnerPuff = spinnerPuff["default"];
exports.SpinnerRings = spinnerRings["default"];
exports.SpinnerTail = spinnerTail["default"];
exports.Spinner = spinner["default"];
exports.VcAjaxBar = VcAjaxBar;
exports.VcBtn = VcBtn;
exports.VcFab = VcFab;
exports.VcFabAction = VcFabAction;
exports.VcIcon = VcIcon;
exports.VcSkeleton = VcSkeleton;
exports.VcSpinner = VcSpinner;
exports.VcSpinnerBall = VcSpinnerBall;
exports.VcSpinnerBars = VcSpinnerBars;
exports.VcSpinnerDots = VcSpinnerDots;
exports.VcSpinnerGears = VcSpinnerGears;
exports.VcSpinnerHourglass = VcSpinnerHourglass;
exports.VcSpinnerIos = VcSpinnerIos;
exports.VcSpinnerOrbit = VcSpinnerOrbit;
exports.VcSpinnerOval = VcSpinnerOval;
exports.VcSpinnerPuff = VcSpinnerPuff;
exports.VcSpinnerRings = VcSpinnerRings;
exports.VcSpinnerTail = VcSpinnerTail;
exports.VcTooltip = VcTooltip;
exports["default"] = index;
//# sourceMappingURL=index.js.map
