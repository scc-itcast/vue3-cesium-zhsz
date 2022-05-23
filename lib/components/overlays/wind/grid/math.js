'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('../../../../utils/util.js');
var consts = require('./consts.js');

function floorMod(v, n) {
  const f = v - n * Math.floor(v / n);
  return f === n ? 0 : f;
}
function rint(v) {
  const TWOP52 = 4503599627370496;
  let x = Math.abs(v);
  if (x < TWOP52) {
    x += TWOP52;
    x -= TWOP52;
  }
  return Math.sign(v) * x;
}
function rintToMultiple(v, m) {
  return rint(v / m) * m;
}
function clamp(v, low, high) {
  return Math.max(low, Math.min(v, high));
}
function rescale(v, lowA, highA, lowB, highB) {
  return (v - lowA) / (highA - lowA) * (highB - lowB) + lowB;
}
function length(vec2) {
  const [x, y] = vec2;
  return Math.sqrt(x * x + y * y);
}
function distance(a, b) {
  return length([b[0] - a[0], b[1] - a[1]]);
}
function toCardinalDegrees(vec2) {
  const deg = Math.atan2(vec2[0], vec2[1]) * consts.DEG;
  return (deg + 360) % 360;
}
function indicatrix(project, \u03BB, \u03C6, x, y) {
  const H = 1e-7;
  const H\u03C6 = \u03C6 < 0 ? H : -H;
  const p\u03BB = project(\u03BB + H, \u03C6);
  const p\u03C6 = project(\u03BB, \u03C6 + H\u03C6);
  const k = Math.cos(\u03C6 * consts.RAD);
  const Hk = H * k;
  return [
    (p\u03BB[0] - x) / Hk,
    (p\u03BB[1] - y) / Hk,
    (p\u03C6[0] - x) / H\u03C6,
    (p\u03C6[1] - y) / H\u03C6
  ];
}
function decimalize(x) {
  if (typeof x === "string" && x.indexOf("/") >= 0) {
    x = x.split("/");
  }
  return util.isArrayLike(x) && x.length === 2 ? x[0] / x[1] : +x;
}
function mulvec2(vec, c) {
  return [vec[0] * c, vec[1] * c];
}

exports.clamp = clamp;
exports.decimalize = decimalize;
exports.distance = distance;
exports.floorMod = floorMod;
exports.indicatrix = indicatrix;
exports.length = length;
exports.mulvec2 = mulvec2;
exports.rescale = rescale;
exports.rint = rint;
exports.rintToMultiple = rintToMultiple;
exports.toCardinalDegrees = toCardinalDegrees;
//# sourceMappingURL=math.js.map
