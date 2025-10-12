/**
 * Calculates the sum of elements in each row of a nested array.
 *
 * @param {number[][]} arr - The input nested array of numbers.
 * @returns {number[]} - An array of sums for each row.
 *
 * @example
 * // returns [6, 9, 6]
 * rowSums([[1, 2, 3], [4, 5], [6]]);
 */
export function rowSums(arr) {
  // TODO: Initialize a new array to hold the row sums.
  // TODO: Use a for loop to iterate over the outer array.
  // TODO: For each inner array, initialize a variable to hold the sum of the row.
  // TODO: Use another for loop to iterate over each element in the inner array and add it to the row sum.
  // TODO: Add the row sum to the new array.
  // TODO: Return the new array.
  // let sum = [];
  // for(let i = 0; i < arr.length; i++){
  //   let rowSum = 0 // to add rows sum at first loop, initialise variable after the outer loop to ensure it is reset for each row.
  //   // This ensures the current sum is set back to zero before processing every new row, if outside it would accumulate the sum of all elements.
  //   for(let j = 0; j < arr[i].length; j++){
  //     rowSum += arr[i][j];
  //   }
  //   sum.push(rowSum)
  // }
  // return sum;
  return arr.map(row => {
    return row.reduce((acc, currentValue) => acc + currentValue, 0);
  })
}
