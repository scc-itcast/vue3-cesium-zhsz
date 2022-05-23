'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class EarthGravityModel1996 {
  constructor(gridFileUrl) {
    this.gridFileUrl = gridFileUrl;
    this.data = void 0;
    this.minimumHeight = -106.99;
    this.maximumHeight = 85.39;
  }
  isSupported() {
    return typeof Int16Array !== "undefined" && typeof Uint8Array !== "undefined";
  }
  getHeight(longitude, latitude) {
    return getHeightData(this).then(function(data) {
      return getHeightFromData(data, longitude, latitude);
    });
  }
  getHeights(cartographicArray) {
    return getHeightData(this).then(function(data) {
      for (let i = 0; i < cartographicArray.length; ++i) {
        const cartographic = cartographicArray[i];
        cartographic.height = getHeightFromData(data, cartographic.longitude, cartographic.latitude);
      }
      return cartographicArray;
    });
  }
}
function getHeightData(model) {
  const { defined, when } = Cesium;
  if (!defined(model.data)) {
    model.data = loadArrayBuffer(model.gridFileUrl);
  }
  return when(model.data, function(data) {
    if (!(model.data instanceof Int16Array)) {
      const byteView = new Uint8Array(data);
      for (let k = 0; k < byteView.length; k += 2) {
        const tmp = byteView[k];
        byteView[k] = byteView[k + 1];
        byteView[k + 1] = tmp;
      }
      model.data = new Int16Array(data);
    }
    return model.data;
  });
}
function getHeightFromData(data, longitude, latitude) {
  const { Math: CesiumMath } = Cesium;
  let recordIndex = 720 * (CesiumMath.PI_OVER_TWO - latitude) / Math.PI;
  if (recordIndex < 0) {
    recordIndex = 0;
  } else if (recordIndex > 720) {
    recordIndex = 720;
  }
  longitude = CesiumMath.zeroToTwoPi(longitude);
  let heightIndex = 1440 * longitude / CesiumMath.TWO_PI;
  if (heightIndex < 0) {
    heightIndex = 0;
  } else if (heightIndex > 1440) {
    heightIndex = 1440;
  }
  const i = heightIndex | 0;
  const j = recordIndex | 0;
  const xMinusX1 = heightIndex - i;
  const yMinusY1 = recordIndex - j;
  const x2MinusX = 1 - xMinusX1;
  const y2MinusY = 1 - yMinusY1;
  const f11 = getHeightValue(data, j, i);
  const f21 = getHeightValue(data, j, i + 1);
  const f12 = getHeightValue(data, j + 1, i);
  const f22 = getHeightValue(data, j + 1, i + 1);
  return (f11 * x2MinusX * y2MinusY + f21 * xMinusX1 * y2MinusY + f12 * x2MinusX * yMinusY1 + f22 * xMinusX1 * yMinusY1) / 100;
}
function getHeightValue(data, recordIndex, heightIndex) {
  if (recordIndex > 720) {
    recordIndex = 720;
  } else if (recordIndex < 0) {
    recordIndex = 0;
  }
  if (heightIndex > 1439) {
    heightIndex -= 1440;
  } else if (heightIndex < 0) {
    heightIndex += 1440;
  }
  return data[recordIndex * 1440 + heightIndex];
}
function loadArrayBuffer(urlOrResource) {
  const { Resource } = Cesium;
  const resource = Resource.createIfNeeded(urlOrResource);
  return resource.fetchArrayBuffer();
}

exports["default"] = EarthGravityModel1996;
//# sourceMappingURL=EarthGravityModel1996.js.map
