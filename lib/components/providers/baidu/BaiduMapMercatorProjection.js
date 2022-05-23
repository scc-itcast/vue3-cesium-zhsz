'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Point = require('./Point.js');
var Pixel = require('./Pixel.js');

const _BaiduMapMercatorProjection = class {
  lngLatToMercator(point, curCity) {
    return _BaiduMapMercatorProjection.convertLL2MC(point);
  }
  lngLatToPoint(point) {
    const mercator = _BaiduMapMercatorProjection.convertLL2MC(point);
    return new Pixel["default"](mercator.lng, mercator.lat);
  }
  mercatorToLngLat(point, curCity) {
    return _BaiduMapMercatorProjection.convertMC2LL(point);
  }
  pointToLngLat(point) {
    const mercator = new Point["default"](point.x, point.y);
    return _BaiduMapMercatorProjection.convertMC2LL(mercator);
  }
  pointToPixel(point, zoom, mapCenter, mapSize, curCity) {
    if (!point) {
      return;
    }
    point = this.lngLatToMercator(point, curCity);
    mapCenter = this.lngLatToMercator(mapCenter);
    const zoomUnits = this.getZoomUnits(zoom);
    const x = Math.round((point.lng - mapCenter.lng) / zoomUnits + mapSize.width / 2);
    const y = Math.round((mapCenter.lat - point.lat) / zoomUnits + mapSize.height / 2);
    return new Pixel["default"](x, y);
  }
  pixelToPoint(pixel, zoom, mapCenter, mapSize, curCity) {
    if (!pixel) {
      return;
    }
    const zoomUnits = this.getZoomUnits(zoom);
    const lng = mapCenter.lng + zoomUnits * (pixel.x - mapSize.width / 2);
    const lat = mapCenter.lat - zoomUnits * (pixel.y - mapSize.height / 2);
    const point = new Point["default"](lng, lat);
    return this.mercatorToLngLat(point, curCity);
  }
  getZoomUnits(zoom) {
    return Math.pow(2, 18 - zoom);
  }
};
let BaiduMapMercatorProjection = _BaiduMapMercatorProjection;
BaiduMapMercatorProjection.EARTHRADIUS = 637099681e-2;
BaiduMapMercatorProjection.MCBAND = [1289059486e-2, 836237787e-2, 5591021, 348198983e-2, 167804312e-2, 0];
BaiduMapMercatorProjection.LLBAND = [75, 60, 45, 30, 15, 0];
BaiduMapMercatorProjection.MC2LL = [
  [
    1410526172116255e-23,
    898305509648872e-20,
    -1.9939833816331,
    200.9824383106796,
    -187.2403703815547,
    91.6087516669843,
    -23.38765649603339,
    2.57121317296198,
    -0.03801003308653,
    173379812e-1
  ],
  [
    -7435856389565537e-24,
    8983055097726239e-21,
    -0.78625201886289,
    96.32687599759846,
    -1.85204757529826,
    -59.36935905485877,
    47.40033549296737,
    -16.50741931063887,
    2.28786674699375,
    1026014486e-2
  ],
  [
    -3030883460898826e-23,
    898305509983578e-20,
    0.30071316287616,
    59.74293618442277,
    7.357984074871,
    -25.38371002664745,
    13.45380521110908,
    -3.29883767235584,
    0.32710905363475,
    685681737e-2
  ],
  [
    -1981981304930552e-23,
    8983055099779535e-21,
    0.03278182852591,
    40.31678527705744,
    0.65659298677277,
    -4.44255534477492,
    0.85341911805263,
    0.12923347998204,
    -0.04625736007561,
    448277706e-2
  ],
  [
    309191371068437e-23,
    8983055096812155e-21,
    6995724062e-14,
    23.10934304144901,
    -23663490511e-14,
    -0.6321817810242,
    -0.00663494467273,
    0.03430082397953,
    -0.00466043876332,
    25551644e-1
  ],
  [
    2890871144776878e-24,
    8983055095805407e-21,
    -3068298e-14,
    7.47137025468032,
    -353937994e-14,
    -0.02145144861037,
    -1234426596e-14,
    10322952773e-14,
    -323890364e-14,
    826088.5
  ]
];
BaiduMapMercatorProjection.LL2MC = [
  [
    -0.0015702102444,
    111320.7020616939,
    1704480524535203,
    -10338987376042340,
    26112667856603880,
    -35149669176653700,
    26595700718403920,
    -10725012454188240,
    1800819912950474,
    82.5
  ],
  [
    8277824516172526e-19,
    111320.7020463578,
    6477955746671607e-7,
    -4082003173641316e-6,
    1077490566351142e-5,
    -1517187553151559e-5,
    1205306533862167e-5,
    -5124939663577472e-6,
    9133119359512032e-7,
    67.5
  ],
  [
    0.00337398766765,
    111320.7020202162,
    4481351045890365e-9,
    -2339375119931662e-8,
    7968221547186455e-8,
    -1159649932797253e-7,
    9723671115602145e-8,
    -4366194633752821e-8,
    8477230501135234e-9,
    52.5
  ],
  [
    0.00220636496208,
    111320.7020209128,
    51751.86112841131,
    3796837749470245e-9,
    992013.7397791013,
    -122195221711287e-8,
    1340652697009075e-9,
    -620943.6990984312,
    144416.9293806241,
    37.5
  ],
  [
    -3441963504368392e-19,
    111320.7020576856,
    278.2353980772752,
    2485758690035394e-9,
    6070.750963243378,
    54821.18345352118,
    9540.606633304236,
    -2710.55326746645,
    1405.483844121726,
    22.5
  ],
  [
    -3218135878613132e-19,
    111320.7020701615,
    0.00369383431289,
    823725.6402795718,
    0.46104986909093,
    2351.343141331292,
    1.58060784298199,
    8.77738589078284,
    0.37238884252424,
    7.45
  ]
];
BaiduMapMercatorProjection.getDistanceByMC = function(point1, point2) {
  if (!point1 || !point2)
    return 0;
  point1 = _BaiduMapMercatorProjection.convertMC2LL(point1);
  if (!point1)
    return 0;
  const x1 = _BaiduMapMercatorProjection.toRadians(point1.lng);
  const y1 = _BaiduMapMercatorProjection.toRadians(point1.lat);
  point2 = _BaiduMapMercatorProjection.convertMC2LL(point2);
  if (!point2)
    return 0;
  const x2 = _BaiduMapMercatorProjection.toRadians(point2.lng);
  const y2 = _BaiduMapMercatorProjection.toRadians(point2.lat);
  return _BaiduMapMercatorProjection.getDistance(x1, x2, y1, y2);
};
BaiduMapMercatorProjection.getDistanceByLL = function(point1, point2) {
  if (!point1 || !point2)
    return 0;
  point1.lng = _BaiduMapMercatorProjection.getLoop(point1.lng, -180, 180);
  point1.lat = _BaiduMapMercatorProjection.getRange(point1.lat, -74, 74);
  point2.lng = _BaiduMapMercatorProjection.getLoop(point2.lng, -180, 180);
  point2.lat = _BaiduMapMercatorProjection.getRange(point2.lat, -74, 74);
  const x1 = _BaiduMapMercatorProjection.toRadians(point1.lng);
  const y1 = _BaiduMapMercatorProjection.toRadians(point1.lat);
  const x2 = _BaiduMapMercatorProjection.toRadians(point2.lng);
  const y2 = _BaiduMapMercatorProjection.toRadians(point2.lat);
  return _BaiduMapMercatorProjection.getDistance(x1, x2, y1, y2);
};
BaiduMapMercatorProjection.convertMC2LL = function(point) {
  let factor;
  const temp = new Point["default"](Math.abs(point.lng), Math.abs(point.lat));
  for (let i = 0; i < _BaiduMapMercatorProjection.MCBAND.length; i++) {
    if (temp.lat >= _BaiduMapMercatorProjection.MCBAND[i]) {
      factor = _BaiduMapMercatorProjection.MC2LL[i];
      break;
    }
  }
  const lnglat = _BaiduMapMercatorProjection.convertor(point, factor);
  return new Point["default"](lnglat == null ? void 0 : lnglat.lng.toFixed(6), lnglat == null ? void 0 : lnglat.lat.toFixed(6));
};
BaiduMapMercatorProjection.convertLL2MC = function(point) {
  let factor;
  point.lng = _BaiduMapMercatorProjection.getLoop(point.lng, -180, 180);
  point.lat = _BaiduMapMercatorProjection.getRange(point.lat, -74, 74);
  const temp = new Point["default"](point.lng, point.lat);
  for (let i = 0; i < _BaiduMapMercatorProjection.LLBAND.length; i++) {
    if (temp.lat >= _BaiduMapMercatorProjection.LLBAND[i]) {
      factor = _BaiduMapMercatorProjection.LL2MC[i];
      break;
    }
  }
  if (!factor) {
    for (let i = _BaiduMapMercatorProjection.LLBAND.length - 1; i >= 0; i--) {
      if (temp.lat <= -_BaiduMapMercatorProjection.LLBAND[i]) {
        factor = _BaiduMapMercatorProjection.LL2MC[i];
        break;
      }
    }
  }
  const mc = _BaiduMapMercatorProjection.convertor(point, factor);
  return new Point["default"](mc == null ? void 0 : mc.lng.toFixed(2), mc == null ? void 0 : mc.lat.toFixed(2));
};
BaiduMapMercatorProjection.convertor = function(fromPoint, factor) {
  if (!fromPoint || !factor) {
    return;
  }
  let x = factor[0] + factor[1] * Math.abs(fromPoint.lng);
  const temp = Math.abs(fromPoint.lat) / factor[9];
  let y = factor[2] + factor[3] * temp + factor[4] * temp * temp + factor[5] * temp * temp * temp + factor[6] * temp * temp * temp * temp + factor[7] * temp * temp * temp * temp * temp + factor[8] * temp * temp * temp * temp * temp * temp;
  x *= fromPoint.lng < 0 ? -1 : 1;
  y *= fromPoint.lat < 0 ? -1 : 1;
  return new Point["default"](x, y);
};
BaiduMapMercatorProjection.getDistance = function(x1, x2, y1, y2) {
  return _BaiduMapMercatorProjection.EARTHRADIUS * Math.acos(Math.sin(y1) * Math.sin(y2) + Math.cos(y1) * Math.cos(y2) * Math.cos(x2 - x1));
};
BaiduMapMercatorProjection.toRadians = function(angdeg) {
  return Math.PI * angdeg / 180;
};
BaiduMapMercatorProjection.toDegrees = function(angrad) {
  return 180 * angrad / Math.PI;
};
BaiduMapMercatorProjection.getRange = function(v, a, b) {
  if (a != null) {
    v = Math.max(v, a);
  }
  if (b != null) {
    v = Math.min(v, b);
  }
  return v;
};
BaiduMapMercatorProjection.getLoop = function(v, a, b) {
  while (v > b) {
    v -= b - a;
  }
  while (v < a) {
    v += b - a;
  }
  return v;
};

exports["default"] = BaiduMapMercatorProjection;
//# sourceMappingURL=BaiduMapMercatorProjection.js.map
