/**
 * An Employee class and Manager subclass with salary management.
 */
export class Employee {
  /**
   * @param {string} name - The employee's name.
   * @param {number} salary - The base salary.
   */
  constructor(name, salary) {
    // TODO: Store name and salary as properties.
    this.name = name;
    this.salary = salary;
  }

  /**
   * Gets the annual salary.
   * @returns {number} - The annual salary.
   */
  getAnnualSalary() {
    // TODO: Return the salary.
    const sal = this.salary;
    return sal;
  }
}

/**
 * A Manager class that extends Employee with a bonus.
 */
export class Manager extends Employee {
  /**
   * @param {string} name - The manager's name.
   * @param {number} salary - The base salary.
   * @param {number} bonus - The annual bonus.
   */
  constructor(name, salary, bonus) {
    // TODO: Call super with name and salary.
    // TODO: Store bonus as a property.
    // Manager is a sub class/ child class of of Employee, so you must call super() before this in the constructor
    super(name, salary, bonus);
    // this.nam = name;
    // this.sal = salary;
    this.bon = bonus;
  }

  /**
   * Gets the total annual salary including bonus.
   * @returns {number} - The total annual salary.
   */
  getAnnualSalary() {
    // TODO: Return salary + bonus (use super.getAnnualSalary() + this.bonus).
    // return this.sal + this.bon
    return super.getAnnualSalary() + this.bon;
    // access parent methods, without parentheses acts as a reference to the prototype of the parent class
  }
}
