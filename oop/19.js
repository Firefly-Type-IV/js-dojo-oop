/**
 * A Vector2D class with operator-like methods.
 */
export class Vector2D {
  /**
   * @param {number} x - The x component.
   * @param {number} y - The y component.
   */
  constructor(x, y) {
    // TODO: Store x and y as properties.
    this.x = x;
    this.y = y;
  }

  /**
   * Adds another vector to this vector.
   * @param {Vector2D} other - Another Vector2D instance.
   * @returns {Vector2D} - A new Vector2D with the sum.
   *
   * @example
   * const v1 = new Vector2D(1, 2);
   * const v2 = new Vector2D(3, 4);
   * const v3 = v1.add(v2); // v3 is (4, 6)
   */
  add(other) {
    // TODO: Return a new Vector2D with x and y components added.
    let X = other.x + this.x;
    let Y = other.y + this.y;
    return new Vector2D(X, Y)
  }

  /**
   * Calculates the magnitude (length) of the vector.
   * @returns {number} - The magnitude.
   */
  magnitude() {
    // TODO: Return sqrt(x² + y²) using Math.sqrt and Math.pow.
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}
