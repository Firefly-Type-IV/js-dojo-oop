/**
 * A Shape base class and Rectangle subclass with area calculation.
 */
export class Shape {
  /**
   * Gets the area of the shape.
   * @returns {number} - The area.
   */
  getArea() {
    // TODO: Return 0 as a default implementation.
    return 0
  }
}

/**
 * A Rectangle class that extends Shape.
 */
export class Rectangle extends Shape {
  /**
   * @param {number} width - The rectangle's width.
   * @param {number} height - The rectangle's height.
   */
  constructor(width, height) {
    // TODO: Call super() to invoke the parent constructor.
    // TODO: Store width and height as properties.
    super(width, height)
    // The super() method calls the parent class's constructor, passing in any arguments that are needed for the parent class's constructor.
    this.width = width;
    this.height = height;
  }

  /**
   * Gets the area of the rectangle.
   * @returns {number} - The area.
   */
  getArea() {
    // TODO: Return width * height.
    return this.width * this.height;
  }
  // Use inheritance to promote an 'is a' relationship between objects and promote code reuse and common behaviour i.e. savings account 'is a' type of account. For every piece of shared functionality a new method doesn't have to be created
  // polymorphism 'many forms'allows objects of different classes to be treated as common type.. elaborate
  // method overriding - powerful, sub class provides a specific implementation for a method that is already defined in its super class. In previous example dog reused makeSound() method but returned barks.
}
