const transform = require('./transform.js');
const {findMaxCrossingSubarray} = require('./find-maximum-crossing-subarray.js');

/**
 * Entry point for the recursive solution to the maximum subarray problem.
 * As discussed in class, we find the max subarray on the left, the right,
 * and what crosses the middle. The largest profit of the three is what is
 * returned on each recursive call.
 * @param {Array<number>} deltas The deltas generated by the transform function
 * @param {number} low The low index of what we're analyzing
 * @param {number} high The high index of what we're analyzing
 */
function findMaximumSubarray(deltas, low, high) {
  // Base case, we have one element
  if (low >= high) {
    return {
      buy: low,
      sell: high,
      profit: deltas[low],
    };
  }

  // Do the recursive bits
  const mid = Math.floor((low + high) / 2);
  const leftResult = findMaximumSubarray(deltas, low, mid);
  const rightResult = findMaximumSubarray(deltas, mid + 1, high);
  const middleResult = findMaxCrossingSubarray(deltas, low, mid, high);

  // Find the largest profit of the three
  if (leftResult.profit > rightResult.profit && leftResult.profit > middleResult.profit) {
    return leftResult;
  }
  if (rightResult.profit > leftResult.profit && rightResult.profit > middleResult.profit) {
    return rightResult;
  }
  return middleResult;
}

/**
 * Entry point for the recursive function. First applies the transform function
 * then kicks off the recursive solution.
 * @param {Array<number>} data An array of numbers representing values
 * over time
 * @returns {object} An object containing three keys:
 * { buy, sell, profit }
 * Where buy is the time (index) to buy, sell is the time (index) to sell,
 * and profit is the maximal profit to be made based on the data array
 */
const recursiveSolution = (data) => {
  const deltas = transform(data);
  const result = findMaximumSubarray(deltas, 0, deltas.length - 1);
  return result;
};

module.exports = {
  recursiveSolution,
};
