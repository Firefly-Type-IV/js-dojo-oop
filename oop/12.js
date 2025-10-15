/**
 * A Person class with private age using encapsulation.
 */
export class Person {
  #age // ensures age variable can only be accessed and modified inside the class itself. Encapsulation
  /**
   * @param {string} name - The person's name.
   * @param {number} age - The person's age.
   */
  constructor(name, age) {
    // TODO: Store name as a public property.
    // TODO: Store age as a private property using # prefix (e.g., #age).
    // Define private properties at the very top of the class
    this.name = name;
    this.#age = age;
  }

  /**
   * Gets the person's age.
   * @returns {number} - The age.
   */
  getAge() {
    // TODO: Return the private age property.
    return this.#age;
    // Use dot notation with # prefix to modify the property from within the class's own method.
    // Private properties can be accessed directly for example bathroomLight.#brightness would result in an error.
  }

  /**
   * Sets a new age.
   * @param {number} newAge - The new age.
   */
  setAge(newAge) {
    // TODO: Update the private age property if newAge is positive.
    if(newAge <= 0){
      // return
      // Throwing an error is generally better for validation because it immediately tells the programmer/caller/user that they have used the method incorrectly, rather than silently ignoring the invalid input.
      throw new Error(`newAge '${newAge}' must be a positive integer.`)
    }
    this.#age = newAge;
    // new Person.setAge = newAge; this calls setAge(newAge)
  }
}
