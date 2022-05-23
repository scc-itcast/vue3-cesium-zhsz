interface EarthGravityModel1996 {
    gridFileUrl: string;
    data: unknown;
    minimumHeight: number;
    maximumHeight: number;
}
declare class EarthGravityModel1996 {
    /**
     * The Earth Gravity Model 1996 (EGM96) geoid.
     * @param {String} gridFileUrl The URL of the WW15MGH.DAC file.
     */
    constructor(gridFileUrl: any);
    /**
     * Determines if this class will work in the current environment.  It will return false on older browsers without support
     * for typed arrays.
     * @return {Boolean} True if this class may be used in this environment; otherwise, false.
     */
    isSupported(): boolean;
    /**
     * Gets the height of EGM96 above the surface of the ellipsoid.
     * @param {String} baseUrl The base URL for TerriaJS resources.
     * @param {Number} longitude The longitude.
     * @param {Number} latitude The latitude
     * @return {Promise|Number} A promise, that, when it results The height of mean sea level above the ellipsoid at the specified location.  Negative numbers indicate that mean sea level
     *                  is below the ellipsoid.
     */
    getHeight(longitude: any, latitude: any): any;
    getHeights(cartographicArray: any): any;
}
export default EarthGravityModel1996;
