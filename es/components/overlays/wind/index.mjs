import '../../../composables/index.mjs';
import { defineComponent, getCurrentInstance, computed, watch, onUnmounted, createCommentVNode } from 'vue';
import ParticleSystem from './particleSystem.mjs';
import { viewRectangleToLonLatRange } from './util.mjs';
import { kebabCase } from '../../../utils/util.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import { makeCartesian2 } from '../../../utils/cesium-helpers.mjs';
import { regularGrid } from './grid/regular.mjs';
import useCommon from '../../../composables/use-common/index.mjs';

const windmapOverlayProps = {
  show: {
    type: Boolean,
    default: true
  },
  data: {
    type: Object,
    required: true
  },
  options: {
    type: Object,
    default: () => ({
      maxParticles: 64 * 64,
      particleHeight: 100,
      fadeOpacity: 0.996,
      dropRate: 3e-3,
      dropRateBump: 0.01,
      speedFactor: 1,
      lineWidth: 4
    })
  },
  viewerParameters: Object
};
var OverlayWind = defineComponent({
  name: "VcOverlayWindmap",
  props: windmapOverlayProps,
  emits: commonEmits,
  setup(props, ctx) {
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcOverlayHtml";
    instance.cesiumEvents = [];
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const { $services } = commonState;
    let viewerParameters;
    let globeBoundingSphere;
    let primitiveCollection;
    let grid;
    const particleSystemOptions = computed(() => {
      const particlesTextureSize = Math.ceil(Math.sqrt(props.options.maxParticles));
      const maxParticles = particlesTextureSize * particlesTextureSize;
      return {
        particlesTextureSize,
        maxParticles,
        particleHeight: props.options.particleHeight,
        fadeOpacity: props.options.fadeOpacity,
        dropRate: props.options.dropRate,
        dropRateBump: props.options.dropRateBump,
        speedFactor: props.options.speedFactor,
        lineWidth: props.options.lineWidth
      };
    });
    let unwatchFns = [];
    unwatchFns.push(watch(() => props.show, (val) => {
      primitiveCollection.show = val;
    }));
    unwatchFns.push(watch(() => props.data, (val) => {
      ;
      instance.proxy.reload();
    }));
    unwatchFns.push(watch(() => particleSystemOptions.value, (val) => {
      const particleSystem = instance.cesiumObject;
      if (!particleSystem)
        return;
      particleSystem.applyParticleSystemOptions(val);
    }, {
      deep: true
    }));
    unwatchFns.push(watch(() => props.viewerParameters, (val) => {
      updateViewerParameters();
      const particleSystem = instance.cesiumObject;
      particleSystem.applyViewerParameters(viewerParameters);
    }, {
      deep: true
    }));
    instance.createCesiumObject = async () => {
      const { viewer } = $services;
      primitiveCollection = new Cesium.PrimitiveCollection();
      globeBoundingSphere = new Cesium.BoundingSphere(Cesium.Cartesian3.ZERO, 0.99 * 6378137);
      viewerParameters = {
        lonRange: new Cesium.Cartesian2(),
        latRange: new Cesium.Cartesian2(),
        pixelSize: 0
      };
      const sequenceLon = { start: props.data.lon.array[0], delta: props.data.lon.delta, size: props.data.lon.array.length };
      const sequenceLat = { start: props.data.lat.array[0], delta: props.data.lat.delta, size: props.data.lat.array.length };
      grid = regularGrid(sequenceLon, sequenceLat);
      updateViewerParameters();
      return new ParticleSystem(viewer.scene.context, props.data, particleSystemOptions.value, viewerParameters);
    };
    instance.mount = async () => {
      const { viewer } = $services;
      viewer.scene.primitives.add(primitiveCollection);
      const scene = viewer.scene;
      const camera = scene.camera;
      addPrimitives();
      camera.moveStart.addEventListener(moveStartListener);
      camera.moveEnd.addEventListener(moveEndListener);
      window.addEventListener("resize", resizeListener);
      scene.preRender.addEventListener(preRenderListener);
      return true;
    };
    instance.unmount = async () => {
      removePrimitives();
      const { viewer } = $services;
      const scene = viewer.scene;
      const camera = scene.camera;
      removePrimitives();
      viewer.scene.primitives.remove(primitiveCollection);
      camera.moveStart.removeEventListener(moveStartListener);
      camera.moveEnd.removeEventListener(moveEndListener);
      window.removeEventListener("resize", resizeListener);
      scene.preRender.removeEventListener(preRenderListener);
      return true;
    };
    const addPrimitives = () => {
      const particleSystem = instance.cesiumObject;
      primitiveCollection.add(particleSystem.particlesComputing.primitives.calculateSpeed);
      primitiveCollection.add(particleSystem.particlesComputing.primitives.updatePosition);
      primitiveCollection.add(particleSystem.particlesComputing.primitives.postProcessingPosition);
      primitiveCollection.add(particleSystem.particlesRendering.primitives.segments);
      primitiveCollection.add(particleSystem.particlesRendering.primitives.trails);
      primitiveCollection.add(particleSystem.particlesRendering.primitives.screen);
    };
    const removePrimitives = () => {
      const particleSystem = instance.cesiumObject;
      primitiveCollection.remove(particleSystem.particlesComputing.primitives.calculateSpeed);
      primitiveCollection.remove(particleSystem.particlesComputing.primitives.updatePosition);
      primitiveCollection.remove(particleSystem.particlesComputing.primitives.postProcessingPosition);
      primitiveCollection.remove(particleSystem.particlesRendering.primitives.segments);
      primitiveCollection.remove(particleSystem.particlesRendering.primitives.trails);
      primitiveCollection.remove(particleSystem.particlesRendering.primitives.screen);
    };
    const moveStartListener = () => {
      primitiveCollection.show = false;
    };
    const moveEndListener = () => {
      updateViewerParameters();
      const particleSystem = instance.cesiumObject;
      particleSystem.applyViewerParameters(viewerParameters);
      primitiveCollection.show = true;
    };
    let resized = false;
    const resizeListener = () => {
      resized = true;
      primitiveCollection.show = false;
      primitiveCollection.removeAll();
    };
    const preRenderListener = () => {
      if (resized) {
        const { viewer } = $services;
        const scene = viewer.scene;
        const particleSystem = instance.cesiumObject;
        particleSystem.canvasResize(scene.context);
        resized = false;
        addPrimitives();
        primitiveCollection.show = true;
      }
    };
    const updateViewerParameters = () => {
      const { viewer } = $services;
      const scene = viewer.scene;
      const camera = scene.camera;
      if (Cesium.defined(props.viewerParameters) && Cesium.defined(props.viewerParameters.latRange) && Cesium.defined(props.viewerParameters.lonRange)) {
        viewerParameters.lonRange = makeCartesian2(props.viewerParameters.lonRange);
        viewerParameters.latRange = makeCartesian2(props.viewerParameters.latRange);
      } else {
        const viewRectangle = camera.computeViewRectangle(scene.globe.ellipsoid);
        const lonLatRange = viewRectangleToLonLatRange(viewRectangle);
        viewerParameters.lonRange.x = lonLatRange.lon.min;
        viewerParameters.lonRange.y = lonLatRange.lon.max;
        viewerParameters.latRange.x = lonLatRange.lat.min;
        viewerParameters.latRange.y = lonLatRange.lat.max;
      }
      const pixelSize = Cesium.defined(props.viewerParameters) && Cesium.defined(props.viewerParameters.pixelSize) ? props.viewerParameters.pixelSize : camera.getPixelSize(globeBoundingSphere, scene.drawingBufferWidth, scene.drawingBufferHeight);
      if (pixelSize > 0) {
        viewerParameters.pixelSize = pixelSize;
      }
    };
    const getNearestUV = (longitude, latitude) => {
      const index = grid.closest(longitude, latitude);
      if (Cesium.defined(index)) {
        return [props.data.U.array[index], props.data.V.array[index]];
      }
      return void 0;
    };
    onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    Object.assign(instance.proxy, {
      getNearestUV
    });
    return () => {
      var _a;
      return createCommentVNode(kebabCase(((_a = instance.proxy) == null ? void 0 : _a.$options.name) || "v-if"));
    };
  }
});

export { OverlayWind as default, windmapOverlayProps };
//# sourceMappingURL=index.mjs.map
