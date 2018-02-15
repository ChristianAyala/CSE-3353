/**
 * Transform function as defined in class. It computes deltas (a.k.a profit
 * or loss) between point i and point i+1. We will use this in various places
 * @param {Array<number>} data An array of numbers representing values
 * at a particular point in time.
 * @returns {Array<number>} An array of deltas, of size n-1
 */
const transform = (data) => {
  const deltas = [];
  for (let i = 0; i < data.length - 1; i++) {
    deltas.push(data[i + 1] - data[i]);
  }
  return deltas;
};

module.exports = transform;
