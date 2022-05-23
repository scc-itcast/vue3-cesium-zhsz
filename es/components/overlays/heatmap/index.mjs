import { defineComponent, getCurrentInstance, ref, computed, watch, onUnmounted, h, createCommentVNode } from 'vue';
import '../../../composables/index.mjs';
import { show, rectangle } from '../../../utils/cesium-props.mjs';
import { makeColor, makeRectangle } from '../../../utils/cesium-helpers.mjs';
import h337 from '@zouyaoji/heatmap.js';
import _Entity from '../../entity/index.mjs';
import _ImageryLayer from '../../imagery-layer/index.mjs';
import { VcPrimitiveGround } from '../../primitives/index.mjs';
import { getVcParentInstance } from '../../../utils/private/vm.mjs';
import { commonEmits } from '../../../utils/emits.mjs';
import useCommon from '../../../composables/use-common/index.mjs';

const heatmapOverlayProps = {
  ...show,
  ...rectangle,
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  data: Array,
  options: Object,
  type: {
    type: String,
    default: "primitive"
  },
  segments: {
    type: Array,
    default: () => []
  },
  projection: {
    type: String,
    default: "3857"
  }
};
var OverlayHeatmap = defineComponent({
  name: "VcOverlayHeatmap",
  props: heatmapOverlayProps,
  emits: commonEmits,
  setup(props, ctx) {
    var _a;
    const instance = getCurrentInstance();
    instance.cesiumClass = "VcOverlayHeatmap";
    instance.cesiumEvents = [];
    const commonState = useCommon(props, ctx, instance);
    if (commonState === void 0) {
      return;
    }
    const rootRef = ref(null);
    const project = ref(null);
    const defaultOptions = {
      minCanvasSize: 700,
      maxCanvasSize: 2e3,
      radiusFactor: 60,
      spacingFactor: 1.5,
      maxOpacity: 0.8,
      minOpacity: 0.1,
      blur: 0.85,
      gradient: {
        ".3": "blue",
        ".65": "yellow",
        ".8": "orange",
        ".95": "red"
      },
      xField: "x",
      yField: "y",
      valueField: "value",
      container: void 0
    };
    const coordinates = ref(null);
    const material = ref(null);
    const image = ref(null);
    const childRef = ref(null);
    const appearance = ref(null);
    const canRender = ref(false);
    const config = ref(null);
    const vcParent = getVcParentInstance(instance);
    (_a = vcParent.proxy.creatingPromise) == null ? void 0 : _a.then(() => {
      canRender.value = true;
    });
    const options = computed(() => {
      return Object.assign({}, defaultOptions, props.options);
    });
    let unwatchFns = [];
    unwatchFns.push(watch(() => image, (val) => {
      material.value.fabric.uniforms.image = val.value;
      appearance.value.options.material.fabric.uniforms.image = val.value;
    }, {
      deep: true
    }));
    unwatchFns.push(watch(() => props.data, (newVal, oldVal) => {
      if (!instance.mounted) {
        return;
      }
      const heatmapInstance = instance.cesiumObject;
      if (Array.isArray(newVal) && Array.isArray(oldVal)) {
        setData(newVal, heatmapInstance);
        image.value = heatmapInstance.getDataURL();
      } else {
        commonState.reload();
      }
    }, {
      deep: true
    }));
    unwatchFns.push(watch(() => [props.max, props.min], (vals) => {
      const heatmapInstance = instance.cesiumObject;
      heatmapInstance.setDataMax(vals[0] || 0);
      heatmapInstance.setDataMin(vals[1] || 0);
      image.value = heatmapInstance.getDataURL();
    }));
    unwatchFns.push(watch(() => [props.type, props.projection, props.rectangle], (vals) => {
      commonState.reload();
    }));
    unwatchFns.push(watch(() => props.options, (val) => {
      const heatmapInstance = instance.cesiumObject;
      heatmapInstance.configure(val);
      image.value = heatmapInstance.getDataURL();
    }, {
      deep: true
    }));
    instance.createCesiumObject = async () => {
      const { WebMercatorProjection, GeographicProjection } = Cesium;
      project.value = props.projection === "3857" ? new WebMercatorProjection() : new GeographicProjection();
      const id = getID();
      config.value = getConfig(props.rectangle);
      const container = document.createElement("div");
      if (Cesium.defined(id)) {
        container.setAttribute("id", id);
      }
      container.setAttribute("style", "width: " + config.value.width + "px; height: " + config.value.height + "px; margin: 0px; display: none;");
      document.body.appendChild(container);
      options.value.container = container;
      if (props.segments.length) {
        options.value.gradient = {};
        const \u0394 = props.max - props.min;
        for (let i = 0; i < props.segments.length; i++) {
          options.value.gradient[`${(props.segments[i][0] - props.min) / \u0394}`] = makeColor(props.segments[i][1]).toCssColorString();
        }
      }
      const heatmapInstance = h337.create(options.value);
      container.children[0].setAttribute("id", id + "-hm");
      if (Array.isArray(props.data)) {
        setData(props.data, heatmapInstance);
        material.value = {
          fabric: {
            type: "Image",
            uniforms: {
              image: image.value,
              transparent: true
            }
          }
        };
        appearance.value = {
          type: "MaterialAppearance",
          options: {
            material: {
              fabric: {
                type: "Image",
                uniforms: {
                  image: image.value
                }
              }
            }
          }
        };
      }
      return heatmapInstance;
    };
    instance.unmount = async () => {
      document.body.removeChild(instance.cesiumObject._config.container);
      return true;
    };
    const getID = (len) => {
      let id = "";
      const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < (len || 8); i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return id;
    };
    const getConfig = (bounds) => {
      const rectangle2 = makeRectangle(bounds);
      const swmb = project.value.project(new Cesium.Cartographic(rectangle2.west, rectangle2.south));
      const nemb = project.value.project(new Cesium.Cartographic(rectangle2.east, rectangle2.north));
      const mbb = {
        north: nemb.y,
        east: nemb.x,
        south: swmb.y,
        west: swmb.x
      };
      let width = mbb.east > 0 && mbb.west < 0 ? mbb.east + Math.abs(mbb.west) : Math.abs(mbb.east - mbb.west);
      let height = mbb.north > 0 && mbb.south < 0 ? mbb.north + Math.abs(mbb.south) : Math.abs(mbb.north - mbb.south);
      let factor = 1;
      if (width > height && width > options.value.maxCanvasSize) {
        factor = width / options.value.maxCanvasSize;
        if (height / factor < options.value.minCanvasSize) {
          factor = height / options.value.minCanvasSize;
        }
      } else if (height > width && height > options.value.maxCanvasSize) {
        factor = height / options.value.maxCanvasSize;
        if (height / factor < options.value.minCanvasSize) {
          factor = width / options.value.minCanvasSize;
        }
      } else if (width < height && width < options.value.minCanvasSize) {
        factor = width / options.value.minCanvasSize;
        if (height / factor > options.value.maxCanvasSize) {
          factor = height / options.value.maxCanvasSize;
        }
      } else if (height < width && height < options.value.minCanvasSize) {
        factor = height / options.value.minCanvasSize;
        if (width / factor > options.value.maxCanvasSize) {
          factor = width / options.value.maxCanvasSize;
        }
      }
      width = width / factor;
      height = height / factor;
      if (!Cesium.defined(options.value.radius)) {
        options.value.radius = width > height ? width / options.value.radiusFactor : height / options.value.radiusFactor;
      }
      const spacing = (options.value.radius || 1) * options.value.spacingFactor;
      const xoffset = mbb.west;
      const yoffset = mbb.south;
      width = Math.round(width + spacing * 2);
      height = Math.round(height + spacing * 2);
      mbb.west -= spacing * factor;
      mbb.east += spacing * factor;
      mbb.south -= spacing * factor;
      mbb.north += spacing * factor;
      const swmw = project.value.unproject(new Cesium.Cartesian3(mbb.west, mbb.south));
      const nemw = project.value.unproject(new Cesium.Cartesian3(mbb.east, mbb.north));
      const mwb = {
        north: Cesium.Math.toDegrees(nemw.latitude),
        east: Cesium.Math.toDegrees(nemw.longitude),
        south: Cesium.Math.toDegrees(swmw.latitude),
        west: Cesium.Math.toDegrees(swmw.longitude)
      };
      coordinates.value = mwb;
      return {
        height,
        width,
        factor,
        xoffset,
        yoffset,
        spacing
      };
    };
    const setData = (data, heatmapInstance) => {
      if (data) {
        const { height, xoffset, yoffset, factor, spacing } = config.value;
        const xField = options.value.xField || "x";
        const yField = options.value.yField || "y";
        const valueField = options.value.valueField || "value";
        const datas = [];
        for (let i = 0; i < data.length; i++) {
          const gp = data[i];
          if (!Cesium.defined(gp.id)) {
            gp.id = i;
          }
          const mp = project.value.project(Cesium.Cartographic.fromDegrees(gp[xField], gp[yField]));
          const hp = {
            x: Math.round((mp.x - xoffset) / factor + spacing),
            y: Math.round((mp.y - yoffset) / factor + spacing),
            value: void 0
          };
          hp.y = height - hp.y;
          if (gp[valueField] || gp[valueField] === 0) {
            hp[valueField] = gp[valueField];
          }
          if (hp[valueField] > props.max || hp[valueField] < props.min) {
            continue;
          }
          datas.push(hp);
        }
        heatmapInstance.setData({
          min: props.min,
          max: props.max,
          data: datas
        });
        image.value = heatmapInstance.getDataURL();
      }
    };
    onUnmounted(() => {
      unwatchFns.forEach((item) => item());
      unwatchFns = [];
    });
    Object.assign(instance.proxy, {
      rootRef,
      childRef
    });
    return () => {
      if (canRender.value) {
        const child = [];
        if (props.type === "entity" && image.value) {
          child.push(h(_Entity, {
            ref: childRef,
            show: props.show,
            rectangle: {
              coordinates: coordinates.value,
              material: material.value
            }
          }));
        } else if (props.type === "primitive") {
          child.push(h(VcPrimitiveGround, {
            ref: childRef,
            show: props.show,
            appearance: appearance.value,
            releaseGeometryInstances: false,
            geometryInstances: new Cesium.GeometryInstance({
              geometry: new Cesium.RectangleGeometry({
                rectangle: makeRectangle(coordinates.value)
              })
            })
          }));
        } else if (props.type === "imagery-layer" && image.value) {
          child.push(h(_ImageryLayer, {
            ref: childRef,
            show: props.show,
            imageryProvider: new Cesium.SingleTileImageryProvider({
              url: image.value,
              rectangle: makeRectangle(coordinates.value)
            })
          }));
        }
        return h("i", {
          ref: rootRef,
          class: "vc-overlay-heatmap",
          style: "display: none !important"
        }, child);
      } else {
        return createCommentVNode("v-if");
      }
    };
  }
});

export { OverlayHeatmap as default, heatmapOverlayProps };
//# sourceMappingURL=index.mjs.map
