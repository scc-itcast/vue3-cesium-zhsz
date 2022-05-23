import Btn from './btn/index.mjs';
export { btnProps } from './btn/index.mjs';
import Icon from './icon/index.mjs';
export { iconProps } from './icon/index.mjs';
import './spinner/index.mjs';
import Tooltip from './tooltip/index.mjs';
export { tooltipProps } from './tooltip/index.mjs';
import AjaxBar from './ajax-bar/index.mjs';
export { ajaxBarProps } from './ajax-bar/index.mjs';
import Skeleton from './skeleton/index.mjs';
export { skeletonAnimations, skeletonProps, skeletonTypes } from './skeleton/index.mjs';
import Fab from './fab/fab.mjs';
export { fabProps } from './fab/fab.mjs';
import FabAction from './fab/fab-action.mjs';
export { fabActionProps } from './fab/fab-action.mjs';
import SpinnerBall from './spinner/spinner-ball.mjs';
export { default as SpinnerBall } from './spinner/spinner-ball.mjs';
import SpinnerBars from './spinner/spinner-bars.mjs';
export { default as SpinnerBars } from './spinner/spinner-bars.mjs';
import SpinnerDots from './spinner/spinner-dots.mjs';
export { default as SpinnerDots } from './spinner/spinner-dots.mjs';
import SpinnerGears from './spinner/spinner-gears.mjs';
export { default as SpinnerGears } from './spinner/spinner-gears.mjs';
import SpinnerHourglass from './spinner/spinner-hourglass.mjs';
export { default as SpinnerHourglass } from './spinner/spinner-hourglass.mjs';
import SpinnerIos from './spinner/spinner-ios.mjs';
export { default as SpinnerIos } from './spinner/spinner-ios.mjs';
import SpinnerOrbit from './spinner/spinner-orbit.mjs';
export { default as SpinnerOrbit } from './spinner/spinner-orbit.mjs';
import SpinnerOval from './spinner/spinner-oval.mjs';
export { default as SpinnerOval } from './spinner/spinner-oval.mjs';
import SpinnerPuff from './spinner/spinner-puff.mjs';
export { default as SpinnerPuff } from './spinner/spinner-puff.mjs';
import SpinnerRings from './spinner/spinner-rings.mjs';
export { default as SpinnerRings } from './spinner/spinner-rings.mjs';
import SpinnerTail from './spinner/spinner-tail.mjs';
export { default as SpinnerTail } from './spinner/spinner-tail.mjs';
import Spinner from './spinner/spinner.mjs';
export { default as Spinner } from './spinner/spinner.mjs';

const components = [
  Btn,
  Icon,
  SpinnerBall,
  SpinnerBars,
  SpinnerDots,
  SpinnerGears,
  SpinnerHourglass,
  SpinnerIos,
  SpinnerOrbit,
  SpinnerOval,
  SpinnerPuff,
  SpinnerRings,
  SpinnerTail,
  Spinner,
  Tooltip,
  AjaxBar,
  Skeleton,
  Fab,
  FabAction
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
const VcBtn = Btn;
const VcIcon = Icon;
const VcSpinnerBall = SpinnerBall;
const VcSpinnerBars = SpinnerBars;
const VcSpinnerDots = SpinnerDots;
const VcSpinnerGears = SpinnerGears;
const VcSpinnerHourglass = SpinnerHourglass;
const VcSpinnerIos = SpinnerIos;
const VcSpinnerOrbit = SpinnerOrbit;
const VcSpinnerOval = SpinnerOval;
const VcSpinnerPuff = SpinnerPuff;
const VcSpinnerRings = SpinnerRings;
const VcSpinnerTail = SpinnerTail;
const VcSpinner = Spinner;
const VcTooltip = Tooltip;
const VcAjaxBar = AjaxBar;
const VcSkeleton = Skeleton;
const VcFab = Fab;
const VcFabAction = FabAction;

export { VcAjaxBar, VcBtn, VcFab, VcFabAction, VcIcon, VcSkeleton, VcSpinner, VcSpinnerBall, VcSpinnerBars, VcSpinnerDots, VcSpinnerGears, VcSpinnerHourglass, VcSpinnerIos, VcSpinnerOrbit, VcSpinnerOval, VcSpinnerPuff, VcSpinnerRings, VcSpinnerTail, VcTooltip, index as default };
//# sourceMappingURL=index.mjs.map
