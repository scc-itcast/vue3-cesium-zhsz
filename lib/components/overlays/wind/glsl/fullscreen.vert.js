'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const text = `
attribute vec3 position;
attribute vec2 st;

varying vec2 textureCoordinate;

void main() {
    textureCoordinate = st;
    gl_Position = vec4(position, 1.0);
}
`;

exports["default"] = text;
//# sourceMappingURL=fullscreen.vert.js.map
