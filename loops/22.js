/**
 * Finds the maximum element in a nested array.
 *
 * @param {number[][]} arr - The input nested array of numbers.
 * @returns {number} - The maximum element in the nested array.
 *
 * @example
 * // returns 9
 * findMaxNestedArray([[1, 9, 3], [4, 5], [6, 8]]);
 */
export function findMaxNestedArray(arr) {
  // TODO: Initialize a variable to hold the maximum value, starting with the first element of the first inner array.
  // TODO: Use a for loop to iterate over the outer array.
  // TODO: Use another for loop to iterate over each inner array.
  // TODO: For each element, check if it is greater than the current maximum value.
  // TODO: If it is, update the maximum value.
  // TODO: Return the maximum value.
  let max = arr[0][0]
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){ // must start inner loop at 0 not 1, otherwise first element of every sub array is skipped.
      // max = arr[i][j] > max ? max = arr[i][j] : max;
      const currentValue = arr[i][j];
      if(currentValue > max){
        max = currentValue; // assign value in current as max
      }
    }
  }
  return max;
}
