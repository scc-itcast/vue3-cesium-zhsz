import type { PropType } from 'vue';
import type { VcCartesian2, VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types';
declare const emits: {
    complete: (evt: Cesium.ParticleSystem) => boolean;
    readyPromise: (primitive: import("vue-cesium/es/utils/types").VcPrimitive, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => boolean;
    'update:geometryInstances': (instances: Cesium.GeometryInstance[]) => boolean;
    mousedown: (evt: VcPickEvent) => boolean;
    mouseup: (evt: VcPickEvent) => boolean;
    click: (evt: VcPickEvent) => boolean;
    clickout: (evt: VcPickEvent) => boolean;
    dblclick: (evt: VcPickEvent) => boolean;
    mousemove: (evt: VcPickEvent) => boolean;
    mouseover: (evt: VcPickEvent) => boolean;
    mouseout: (evt: VcPickEvent) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
};
export declare const particlePrimitiveProps: {
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    minimumSpeed: NumberConstructor;
    maximumSpeed: NumberConstructor;
    lifetime: {
        type: NumberConstructor;
        default: number;
    };
    particleLife: {
        type: NumberConstructor;
        default: number;
    };
    minimumParticleLife: NumberConstructor;
    maximumParticleLife: NumberConstructor;
    mass: {
        type: NumberConstructor;
        default: number;
    };
    minimumMass: NumberConstructor;
    maximumMass: NumberConstructor;
    sizeInMeters: {
        type: PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    maximumImageSize: {
        type: PropType<VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    minimumImageSize: {
        type: PropType<VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    imageSize: {
        type: PropType<VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    image: PropType<string | Cesium.CallbackProperty | HTMLImageElement | HTMLCanvasElement | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<string>>;
    endColor: {
        type: PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    startColor: {
        type: PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    color: {
        type: PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        }; /**
         * Whether to display the particle system.
         * Default value: true
         */
    };
    emitterModelMatrix: PropType<Cesium.Matrix4>;
    emissionRate: {
        type: NumberConstructor;
        default: number;
    };
    bursts: PropType<Cesium.ParticleBurst[]>;
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    scale: {
        type: NumberConstructor;
        default: number;
    };
    startScale: NumberConstructor;
    endScale: NumberConstructor;
    modelMatrix: PropType<Cesium.Matrix4>;
    updateCallback: FunctionConstructor;
    emitter: PropType<Cesium.ParticleEmitter>;
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
};
declare const _default: import("vue").DefineComponent<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    minimumSpeed: NumberConstructor;
    maximumSpeed: NumberConstructor;
    lifetime: {
        type: NumberConstructor;
        default: number;
    };
    particleLife: {
        type: NumberConstructor;
        default: number;
    };
    minimumParticleLife: NumberConstructor;
    maximumParticleLife: NumberConstructor;
    mass: {
        type: NumberConstructor;
        default: number;
    };
    minimumMass: NumberConstructor;
    maximumMass: NumberConstructor;
    sizeInMeters: {
        type: PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    maximumImageSize: {
        type: PropType<VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    minimumImageSize: {
        type: PropType<VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    imageSize: {
        type: PropType<VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    image: PropType<string | Cesium.CallbackProperty | HTMLImageElement | HTMLCanvasElement | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<string>>;
    endColor: {
        type: PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    startColor: {
        type: PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    color: {
        type: PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        }; /**
         * Whether to display the particle system.
         * Default value: true
         */
    };
    emitterModelMatrix: PropType<Cesium.Matrix4>;
    emissionRate: {
        type: NumberConstructor;
        default: number;
    };
    bursts: PropType<Cesium.ParticleBurst[]>;
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    scale: {
        type: NumberConstructor;
        default: number;
    };
    startScale: NumberConstructor;
    endScale: NumberConstructor;
    modelMatrix: PropType<Cesium.Matrix4>;
    updateCallback: FunctionConstructor;
    emitter: PropType<Cesium.ParticleEmitter>;
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    complete: (evt: Cesium.ParticleSystem) => boolean;
    readyPromise: (primitive: import("vue-cesium/es/utils/types").VcPrimitive, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => boolean;
    'update:geometryInstances': (instances: Cesium.GeometryInstance[]) => boolean;
    mousedown: (evt: VcPickEvent) => boolean;
    mouseup: (evt: VcPickEvent) => boolean;
    click: (evt: VcPickEvent) => boolean;
    clickout: (evt: VcPickEvent) => boolean;
    dblclick: (evt: VcPickEvent) => boolean;
    mousemove: (evt: VcPickEvent) => boolean;
    mouseover: (evt: VcPickEvent) => boolean;
    mouseout: (evt: VcPickEvent) => boolean;
    beforeLoad: (instance: VcComponentInternalInstance) => boolean;
    ready: (readyObj: VcReadyObject) => boolean;
    destroyed: (instance: VcComponentInternalInstance) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    enableMouseEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    minimumSpeed: NumberConstructor;
    maximumSpeed: NumberConstructor;
    lifetime: {
        type: NumberConstructor;
        default: number;
    };
    particleLife: {
        type: NumberConstructor;
        default: number;
    };
    minimumParticleLife: NumberConstructor;
    maximumParticleLife: NumberConstructor;
    mass: {
        type: NumberConstructor;
        default: number;
    };
    minimumMass: NumberConstructor;
    maximumMass: NumberConstructor;
    sizeInMeters: {
        type: PropType<boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>>;
        default: boolean;
    };
    maximumImageSize: {
        type: PropType<VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    minimumImageSize: {
        type: PropType<VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    imageSize: {
        type: PropType<VcCartesian2>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeCartesian2;
        };
    };
    image: PropType<string | Cesium.CallbackProperty | HTMLImageElement | HTMLCanvasElement | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<string>>;
    endColor: {
        type: PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    startColor: {
        type: PropType<VcColor>;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        };
    };
    color: {
        type: PropType<VcColor>;
        default: string;
        watcherOptions: {
            cesiumObjectBuilder: typeof import("../../../utils/cesium-helpers").makeColor;
        }; /**
         * Whether to display the particle system.
         * Default value: true
         */
    };
    emitterModelMatrix: PropType<Cesium.Matrix4>;
    emissionRate: {
        type: NumberConstructor;
        default: number;
    };
    bursts: PropType<Cesium.ParticleBurst[]>;
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    scale: {
        type: NumberConstructor;
        default: number;
    };
    startScale: NumberConstructor;
    endScale: NumberConstructor;
    modelMatrix: PropType<Cesium.Matrix4>;
    updateCallback: FunctionConstructor;
    emitter: PropType<Cesium.ParticleEmitter>;
    show: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    onBeforeLoad?: (instance: VcComponentInternalInstance) => any;
    onReady?: (readyObj: VcReadyObject) => any;
    onDestroyed?: (instance: VcComponentInternalInstance) => any;
    onMousedown?: (evt: VcPickEvent) => any;
    onMouseup?: (evt: VcPickEvent) => any;
    onClick?: (evt: VcPickEvent) => any;
    onClickout?: (evt: VcPickEvent) => any;
    onDblclick?: (evt: VcPickEvent) => any;
    onMousemove?: (evt: VcPickEvent) => any;
    onMouseover?: (evt: VcPickEvent) => any;
    onMouseout?: (evt: VcPickEvent) => any;
    onReadyPromise?: (primitive: import("vue-cesium/es/utils/types").VcPrimitive, viewer: Cesium.Viewer, instance: VcComponentPublicInstance<{}>) => any;
    "onUpdate:geometryInstances"?: (instances: Cesium.GeometryInstance[]) => any;
    onComplete?: (evt: Cesium.ParticleSystem) => any;
}, {
    show: boolean;
    color: VcColor;
    enableMouseEvent: boolean;
    loop: boolean;
    speed: number;
    scale: number;
    sizeInMeters: boolean | Cesium.CallbackProperty | import("vue-cesium/es/utils/types").VcCallbackPropertyFunction<boolean>;
    lifetime: number;
    particleLife: number;
    mass: number;
    emissionRate: number;
}>;
export default _default;
export declare type VcPrimitiveParticleEmits = typeof emits;
export declare type VcPrimitiveParticleProps = {
    /**
     * Whether to display the particle system.
     * Default value: true
     */
    show?: boolean;
    /**
     * The callback function to be called each frame to update a particle.
     */
    updateCallback?: (particle: Cesium.Particle, dt: number) => void;
    /**
     * The particle emitter for this system.
     */
    emitter?: Cesium.ParticleEmitter;
    /**
     * The 4x4 transformation matrix that transforms the particle system from model to world coordinates.
     */
    modelMatrix?: Cesium.Matrix4;
    /**
     * The 4x4 transformation matrix that transforms the particle system emitter within the particle systems local coordinate system.
     */
    emitterModelMatrix?: Cesium.Matrix4;
    /**
     * The number of particles to emit per second.
     * Default value: 5.0
     */
    emissionRate?: number;
    /**
     * An array of ParticleBurst, emitting bursts of particles at periodic times.
     */
    bursts?: Array<Cesium.ParticleBurst>;
    /**
     * Whether the particle system should loop its bursts when it is complete.
     * Default: true
     */
    loop?: boolean;
    /**
     * Sets the scale to apply to the image of the particle for the duration of its particleLife.
     * Default value: 1.0
     */
    scale?: number;
    /**
     * The initial scale to apply to the image of the particle at the beginning of its life.
     */
    startScale?: number;
    /**
     * The final scale to apply to the image of the particle at the end of its life.
     */
    endScale?: number;
    /**
     * Sets the color of a particle for the duration of its particleLife.
     * Default value: white
     */
    color?: VcColor;
    /**
     * The color of the particle at the beginning of its life.
     */
    startColor?: VcColor;
    /**
     * The color of the particle at the end of its life.
     */
    endColor?: VcColor;
    /**
     * The URI, HTMLImageElement, or HTMLCanvasElement to use for the billboard.
     */
    image?: string | HTMLImageElement | HTMLCanvasElement;
    /**
     * If set, overrides the minimumImageSize and maximumImageSize inputs that scale the particle image's dimensions in pixels.
     */
    imageSize?: VcCartesian2;
    /**
     * Sets the minimum bound, width by height, above which to randomly scale the particle image's dimensions in pixels.
     */
    minimumImageSize?: VcCartesian2;
    /**
     * Sets the maximum bound, width by height, below which to randomly scale the particle image's dimensions in pixels.
     */
    maximumImageSize?: VcCartesian2;
    /**
     * Sets if the size of particles is in meters or pixels. true to size the particles in meters; otherwise, the size is in pixels.
     */
    sizeInMeters?: boolean;
    /**
     * If set, overrides the minimumSpeed and maximumSpeed inputs with this value.
     * Default value: 1.0
     */
    speed?: number;
    /**
     * Sets the minimum bound in meters per second above which a particle's actual speed will be randomly chosen.
     */
    minimumSpeed?: number;
    /**
     * Sets the maximum bound in meters per second below which a particle's actual speed will be randomly chosen.
     */
    maximumSpeed?: number;
    /**
     * How long the particle system will emit particles, in seconds.
     * Default value: Number.MAX_VALUE
     */
    lifetime?: number;
    /**
     * If set, overrides the minimumParticleLife and maximumParticleLife inputs with this value.
     * Default value: 5.0
     */
    particleLife?: number;
    /**
     * Sets the minimum bound in seconds for the possible duration of a particle's life above which a particle's actual life will be randomly chosen.
     */
    minimumParticleLife?: number;
    /**
     * Sets the maximum bound in seconds for the possible duration of a particle's life below which a particle's actual life will be randomly chosen.
     */
    maximumParticleLife?: number;
    /**
     * Sets the minimum and maximum mass of particles in kilograms.
     * Default value: 1.0
     */
    mass?: number;
    /**
     * Sets the minimum bound for the mass of a particle in kilograms. A particle's actual mass will be chosen as a random amount above this value.
     */
    minimumMass?: number;
    /**
     * Sets the maximum mass of particles in kilograms. A particle's actual mass will be chosen as a random amount below this value.
     */
    maximumMass?: number;
    /**
     * Specifies whether to respond to mouse pick events.
     * Default Value: true
     */
    enableMouseEvent?: boolean;
    /**
     * Triggers before the component is loaded.
     */
    onBeforeLoad?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the component is successfully loaded.
     */
    onReady?: (readyObject: VcReadyObject) => void;
    /**
     * Triggers when the component is destroyed.
     */
    onDestroyed?: (instance: VcComponentInternalInstance) => void;
    /**
     * Triggers when the mouse is pressed on this primitive.
     */
    onMousedown?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse bounces up on this primitive.
     */
    onMouseup?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse clicks on this primitive.
     */
    onClick?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse clicks outside this primitive.
     */
    onClickout?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the left mouse button double-clicks this primitive.
     */
    onDblclick?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves on this primitive.
     */
    onMousemove?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves over to this primitive.
     */
    onMouseover?: (evt: VcPickEvent) => void;
    /**
     * Triggers when the mouse moves out of this primitive.
     */
    onMouseout?: (evt: VcPickEvent) => void;
};
export declare type VcPrimitiveParticleRef = VcComponentPublicInstance<VcPrimitiveParticleProps>;
