/**
 * Calculates the total inventory value from arrays of quantities and prices.
 *
 * @param {number[]} quantities - The array of product quantities.
 * @param {number[]} prices - The array of product prices.
 * @returns {number} - The total inventory value.
 *
 * @example
 * // returns 650
 * calculateInventoryValue([10, 5, 2], [20, 50, 100]);
 */
export function calculateInventoryValue(quantities, prices) {
  // TODO: Initialize a variable to hold the total inventory value.
  // TODO: Use a for loop to iterate over the quantities array.
  // TODO: Multiply each quantity by the corresponding price and add it to the total value.
  // TODO: Return the total inventory value.
  const total = quantities.reduce((accumulator, quantity, i) => {
    return accumulator + (quantity * prices[i]);
  }, 0);

  // let total = 0;
  // for(let i = 0; i <= quantities.length - 1; i++){
  //   total += quantities[i] * prices[i];
  // }
  return total;
}
