/**
 * A Student class with name, grades array, and average calculation.
 */
export class Student {
  /**
   * @param {string} name - The student's name.
   */
  constructor(name) {
    // TODO: Store name as a property.
    // TODO: Initialize an empty array for grades.
    this.name = name;
    this.grades = [];
  }

  /**
   * Adds a grade to the student's record.
   * @param {number} grade - The grade to add.
   */
  addGrade(grade) {
    // TODO: Add the grade to the grades array.
    this.grades.push(grade);
  }

  /**
   * Calculates the average grade.
   * @returns {number} - The average of all grades.
   */
  getAverage() {
    // TODO: Calculate and return the average of the grades array.
    // TODO: Return 0 if there are no grades.
    if(this.grades.length <= 0){
      return 0;
    }
    let sum = 0
    for(let i = 0; i < this.grades.length; i++){
      sum += this.grades[i] 
    }
    let avg = sum / this.grades.length;
    return avg;
  }
}
