'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('./util.js');
var segmentDraw_vert = require('./glsl/segmentDraw.vert.js');
var segmentDraw_frag = require('./glsl/segmentDraw.frag.js');
var fullscreen_vert = require('./glsl/fullscreen.vert.js');
var trailDraw_frag = require('./glsl/trailDraw.frag.js');
var screenDraw_frag = require('./glsl/screenDraw.frag.js');
var customPrimitive = require('./customPrimitive.js');

class ParticlesRendering {
  constructor(context, data, particleSystemOptions, viewerParameters, particlesComputing) {
    this.createRenderingTextures(context, data);
    this.createRenderingFramebuffers(context);
    this.createRenderingPrimitives(context, particleSystemOptions, viewerParameters, particlesComputing);
  }
  createRenderingTextures(context, data) {
    const colorTextureOptions = {
      context,
      width: context.drawingBufferWidth,
      height: context.drawingBufferHeight,
      pixelFormat: Cesium.PixelFormat.RGBA,
      pixelDatatype: Cesium.PixelDatatype.UNSIGNED_BYTE
    };
    const depthTextureOptions = {
      context,
      width: context.drawingBufferWidth,
      height: context.drawingBufferHeight,
      pixelFormat: Cesium.PixelFormat.DEPTH_COMPONENT,
      pixelDatatype: Cesium.PixelDatatype.UNSIGNED_INT
    };
    this.textures = {
      segmentsColor: util.createTexture(colorTextureOptions),
      segmentsDepth: util.createTexture(depthTextureOptions),
      currentTrailsColor: util.createTexture(colorTextureOptions),
      currentTrailsDepth: util.createTexture(depthTextureOptions),
      nextTrailsColor: util.createTexture(colorTextureOptions),
      nextTrailsDepth: util.createTexture(depthTextureOptions)
    };
  }
  createRenderingFramebuffers(context) {
    this.framebuffers = {
      segments: util.createFramebuffer(context, this.textures.segmentsColor, this.textures.segmentsDepth),
      currentTrails: util.createFramebuffer(context, this.textures.currentTrailsColor, this.textures.currentTrailsDepth),
      nextTrails: util.createFramebuffer(context, this.textures.nextTrailsColor, this.textures.nextTrailsDepth)
    };
  }
  createSegmentsGeometry(particleSystemOptions) {
    const repeatVertex = 6;
    const typedArray = [];
    for (let s = 0; s < particleSystemOptions.particlesTextureSize; s++) {
      for (let t = 0; t < particleSystemOptions.particlesTextureSize; t++) {
        for (let i = 0; i < repeatVertex; i++) {
          typedArray.push(s / particleSystemOptions.particlesTextureSize);
          typedArray.push(t / particleSystemOptions.particlesTextureSize);
        }
      }
    }
    const st = new Float32Array(typedArray);
    const normalArray = [];
    const pointToUse = [-1, 0, 1];
    const offsetSign = [-1, 1];
    for (let i = 0; i < particleSystemOptions.maxParticles; i++) {
      for (let j = 0; j < pointToUse.length; j++) {
        for (let k = 0; k < offsetSign.length; k++) {
          normalArray.push(pointToUse[j]);
          normalArray.push(offsetSign[k]);
          normalArray.push(0);
        }
      }
    }
    const normal = new Float32Array(normalArray);
    const indexSize = 12 * particleSystemOptions.maxParticles;
    const vertexIndexes = new Uint32Array(indexSize);
    for (let i = 0, j = 0, vertex = 0; i < particleSystemOptions.maxParticles; i++) {
      vertexIndexes[j++] = vertex + 0;
      vertexIndexes[j++] = vertex + 1;
      vertexIndexes[j++] = vertex + 2;
      vertexIndexes[j++] = vertex + 2;
      vertexIndexes[j++] = vertex + 1;
      vertexIndexes[j++] = vertex + 3;
      vertexIndexes[j++] = vertex + 2;
      vertexIndexes[j++] = vertex + 4;
      vertexIndexes[j++] = vertex + 3;
      vertexIndexes[j++] = vertex + 4;
      vertexIndexes[j++] = vertex + 3;
      vertexIndexes[j++] = vertex + 5;
      vertex += repeatVertex;
    }
    const GeometryAttributes = Cesium.GeometryAttributes;
    const geometry = new Cesium.Geometry({
      attributes: new GeometryAttributes({
        st: new Cesium.GeometryAttribute({
          componentDatatype: Cesium.ComponentDatatype.FLOAT,
          componentsPerAttribute: 2,
          values: st
        }),
        normal: new Cesium.GeometryAttribute({
          componentDatatype: Cesium.ComponentDatatype.FLOAT,
          componentsPerAttribute: 3,
          values: normal
        })
      }),
      indices: vertexIndexes
    });
    return geometry;
  }
  createRenderingPrimitives(context, particleSystemOptions, viewerParameters, particlesComputing) {
    const that = this;
    this.primitives = {
      segments: new customPrimitive["default"]({
        commandType: "Draw",
        attributeLocations: {
          st: 0,
          normal: 1
        },
        geometry: this.createSegmentsGeometry(particleSystemOptions),
        primitiveType: Cesium.PrimitiveType.TRIANGLES,
        uniformMap: {
          previousParticlesPosition: function() {
            return particlesComputing.particlesTextures.previousParticlesPosition;
          },
          currentParticlesPosition: function() {
            return particlesComputing.particlesTextures.currentParticlesPosition;
          },
          postProcessingPosition: function() {
            return particlesComputing.particlesTextures.postProcessingPosition;
          },
          aspect: function() {
            return context.drawingBufferWidth / context.drawingBufferHeight;
          },
          pixelSize: function() {
            return viewerParameters.pixelSize;
          },
          lineWidth: function() {
            return particleSystemOptions.lineWidth;
          },
          particleHeight: function() {
            return particleSystemOptions.particleHeight;
          }
        },
        vertexShaderSource: new Cesium.ShaderSource({
          sources: [segmentDraw_vert["default"]]
        }),
        fragmentShaderSource: new Cesium.ShaderSource({
          sources: [segmentDraw_frag["default"]]
        }),
        rawRenderState: util.createRawRenderState({
          viewport: void 0,
          depthTest: {
            enabled: true
          },
          depthMask: true
        }),
        framebuffer: this.framebuffers.segments,
        autoClear: true
      }),
      trails: new customPrimitive["default"]({
        commandType: "Draw",
        attributeLocations: {
          position: 0,
          st: 1
        },
        geometry: util.getFullscreenQuad(),
        primitiveType: Cesium.PrimitiveType.TRIANGLES,
        uniformMap: {
          segmentsColorTexture: function() {
            return that.textures.segmentsColor;
          },
          segmentsDepthTexture: function() {
            return that.textures.segmentsDepth;
          },
          currentTrailsColor: function() {
            return that.framebuffers.currentTrails.getColorTexture(0);
          },
          trailsDepthTexture: function() {
            return that.framebuffers.currentTrails.depthTexture;
          },
          fadeOpacity: function() {
            return particleSystemOptions.fadeOpacity;
          }
        },
        vertexShaderSource: new Cesium.ShaderSource({
          defines: ["DISABLE_GL_POSITION_LOG_DEPTH"],
          sources: [fullscreen_vert["default"]]
        }),
        fragmentShaderSource: new Cesium.ShaderSource({
          defines: ["DISABLE_LOG_DEPTH_FRAGMENT_WRITE"],
          sources: [trailDraw_frag["default"]]
        }),
        rawRenderState: util.createRawRenderState({
          viewport: void 0,
          depthTest: {
            enabled: true,
            func: Cesium.DepthFunction.ALWAYS
          },
          depthMask: true
        }),
        framebuffer: this.framebuffers.nextTrails,
        autoClear: true,
        preExecute: function() {
          const temp = that.framebuffers.currentTrails;
          that.framebuffers.currentTrails = that.framebuffers.nextTrails;
          that.framebuffers.nextTrails = temp;
          that.primitives.trails.commandToExecute.framebuffer = that.framebuffers.nextTrails;
          that.primitives.trails.clearCommand.framebuffer = that.framebuffers.nextTrails;
        }
      }),
      screen: new customPrimitive["default"]({
        commandType: "Draw",
        attributeLocations: {
          position: 0,
          st: 1
        },
        geometry: util.getFullscreenQuad(),
        primitiveType: Cesium.PrimitiveType.TRIANGLES,
        uniformMap: {
          trailsColorTexture: function() {
            return that.framebuffers.nextTrails.getColorTexture(0);
          },
          trailsDepthTexture: function() {
            return that.framebuffers.nextTrails.depthTexture;
          }
        },
        vertexShaderSource: new Cesium.ShaderSource({
          defines: ["DISABLE_GL_POSITION_LOG_DEPTH"],
          sources: [fullscreen_vert["default"]]
        }),
        fragmentShaderSource: new Cesium.ShaderSource({
          defines: ["DISABLE_LOG_DEPTH_FRAGMENT_WRITE"],
          sources: [screenDraw_frag["default"]]
        }),
        rawRenderState: util.createRawRenderState({
          viewport: void 0,
          depthTest: {
            enabled: false
          },
          depthMask: true,
          blending: {
            enabled: true
          }
        }),
        framebuffer: void 0
      })
    };
  }
}

exports["default"] = ParticlesRendering;
//# sourceMappingURL=particlesRendering.js.map
