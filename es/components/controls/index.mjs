import Compass from './compass/index.mjs';
export { compassProps } from './compass/index.mjs';
import ZoomControl from './zoom-control/index.mjs';
export { zoomControlProps } from './zoom-control/index.mjs';
import Print from './print/index.mjs';
export { printProps } from './print/index.mjs';
import MyLocation from './my-location/index.mjs';
export { myLocationProps } from './my-location/index.mjs';
import StatusBar from './status-bar/index.mjs';
export { statusBarProps } from './status-bar/index.mjs';
import DistanceLegend from './distance-legend/index.mjs';
export { distanceLegendProps } from './distance-legend/index.mjs';
import Navigation from './navigation/index.mjs';
export { navigationProps } from './navigation/index.mjs';
import CompassSm from './navigation-sm/compass-sm.mjs';
export { compassSmProps } from './navigation-sm/compass-sm.mjs';
import ZoomControlSm from './navigation-sm/zoom-control-sm.mjs';
export { zoomControlSmProps } from './navigation-sm/zoom-control-sm.mjs';
import NavigationSm from './navigation-sm/index.mjs';
export { navigationSmProps } from './navigation-sm/index.mjs';
import OverviewMap from './vc-overview-map/index.mjs';
export { overviewProps } from './vc-overview-map/index.mjs';
import SelectionIndicator from './selection-indicator/index.mjs';
export { selectionIndicatorProps } from './selection-indicator/index.mjs';

const components = [
  Compass,
  ZoomControl,
  Print,
  MyLocation,
  StatusBar,
  DistanceLegend,
  Navigation,
  CompassSm,
  ZoomControlSm,
  NavigationSm,
  OverviewMap,
  SelectionIndicator
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
const VcCompass = Compass;
const VcZoomControl = ZoomControl;
const VcPrint = Print;
const VcMyLocation = MyLocation;
const VcStatusBar = StatusBar;
const VcDistanceLegend = DistanceLegend;
const VcNavigation = Navigation;
const VcCompassSm = CompassSm;
const VcZoomControlSm = ZoomControlSm;
const VcNavigationSm = NavigationSm;
const VcOverviewMap = OverviewMap;
const VcSelectionIndicator = SelectionIndicator;

export { VcCompass, VcCompassSm, VcDistanceLegend, VcMyLocation, VcNavigation, VcNavigationSm, VcOverviewMap, VcPrint, VcSelectionIndicator, VcStatusBar, VcZoomControl, VcZoomControlSm, index as default };
//# sourceMappingURL=index.mjs.map
