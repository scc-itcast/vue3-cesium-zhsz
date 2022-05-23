declare class ParticlesComputing {
    windTextures: any;
    particlesTextures: any;
    primitives: any;
    data: any;
    constructor(context: any, data: any, particleSystemOptions: any, viewerParameters: any);
    createWindTextures(context: any, data: any): void;
    createParticlesTextures(context: any, particleSystemOptions: any, viewerParameters: any): void;
    randomizeParticles(maxParticles: any, viewerParameters: any): Float32Array;
    destroyParticlesTextures(): void;
    createComputingPrimitives(data: any, particleSystemOptions: any, viewerParameters: any): void;
}
export default ParticlesComputing;
