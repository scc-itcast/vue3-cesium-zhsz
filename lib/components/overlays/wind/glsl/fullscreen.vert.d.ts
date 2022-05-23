declare const text = "\nattribute vec3 position;\nattribute vec2 st;\n\nvarying vec2 textureCoordinate;\n\nvoid main() {\n    textureCoordinate = st;\n    gl_Position = vec4(position, 1.0);\n}\n";
export default text;
