const x_PI = 3.141592653589793 * 3e3 / 180;
const PI = 3.141592653589793;
const a = 6378245;
const ee = 0.006693421622965943;
const bd09togcj02 = function bd09togcj022(bd_lng, bd_lat) {
  var bd_lng = +bd_lng;
  var bd_lat = +bd_lat;
  const x = bd_lng - 65e-4;
  const y = bd_lat - 6e-3;
  const z = Math.sqrt(x * x + y * y) - 2e-5 * Math.sin(y * x_PI);
  const theta = Math.atan2(y, x) - 3e-6 * Math.cos(x * x_PI);
  const gg_lng = z * Math.cos(theta);
  const gg_lat = z * Math.sin(theta);
  return [gg_lng, gg_lat];
};
const gcj02tobd09 = function gcj02tobd092(lng, lat) {
  var lat = +lat;
  var lng = +lng;
  const z = Math.sqrt(lng * lng + lat * lat) + 2e-5 * Math.sin(lat * x_PI);
  const theta = Math.atan2(lat, lng) + 3e-6 * Math.cos(lng * x_PI);
  const bd_lng = z * Math.cos(theta) + 65e-4;
  const bd_lat = z * Math.sin(theta) + 6e-3;
  return [bd_lng, bd_lat];
};
const wgs84togcj02 = function wgs84togcj022(lng, lat) {
  var lat = +lat;
  var lng = +lng;
  if (out_of_china(lng, lat)) {
    return [lng, lat];
  } else {
    let dlat = transformlat(lng - 105, lat - 35);
    let dlng = transformlng(lng - 105, lat - 35);
    const radlat = lat / 180 * PI;
    let magic = Math.sin(radlat);
    magic = 1 - ee * magic * magic;
    const sqrtmagic = Math.sqrt(magic);
    dlat = dlat * 180 / (a * (1 - ee) / (magic * sqrtmagic) * PI);
    dlng = dlng * 180 / (a / sqrtmagic * Math.cos(radlat) * PI);
    const mglat = lat + dlat;
    const mglng = lng + dlng;
    return [mglng, mglat];
  }
};
const gcj02towgs84 = function gcj02towgs842(lng, lat) {
  var lat = +lat;
  var lng = +lng;
  if (out_of_china(lng, lat)) {
    return [lng, lat];
  } else {
    let dlat = transformlat(lng - 105, lat - 35);
    let dlng = transformlng(lng - 105, lat - 35);
    const radlat = lat / 180 * PI;
    let magic = Math.sin(radlat);
    magic = 1 - ee * magic * magic;
    const sqrtmagic = Math.sqrt(magic);
    dlat = dlat * 180 / (a * (1 - ee) / (magic * sqrtmagic) * PI);
    dlng = dlng * 180 / (a / sqrtmagic * Math.cos(radlat) * PI);
    const mglat = lat + dlat;
    const mglng = lng + dlng;
    return [lng * 2 - mglng, lat * 2 - mglat];
  }
};
var transformlat = function transformlat2(lng, lat) {
  var lat = +lat;
  var lng = +lng;
  let ret = -100 + 2 * lng + 3 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
  ret += (20 * Math.sin(6 * lng * PI) + 20 * Math.sin(2 * lng * PI)) * 2 / 3;
  ret += (20 * Math.sin(lat * PI) + 40 * Math.sin(lat / 3 * PI)) * 2 / 3;
  ret += (160 * Math.sin(lat / 12 * PI) + 320 * Math.sin(lat * PI / 30)) * 2 / 3;
  return ret;
};
var transformlng = function transformlng2(lng, lat) {
  var lat = +lat;
  var lng = +lng;
  let ret = 300 + lng + 2 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
  ret += (20 * Math.sin(6 * lng * PI) + 20 * Math.sin(2 * lng * PI)) * 2 / 3;
  ret += (20 * Math.sin(lng * PI) + 40 * Math.sin(lng / 3 * PI)) * 2 / 3;
  ret += (150 * Math.sin(lng / 12 * PI) + 300 * Math.sin(lng / 30 * PI)) * 2 / 3;
  return ret;
};
var out_of_china = function out_of_china2(lng, lat) {
  var lat = +lat;
  var lng = +lng;
  return !(lng > 73.66 && lng < 135.05 && lat > 3.86 && lat < 53.55);
};

export { bd09togcj02, gcj02tobd09, gcj02towgs84, wgs84togcj02 };
//# sourceMappingURL=coordtransform.mjs.map
