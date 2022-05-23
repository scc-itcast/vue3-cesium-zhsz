class Pixel {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }
  equals(other) {
    return other && other.x === this.x && other.y === this.y;
  }
}

export { Pixel as default };
//# sourceMappingURL=Pixel.mjs.map
