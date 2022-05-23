'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('./util.js');
var calculateSpeed_frag = require('./glsl/calculateSpeed.frag.js');
var updatePosition_frag = require('./glsl/updatePosition.frag.js');
var postProcessingPosition_frag = require('./glsl/postProcessingPosition.frag.js');
var customPrimitive = require('./customPrimitive.js');

class ParticlesComputing {
  constructor(context, data, particleSystemOptions, viewerParameters) {
    this.data = data;
    this.createWindTextures(context, data);
    this.createParticlesTextures(context, particleSystemOptions, viewerParameters);
    this.createComputingPrimitives(data, particleSystemOptions, viewerParameters);
  }
  createWindTextures(context, data) {
    const windTextureOptions = {
      context,
      width: data.dimensions.lon,
      height: data.dimensions.lat * data.dimensions.lev,
      pixelFormat: Cesium.PixelFormat.LUMINANCE,
      pixelDatatype: Cesium.PixelDatatype.FLOAT,
      flipY: false,
      sampler: new Cesium.Sampler({
        minificationFilter: Cesium.TextureMinificationFilter.NEAREST,
        magnificationFilter: Cesium.TextureMagnificationFilter.NEAREST
      })
    };
    this.windTextures = {
      U: util.createTexture(windTextureOptions, data.U.array),
      V: util.createTexture(windTextureOptions, data.V.array)
    };
  }
  createParticlesTextures(context, particleSystemOptions, viewerParameters) {
    const particlesTextureOptions = {
      context,
      width: particleSystemOptions.particlesTextureSize,
      height: particleSystemOptions.particlesTextureSize,
      pixelFormat: Cesium.PixelFormat.RGBA,
      pixelDatatype: Cesium.PixelDatatype.FLOAT,
      flipY: false,
      sampler: new Cesium.Sampler({
        minificationFilter: Cesium.TextureMinificationFilter.NEAREST,
        magnificationFilter: Cesium.TextureMagnificationFilter.NEAREST
      })
    };
    const particlesArray = this.randomizeParticles(particleSystemOptions.maxParticles, viewerParameters);
    const zeroArray = new Float32Array(4 * particleSystemOptions.maxParticles).fill(0);
    this.particlesTextures = {
      previousParticlesPosition: util.createTexture(particlesTextureOptions, particlesArray),
      currentParticlesPosition: util.createTexture(particlesTextureOptions, particlesArray),
      nextParticlesPosition: util.createTexture(particlesTextureOptions, particlesArray),
      postProcessingPosition: util.createTexture(particlesTextureOptions, particlesArray),
      particlesSpeed: util.createTexture(particlesTextureOptions, zeroArray)
    };
  }
  randomizeParticles(maxParticles, viewerParameters) {
    const array = new Float32Array(4 * maxParticles);
    for (let i = 0; i < maxParticles; i++) {
      array[4 * i] = Cesium.Math.randomBetween(viewerParameters.lonRange.x, viewerParameters.lonRange.y);
      array[4 * i + 1] = Cesium.Math.randomBetween(viewerParameters.latRange.x, viewerParameters.latRange.y);
      array[4 * i + 2] = Cesium.Math.randomBetween(this.data.lev.min, this.data.lev.max);
      array[4 * i + 3] = 0;
    }
    return array;
  }
  destroyParticlesTextures() {
    Object.keys(this.particlesTextures).forEach((key) => {
      this.particlesTextures[key].destroy();
    });
  }
  createComputingPrimitives(data, particleSystemOptions, viewerParameters) {
    const dimension = new Cesium.Cartesian3(data.dimensions.lon, data.dimensions.lat, data.dimensions.lev);
    const minimum = new Cesium.Cartesian3(data.lon.min, data.lat.min, data.lev.min);
    const maximum = new Cesium.Cartesian3(data.lon.max, data.lat.max, data.lev.max);
    const interval = new Cesium.Cartesian3((maximum.x - minimum.x) / (dimension.x - 1), (maximum.y - minimum.y) / (dimension.y - 1), dimension.z > 1 ? (maximum.z - minimum.z) / (dimension.z - 1) : 1);
    const uSpeedRange = new Cesium.Cartesian2(data.U.min, data.U.max);
    const vSpeedRange = new Cesium.Cartesian2(data.V.min, data.V.max);
    const that = this;
    this.primitives = {
      calculateSpeed: new customPrimitive["default"]({
        commandType: "Compute",
        uniformMap: {
          U: function() {
            return that.windTextures.U;
          },
          V: function() {
            return that.windTextures.V;
          },
          currentParticlesPosition: function() {
            return that.particlesTextures.currentParticlesPosition;
          },
          dimension: function() {
            return dimension;
          },
          minimum: function() {
            return minimum;
          },
          maximum: function() {
            return maximum;
          },
          interval: function() {
            return interval;
          },
          uSpeedRange: function() {
            return uSpeedRange;
          },
          vSpeedRange: function() {
            return vSpeedRange;
          },
          pixelSize: function() {
            return viewerParameters.pixelSize;
          },
          speedFactor: function() {
            return particleSystemOptions.speedFactor;
          }
        },
        fragmentShaderSource: new Cesium.ShaderSource({
          sources: [calculateSpeed_frag["default"]]
        }),
        outputTexture: this.particlesTextures.particlesSpeed,
        preExecute: function() {
          const temp = that.particlesTextures.previousParticlesPosition;
          that.particlesTextures.previousParticlesPosition = that.particlesTextures.currentParticlesPosition;
          that.particlesTextures.currentParticlesPosition = that.particlesTextures.postProcessingPosition;
          that.particlesTextures.postProcessingPosition = temp;
          that.primitives.calculateSpeed.commandToExecute.outputTexture = that.particlesTextures.particlesSpeed;
        }
      }),
      updatePosition: new customPrimitive["default"]({
        commandType: "Compute",
        uniformMap: {
          currentParticlesPosition: function() {
            return that.particlesTextures.currentParticlesPosition;
          },
          particlesSpeed: function() {
            return that.particlesTextures.particlesSpeed;
          }
        },
        fragmentShaderSource: new Cesium.ShaderSource({
          sources: [updatePosition_frag["default"]]
        }),
        outputTexture: this.particlesTextures.nextParticlesPosition,
        preExecute: function() {
          that.primitives.updatePosition.commandToExecute.outputTexture = that.particlesTextures.nextParticlesPosition;
        }
      }),
      postProcessingPosition: new customPrimitive["default"]({
        commandType: "Compute",
        uniformMap: {
          nextParticlesPosition: function() {
            return that.particlesTextures.nextParticlesPosition;
          },
          particlesSpeed: function() {
            return that.particlesTextures.particlesSpeed;
          },
          lonRange: function() {
            return viewerParameters.lonRange;
          },
          latRange: function() {
            return viewerParameters.latRange;
          },
          randomCoefficient: function() {
            const randomCoefficient = Math.random();
            return randomCoefficient;
          },
          dropRate: function() {
            return particleSystemOptions.dropRate;
          },
          dropRateBump: function() {
            return particleSystemOptions.dropRateBump;
          }
        },
        fragmentShaderSource: new Cesium.ShaderSource({
          sources: [postProcessingPosition_frag["default"]]
        }),
        outputTexture: this.particlesTextures.postProcessingPosition,
        preExecute: function() {
          that.primitives.postProcessingPosition.commandToExecute.outputTexture = that.particlesTextures.postProcessingPosition;
        }
      })
    };
  }
}

exports["default"] = ParticlesComputing;
//# sourceMappingURL=particlesComputing.js.map
