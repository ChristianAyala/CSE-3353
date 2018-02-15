const transform = require('./transform.js');

/**
 * A modification of the normal brute-force algorithm. We first apply
 * the transform function, computing deltas between each data point.
 * Based on that, we can apply fundamentally the same logic to figure
 * out the max subarray, and therefore max profit.
 *
 * @param {Array<number>} data An array of numbers representing values
 * over time
 * @returns {object} An object containing three keys:
 * { buy, sell, profit }
 * Where buy is the time (index) to buy, sell is the time (index) to sell,
 * and profit is the maximal profit to be made based on the data array
 */
const bruteForceWithDeltas = (data) => {
  // First apply the transform function
  const deltas = transform(data);

  let minIndex;
  let maxIndex;
  let maxDelta = -Infinity;

  // For each delta...
  for (let i = 0; i < deltas.length; i++) {
    let currentDelta = 0;
    // Add on each delta and see if it increases profits
    for (let j = i; j < deltas.length; j++) {
      currentDelta += deltas[j];
      if (currentDelta > maxDelta) {
        minIndex = i;
        maxIndex = j + 1;
        maxDelta = currentDelta;
      }
    };
  }

  return {
    buy: minIndex,
    sell: maxIndex,
    profit: maxDelta,
  };
};

module.exports = {
  bruteForceWithDeltas,
};
