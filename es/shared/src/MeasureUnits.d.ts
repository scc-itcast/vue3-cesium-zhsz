declare const DistanceUnits: Readonly<{
    METERS: string;
    CENTIMETERS: string;
    KILOMETERS: string;
    FEET: string;
    US_SURVEY_FEET: string;
    INCHES: string;
    YARDS: string;
    MILES: string;
}>;
declare const AreaUnits: Readonly<{
    SQUARE_METERS: string;
    SQUARE_CENTIMETERS: string;
    SQUARE_KILOMETERS: string;
    SQUARE_FEET: string;
    SQUARE_INCHES: string;
    SQUARE_YARDS: string;
    SQUARE_MILES: string;
    ACRES: string;
    HECTARES: string;
}>;
declare const VolumeUnits: Readonly<{
    CUBIC_METERS: string;
    CUBIC_CENTIMETERS: string;
    CUBIC_KILOMETERS: string;
    CUBIC_FEET: string;
    CUBIC_INCHES: string;
    CUBIC_YARDS: string;
    CUBIC_MILES: string;
}>;
declare const AngleUnits: Readonly<{
    DEGREES: string;
    RADIANS: string;
    DEGREES_MINUTES_SECONDS: string;
    GRADE: string;
    RATIO: string;
}>;
declare class MeasureUnits {
    distanceUnits: string;
    areaUnits: string;
    volumeUnits: string;
    angleUnits: string;
    slopeUnits: string;
    constructor(options?: any);
    static numberToString: (number: any, locale: any, decimals: any) => any;
    static distanceToString(distance: number, distanceUnits: string, locale?: any, decimals?: any): string;
    static areaToString(area: number, areaUnits: string, locale?: any, decimals?: any): string;
    static angleToString(angle: number, angleUnits: string, locale?: any, decimals?: any): string;
    static volumeToString(volume: number, volumeUnits: string, locale?: any, decimals?: any): string;
    static getDistanceUnitSpacing(distanceUnits: string): string;
    static getAreaUnitSpacing(distanceUnits: string): string;
    static getAngleUnitSpacing(angleUnits: string): "" | " ";
    static getVolumeUnitSpacing(distanceUnits: string): string;
    static getDistanceUnitSymbol(distanceUnits: string): "m" | "cm" | "km" | "ft" | "in" | "yd" | "mi";
    static getAreaUnitSymbol(areaUnits: string): "m²" | "cm²" | "km²" | "sq ft" | "sq in" | "sq yd" | "sq mi" | "ac" | "ha";
    static getVolumeUnitSymbol(volumeUnits: any): "m³" | "cm³" | "km³" | "cu ft" | "cu in" | "cu yd" | "cu mi";
    static getAngleUnitSymbol(angleUnits: any): "°" | "rad" | "%";
    static convertDistance(distance: number, distanceUnitsFrom: string, distanceUnitsTo: string): number;
    static convertArea(area: number, areaUnitsFrom: string, areaUnitsTo: string): number;
    static convertVolume(volume: number, volumeUnitsFrom: string, volumeUnitsTo: string): number;
    static convertAngle(angle: number, angleUnitsFrom: string, angleUnitsTo: string): any;
    static longitudeToString(longitude: any, angleUnits: any, locale: any, decimals: any): string;
    static latitudeToString(latitude: any, angleUnits: any, locale: any, decimals: any): string;
}
export default MeasureUnits;
export { DistanceUnits, AreaUnits, VolumeUnits, AngleUnits };
