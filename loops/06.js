/**
 * Counts how many numbers smaller than the given input are divisible by 3.
 *
 * @param {number} input - The input number.
 * @returns {number} - The count of numbers divisible by 3.
 *
 * @example
 * // returns 1
 * countDivisibleBy3(5);
 */
export function countDivisibleBy3(input) {
  // TODO: Initialize a variable to hold the count.
  // TODO: Use a for loop to iterate from 1 to one less than the input number.
  // TODO: Check if the current number is divisible by 3.
  // TODO: If it is, increment the count variable.
  // TODO: Return the count.
  let count = 0;
  for(let i = 1; i < input; i++){
    const multipleOfThree = i % 3 === 0 ? count += 1 : count += 0;
  }
  return count;
}
