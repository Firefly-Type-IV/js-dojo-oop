/**
 * A Point class representing a 2D coordinate.
 */
export class Point {
  /**
   * @param {number} x - The x coordinate.
   * @param {number} y - The y coordinate.
   */
  constructor(x, y) {
    // TODO: Store x and y as properties.
    this.x = x;
    this.y = y; 
  }

  /**
   * Calculates the distance from this point to another point.
   * @param {Point} other - Another Point instance.
   * @returns {number} - The distance between the points.
   *
   * @example
   * const p1 = new Point(0, 0);
   * const p2 = new Point(3, 4);
   * p1.distanceTo(p2); // returns 5
   */
  distanceTo(other) {
    // TODO: Calculate distance using the formula: sqrt((x2-x1)² + (y2-y1)²)
    // TODO: Use Math.sqrt and Math.pow
    this.x
    this.y
    other.x // another instance of the Point parent class
    other.y
    // subtraction, squaring (Math.pow), addition, square root (Math.sqrt)
    // Pythagorean theorem a squared plus b squared equals c squared, we want hypotenuse
    let deltaX = other.x - this.x
    let deltaY = other.y - this.y
    // using the legs of triangle, apply math.pow to square difference in x and y by 2
    const distanceSquared = Math.pow(deltaX, 2) + Math.pow(deltaY, 2)
    // output c/hypotenuse/distance
    const distance =  Math.sqrt(distanceSquared)
    return distance
    // variables and functions are camelCase, classes are PascalCase, constants are SCREAMING_SNAKE_CASE
  }
}
