/**
 * Finds the minimum element in an array.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} - The minimum element in the array.
 *
 * @example
 * // returns 1
 * findMin([1, 2, 3, 4, 5]);
 */
export function findMin(arr) {
  // TODO: Initialize a variable to hold the minimum value, starting with the first element of the array.
  // TODO: Use a for loop to iterate over the elements of the array.
  // TODO: For each element, check if it is less than the current minimum value.
  // TODO: If it is, update the minimum value.
  // TODO: Return the minimum value.
  if (arr.length === 0){
    return undefined;
  }
  let min = arr[0];
  for(let i = 1; i <= arr.length - 1; i++){
    // min = arr[i] < min ? min = arr[i] : min;
    if(arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}
