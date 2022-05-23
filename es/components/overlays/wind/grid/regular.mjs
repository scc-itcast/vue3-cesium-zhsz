import { RAD } from './consts.mjs';
import { decimalize, floorMod } from './math.mjs';

function regularGrid(\u03BBaxis, \u03C6axis) {
  const nx = Math.floor(\u03BBaxis.size);
  const ny = Math.floor(\u03C6axis.size);
  const np = nx * ny;
  const \u0394\u03BB = decimalize(\u03BBaxis.delta);
  const \u0394\u03C6 = decimalize(\u03C6axis.delta);
  const \u03BB0 = decimalize(\u03BBaxis.start);
  const \u03C60 = decimalize(\u03C6axis.start);
  const \u03BB1 = \u03BB0 + \u0394\u03BB * (nx - 1);
  const \u03C61 = \u03C60 + \u0394\u03C6 * (ny - 1);
  const \u03BBlow = (\u03BB0 - \u0394\u03BB / 2) * RAD;
  const \u03BBhigh = (\u03BB1 + \u0394\u03BB / 2) * RAD;
  const \u03BBsize = \u03BBhigh - \u03BBlow;
  const \u03C6low = (\u03C60 - \u0394\u03C6 / 2) * RAD;
  const \u03C6high = (\u03C61 + \u0394\u03C6 / 2) * RAD;
  const \u03C6size = \u03C6high - \u03C6low;
  const low = [\u03BBlow, \u03C6low];
  const size = [\u03BBsize, \u03C6size];
  const isCylinder = Math.floor(nx * \u0394\u03BB) >= 360;
  function dimensions() {
    return {
      width: nx,
      height: ny
    };
  }
  function isCylindrical() {
    return isCylinder;
  }
  function forEach(cb, start) {
    for (let i = start || 0; i < np; i++) {
      const x = i % nx;
      const y = Math.floor(i / nx);
      const \u03BB = \u03BB0 + x * \u0394\u03BB;
      const \u03C6 = \u03C60 + y * \u0394\u03C6;
      if (cb(\u03BB, \u03C6, i)) {
        return i + 1;
      }
    }
    return NaN;
  }
  function closest(\u03BB, \u03C6) {
    if (\u03BB === \u03BB && \u03C6 === \u03C6) {
      const x = floorMod(\u03BB - \u03BB0, 360) / \u0394\u03BB;
      const y = (\u03C6 - \u03C60) / \u0394\u03C6;
      const rx = Math.round(x);
      const ry = Math.round(y);
      if (0 <= ry && ry < ny && 0 <= rx && (rx < nx || rx === nx && isCylinder)) {
        const i = ry * nx + rx;
        return rx === nx ? i - nx : i;
      }
    }
    return NaN;
  }
  function closest4(\u03BB, \u03C6) {
    if (\u03BB === \u03BB && \u03C6 === \u03C6) {
      const x = floorMod(\u03BB - \u03BB0, 360) / \u0394\u03BB;
      const y = (\u03C6 - \u03C60) / \u0394\u03C6;
      const fx = Math.floor(x);
      const fy = Math.floor(y);
      const cx = fx + 1;
      const cy = fy + 1;
      const \u0394x = x - fx;
      const \u0394y = y - fy;
      if (0 <= fy && cy < ny && 0 <= fx && (cx < nx || cx === nx && isCylinder)) {
        const i00 = fy * nx + fx;
        let i10 = i00 + 1;
        const i01 = i00 + nx;
        let i11 = i01 + 1;
        if (cx === nx) {
          i10 -= nx;
          i11 -= nx;
        }
        return [i00, i10, i01, i11, \u0394x, \u0394y];
      }
    }
    return [NaN, NaN, NaN, NaN, NaN, NaN];
  }
  return {
    dimensions,
    isCylindrical,
    forEach,
    closest,
    closest4
  };
}

export { regularGrid };
//# sourceMappingURL=regular.mjs.map
