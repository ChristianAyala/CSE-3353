/**
 * Brute force implementation for max subarray problem. For each point
 * in time, look at all future points in time and determine it's delta.
 * Find the largest overall delta, and print that to the console.
 * @param {Array<number>} data An array of numbers representing values
 * over time
 * @returns {object} An object containing three keys:
 * { buy, sell, profit }
 * Where buy is the time (index) to buy, sell is the time (index) to sell,
 * and profit is the maximal profit to be made based on the data array
 */
const bruteForce = (data) => {
  let minIndex;
  let maxIndex;
  let maxDelta = -Infinity;

  // For each point...
  for (let i = 0; i < data.length; i++) {
    // Go through all future points...
    for (let j = i + 1; j < data.length; j++) {
      // Keeping track of the largest delta
      const delta = data[j] - data[i];
      if (delta > maxDelta) {
        minIndex = i;
        maxIndex = j;
        maxDelta = delta;
      }
    }
  }

  return {
    buy: minIndex,
    sell: maxIndex,
    profit: maxDelta,
  };
};

module.exports = {
  bruteForce,
};

