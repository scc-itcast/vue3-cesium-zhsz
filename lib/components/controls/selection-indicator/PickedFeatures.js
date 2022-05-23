'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class PickedFeatures {
  constructor() {
    const { knockout } = Cesium;
    this.allFeaturesAvailablePromise = void 0;
    this.isLoading = true;
    this.pickPosition = void 0;
    this.features = [];
    this.error = void 0;
    this.providerCoords = void 0;
    knockout.track(this, ["isLoading", "features", "error"]);
  }
}

exports["default"] = PickedFeatures;
//# sourceMappingURL=PickedFeatures.js.map
