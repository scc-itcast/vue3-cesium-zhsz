class Feature {
  constructor(options) {
    this.id = options.id || Cesium.createGuid();
  }
  static getBoundingSphere(cesiumObject, viewer) {
    var _a, _b, _c, _d;
    const { Primitive, ClassificationPrimitive, GroundPolylinePrimitive, GroundPrimitive, Polyline } = Cesium;
    let boundingSphere;
    if (cesiumObject instanceof ClassificationPrimitive || cesiumObject instanceof GroundPolylinePrimitive) {
      boundingSphere = (_b = (_a = cesiumObject._primitive) == null ? void 0 : _a._boundingSphereWC) == null ? void 0 : _b[0];
    } else if (cesiumObject instanceof Primitive) {
      boundingSphere = (_c = cesiumObject._boundingSphereWC) == null ? void 0 : _c[0];
    } else if (cesiumObject instanceof GroundPrimitive) {
      boundingSphere = (_d = cesiumObject._boundingVolumes) == null ? void 0 : _d[0];
    } else if (cesiumObject instanceof Polyline) {
      boundingSphere = cesiumObject._boundingVolumeWC;
    } else if (cesiumObject instanceof Cesium.Entity) {
      boundingSphere = new Cesium.BoundingSphere();
      viewer.dataSourceDisplay.getBoundingSphere(cesiumObject, true, boundingSphere);
    }
    return boundingSphere;
  }
  static fromPickedFeature(cesiumObject, pickedFeature, viewer, screenPosition) {
    var _a;
    const feature = new Feature({ id: cesiumObject.id });
    if (cesiumObject.position) {
      feature.position = cesiumObject.position;
    } else if (cesiumObject instanceof Cesium.Model) {
      feature.position = Cesium.Matrix4.getTranslation(cesiumObject.modelMatrix, new Cesium.Cartesian3());
    } else if (cesiumObject instanceof Cesium.Cesium3DTileset) {
      feature.position = Cesium.Matrix4.getTranslation(pickedFeature.content._contentModelMatrix, new Cesium.Cartesian3());
    } else {
      feature.position = (_a = Feature.getBoundingSphere(cesiumObject, viewer)) == null ? void 0 : _a.center;
    }
    feature.cesiumObject = cesiumObject;
    feature.pickedFeature = pickedFeature;
    feature.windowPosition = screenPosition;
    return feature;
  }
  static fromImageryLayerFeature(imageryFeature, viewer) {
    const feature = new Feature({
      id: imageryFeature.name
    });
    feature.name = imageryFeature.name;
    feature.description = imageryFeature.description;
    feature.properties = imageryFeature.properties;
    feature.data = imageryFeature.data;
    feature.imageryLayer = imageryFeature.imageryLayer;
    feature.position = viewer.scene.globe.ellipsoid.cartographicToCartesian(imageryFeature.position);
    feature.coords = imageryFeature.coords;
    return feature;
  }
}

export { Feature as default };
//# sourceMappingURL=Feature.mjs.map
