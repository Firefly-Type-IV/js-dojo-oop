/**
 * A static utility class for mathematical operations.
 */
export class MathUtils {
  /**
   * Calculates the maximum of two numbers.
   * @param {number} a - First number.
   * @param {number} b - Second number.
   * @returns {number} - The maximum value.
   *
   * @example
   * // returns 10
   * MathUtils.max(5, 10);
   */
  static max(a, b) {
    // TODO: Return the larger of the two numbers.
    if(b > a){
      return b
    }
    return a
  }

  /**
   * Calculates the minimum of two numbers.
   * @param {number} a - First number.
   * @param {number} b - Second number.
   * @returns {number} - The minimum value.
   */
  // no instances are created, so this or constructors are unneccesary
  static min(a, b) {
    // TODO: Return the smaller of the two numbers.
    if(b < a){
      return b
    }
    return a
  }
}
