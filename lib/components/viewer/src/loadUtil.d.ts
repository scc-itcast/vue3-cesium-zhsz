/**
 * 加载Mars3D平台CDN资源文件，
 * 这些文件可以从  http://mars3d.cn/download/lib.rar  下载后放在本地项目目录引入。
 * @param {string} libpath 根目录，如：http://mars3d.cn/lib/
 * @return {*}
 */
export declare function getMars3dConfig(libpath: string): {
    'font-awesome': string[];
    haoutil: string[];
    turf: string[];
    'mars3d-space': string[];
    'mars3d-echarts': string[];
    'mars3d-mapv': string[];
    'mars3d-heatmap': string[];
    'mars3d-wind': string[];
    mars3d: string[];
};
