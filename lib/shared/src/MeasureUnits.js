'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('../../utils/util.js');

const DistanceUnits = Object.freeze({
  METERS: "METERS",
  CENTIMETERS: "CENTIMETERS",
  KILOMETERS: "KILOMETERS",
  FEET: "FEET",
  US_SURVEY_FEET: "US_SURVEY_FEET",
  INCHES: "INCHES",
  YARDS: "YARDS",
  MILES: "MILES"
});
const AreaUnits = Object.freeze({
  SQUARE_METERS: "SQUARE_METERS",
  SQUARE_CENTIMETERS: "SQUARE_CENTIMETERS",
  SQUARE_KILOMETERS: "SQUARE_KILOMETERS",
  SQUARE_FEET: "SQUARE_FEET",
  SQUARE_INCHES: "SQUARE_INCHES",
  SQUARE_YARDS: "SQUARE_YARDS",
  SQUARE_MILES: "SQUARE_MILES",
  ACRES: "ACRES",
  HECTARES: "HECTARES"
});
const VolumeUnits = Object.freeze({
  CUBIC_METERS: "CUBIC_METERS",
  CUBIC_CENTIMETERS: "CUBIC_CENTIMETERS",
  CUBIC_KILOMETERS: "CUBIC_KILOMETERS",
  CUBIC_FEET: "CUBIC_FEET",
  CUBIC_INCHES: "CUBIC_INCHES",
  CUBIC_YARDS: "CUBIC_YARDS",
  CUBIC_MILES: "CUBIC_MILES"
});
const AngleUnits = Object.freeze({
  DEGREES: "DEGREES",
  RADIANS: "RADIANS",
  DEGREES_MINUTES_SECONDS: "DEGREES_MINUTES_SECONDS",
  GRADE: "GRADE",
  RATIO: "RATIO"
});
const _MeasureUnits = class {
  constructor(options) {
    options = util.defaultValue(options, {});
    this.distanceUnits = util.defaultValue(options.distanceUnits, DistanceUnits.METERS);
    this.areaUnits = util.defaultValue(options.areaUnits, AreaUnits.SQUARE_METERS);
    this.volumeUnits = util.defaultValue(options.volumeUnits, VolumeUnits.CUBIC_METERS);
    this.angleUnits = util.defaultValue(options.angleUnits, AngleUnits.DEGREES);
    this.slopeUnits = util.defaultValue(options.slopeUnits, AngleUnits.DEGREES);
  }
  static distanceToString(distance, distanceUnits, locale, decimals) {
    distance = _MeasureUnits.convertDistance(distance, DistanceUnits.METERS, distanceUnits);
    return numberToFormattedString(distance, locale, decimals) + _MeasureUnits.getDistanceUnitSpacing(distanceUnits) + _MeasureUnits.getDistanceUnitSymbol(distanceUnits);
  }
  static areaToString(area, areaUnits, locale, decimals) {
    area = _MeasureUnits.convertArea(area, AreaUnits.SQUARE_METERS, areaUnits);
    return numberToFormattedString(area, locale, decimals) + _MeasureUnits.getAreaUnitSpacing(areaUnits) + _MeasureUnits.getAreaUnitSymbol(areaUnits);
  }
  static angleToString(angle, angleUnits, locale, decimals) {
    const { Math: CesiumMath } = Cesium;
    if (angleUnits === AngleUnits.DEGREES || angleUnits === AngleUnits.RADIANS || angleUnits === AngleUnits.GRADE) {
      angle = convertAngleFromRadians(angle, angleUnits);
      return numberToFormattedString(angle, locale, decimals) + _MeasureUnits.getAngleUnitSpacing(angleUnits) + _MeasureUnits.getAngleUnitSymbol(angleUnits);
    }
    if (angleUnits === AngleUnits.DEGREES_MINUTES_SECONDS) {
      const angleDegrees = CesiumMath.toDegrees(angle);
      const prefix = angleDegrees < 0 ? "-" : "";
      const degrees = Math.floor(angleDegrees);
      const minutes = 60 * (angleDegrees - degrees);
      const seconds = Math.floor(minutes);
      return prefix + degrees + "\xB0 " + seconds + "' " + numberToFormattedString(60 * (minutes - seconds), void 0, decimals) + '"';
    }
    if (angleUnits === AngleUnits.RATIO) {
    }
  }
  static volumeToString(volume, volumeUnits, locale, decimals) {
    volume = _MeasureUnits.convertArea(volume, VolumeUnits.CUBIC_METERS, volumeUnits);
    return numberToFormattedString(volume, locale, decimals) + _MeasureUnits.getVolumeUnitSpacing(volumeUnits) + _MeasureUnits.getVolumeUnitSymbol(volumeUnits);
  }
  static getDistanceUnitSpacing(distanceUnits) {
    return " ";
  }
  static getAreaUnitSpacing(distanceUnits) {
    return " ";
  }
  static getAngleUnitSpacing(angleUnits) {
    return angleUnits === AngleUnits.RADIANS ? " " : "";
  }
  static getVolumeUnitSpacing(distanceUnits) {
    return " ";
  }
  static getDistanceUnitSymbol(distanceUnits) {
    switch (distanceUnits) {
      case DistanceUnits.METERS:
        return "m";
      case DistanceUnits.CENTIMETERS:
        return "cm";
      case DistanceUnits.KILOMETERS:
        return "km";
      case DistanceUnits.FEET:
      case DistanceUnits.US_SURVEY_FEET:
        return "ft";
      case DistanceUnits.INCHES:
        return "in";
      case DistanceUnits.YARDS:
        return "yd";
      case DistanceUnits.MILES:
        return "mi";
      default:
        return void 0;
    }
  }
  static getAreaUnitSymbol(areaUnits) {
    switch (areaUnits) {
      case AreaUnits.SQUARE_METERS:
        return "m\xB2";
      case AreaUnits.SQUARE_CENTIMETERS:
        return "cm\xB2";
      case AreaUnits.SQUARE_KILOMETERS:
        return "km\xB2";
      case AreaUnits.SQUARE_FEET:
        return "sq ft";
      case AreaUnits.SQUARE_INCHES:
        return "sq in";
      case AreaUnits.SQUARE_YARDS:
        return "sq yd";
      case AreaUnits.SQUARE_MILES:
        return "sq mi";
      case AreaUnits.ACRES:
        return "ac";
      case AreaUnits.HECTARES:
        return "ha";
      default:
        return void 0;
    }
  }
  static getVolumeUnitSymbol(volumeUnits) {
    switch (volumeUnits) {
      case VolumeUnits.CUBIC_METERS:
        return "m\xB3";
      case VolumeUnits.CUBIC_CENTIMETERS:
        return "cm\xB3";
      case VolumeUnits.CUBIC_KILOMETERS:
        return "km\xB3";
      case VolumeUnits.CUBIC_FEET:
        return "cu ft";
      case VolumeUnits.CUBIC_INCHES:
        return "cu in";
      case VolumeUnits.CUBIC_YARDS:
        return "cu yd";
      case VolumeUnits.CUBIC_MILES:
        return "cu mi";
      default:
        return void 0;
    }
  }
  static getAngleUnitSymbol(angleUnits) {
    return angleUnits === AngleUnits.DEGREES ? "\xB0" : angleUnits === AngleUnits.RADIANS ? "rad" : angleUnits === AngleUnits.GRADE ? "%" : void 0;
  }
  static convertDistance(distance, distanceUnitsFrom, distanceUnitsTo) {
    return distanceUnitsFrom === distanceUnitsTo ? distance : distance * getDistanceUnitConversion(distanceUnitsFrom) * (1 / getDistanceUnitConversion(distanceUnitsTo));
  }
  static convertArea(area, areaUnitsFrom, areaUnitsTo) {
    return areaUnitsFrom === areaUnitsTo ? area : area * getAreaUnitConversion(areaUnitsFrom) * (1 / getAreaUnitConversion(areaUnitsTo));
  }
  static convertVolume(volume, volumeUnitsFrom, volumeUnitsTo) {
    return volumeUnitsFrom === volumeUnitsTo ? volume : volume * getVolumeUnitConversion(volumeUnitsFrom) * (1 / getVolumeUnitConversion(volumeUnitsTo));
  }
  static convertAngle(angle, angleUnitsFrom, angleUnitsTo) {
    return angleUnitsFrom === angleUnitsTo ? angle : convertAngleFromRadians(convertAngleToRadians(angle, angleUnitsFrom), angleUnitsTo);
  }
  static longitudeToString(longitude, angleUnits, locale, decimals) {
    return _MeasureUnits.angleToString(Math.abs(longitude), angleUnits, locale, decimals) + " " + (longitude < 0 ? "W" : "E");
  }
  static latitudeToString(latitude, angleUnits, locale, decimals) {
    return _MeasureUnits.angleToString(Math.abs(latitude), angleUnits, locale, decimals) + " " + (latitude < 0 ? "S" : "N");
  }
};
let MeasureUnits = _MeasureUnits;
MeasureUnits.numberToString = function(number, locale, decimals) {
  return numberToFormattedString(number, locale, decimals);
};
function getDistanceUnitConversion(distanceUnits) {
  switch (distanceUnits) {
    case DistanceUnits.METERS:
      return 1;
    case DistanceUnits.CENTIMETERS:
      return 0.01;
    case DistanceUnits.KILOMETERS:
      return 1e3;
    case DistanceUnits.FEET:
      return 0.3048;
    case DistanceUnits.US_SURVEY_FEET:
      return 1200 / 3937;
    case DistanceUnits.INCHES:
      return 0.254;
    case DistanceUnits.YARDS:
      return 0.9144;
    case DistanceUnits.MILES:
      return 1609.344;
    default:
      return 1;
  }
}
function getAreaUnitConversion(areaUnits) {
  switch (areaUnits) {
    case AreaUnits.SQUARE_METERS:
      return 1;
    case AreaUnits.SQUARE_CENTIMETERS:
      return 1e-4;
    case AreaUnits.SQUARE_KILOMETERS:
      return 1e6;
    case AreaUnits.SQUARE_FEET:
      return 0.09290304;
    case AreaUnits.SQUARE_INCHES:
      return 64516e-8;
    case AreaUnits.SQUARE_YARDS:
      return 0.83612736;
    case AreaUnits.SQUARE_MILES:
      return 2589988110336e-6;
    case AreaUnits.ACRES:
      return 4046.85642232;
    case AreaUnits.HECTARES:
      return 1e4;
    default:
      return 1;
  }
}
function getVolumeUnitConversion(volumeUnits) {
  switch (volumeUnits) {
    case VolumeUnits.CUBIC_METERS:
      return 1;
    case VolumeUnits.CUBIC_CENTIMETERS:
      return 1e-6;
    case VolumeUnits.CUBIC_KILOMETERS:
      return 1e9;
    case VolumeUnits.CUBIC_FEET:
      return 0.09290304 * 0.3048;
    case VolumeUnits.CUBIC_INCHES:
      return 16387064e-12;
    case VolumeUnits.CUBIC_YARDS:
      return 0.764554857984;
    case VolumeUnits.CUBIC_MILES:
      return 416818182544058e-5;
    default:
      return 1;
  }
}
function convertAngleToRadians(angle, angleUnits) {
  const { defined, Math: CesiumMath, RuntimeError } = Cesium;
  if (angleUnits === AngleUnits.RADIANS)
    return angle;
  if (angleUnits === AngleUnits.DEGREES)
    return CesiumMath.toRadians(angle);
  if (angleUnits === AngleUnits.GRADE)
    return angle === Number.POSITIVE_INFINITY ? CesiumMath.PI_OVER_TWO : Math.atan(angle / 100);
  if (angleUnits === AngleUnits.RATIO)
    return Math.atan(angle);
  if (angleUnits === AngleUnits.DEGREES_MINUTES_SECONDS) {
    const degreesMinutesSecondsRegex = /(-?)(\d+)\s*°\s*(\d+)\s*'\s*([\d.,]+)"\s*([WENS]?)/i;
    const result = degreesMinutesSecondsRegex.exec(angle) || [];
    if (!defined(result))
      throw new RuntimeError("Could not convert angle to radians: " + angle);
    let r = 0 < result[1].length ? -1 : 1;
    const degrees = parseInt(result[2]);
    const minutes = parseInt(result[3]);
    const seconds = parseFloat(result[4]);
    let s = result[5];
    s.length === 1 && ((s = s.toUpperCase()) !== "W" && s !== "S" || (r *= -1));
    const l = r * (degrees + minutes / 60 + seconds / 3600);
    return CesiumMath.toRadians(l);
  }
}
function convertAngleFromRadians(angle, angleUnits) {
  const { Math: CesiumMath } = Cesium;
  if (angleUnits === AngleUnits.RADIANS) {
    return angle;
  } else if (angleUnits === AngleUnits.DEGREES) {
    return CesiumMath.toDegrees(angle);
  } else if (angleUnits === AngleUnits.GRADE) {
    if (CesiumMath.clamp(angle, 0, CesiumMath.PI_OVER_TWO) === CesiumMath.PI_OVER_TWO) {
      return Number.POSITIVE_INFINITY;
    } else {
      return 100 * Math.tan(angle);
    }
  } else if (angleUnits === AngleUnits.RATIO) {
    return Math.sin(angle) / Math.cos(angle);
  }
  return void 0;
}
function numberToFormattedString(number, locale, decimals) {
  const options = getLocaleFormatStringOptions(decimals, number, locale);
  const strLocale = number.toLocaleString(locale, options);
  const negativeZero = -0;
  const positiveZero = 0;
  return strLocale === negativeZero.toLocaleString(locale, options) ? positiveZero.toLocaleString(locale, options) : strLocale;
}
function getLocaleFormatStringOptions(decimals, number, locale) {
  let numberFormatter = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  };
  decimals = Cesium.defaultValue(decimals, 2);
  if (typeof decimals === "number") {
    numberFormatter.minimumFractionDigits = decimals;
    numberFormatter.maximumFractionDigits = decimals;
  } else {
    numberFormatter = typeof decimals === "function" ? decimals(number, locale) : decimals;
  }
  return numberFormatter;
}

exports.AngleUnits = AngleUnits;
exports.AreaUnits = AreaUnits;
exports.DistanceUnits = DistanceUnits;
exports.VolumeUnits = VolumeUnits;
exports["default"] = MeasureUnits;
//# sourceMappingURL=MeasureUnits.js.map
