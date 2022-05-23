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

export { PickedFeatures as default };
//# sourceMappingURL=PickedFeatures.mjs.map
