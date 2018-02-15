// Entry point for everything. First require everything...
const {generateData} = require('./data-generator');
const {bruteForce} = require('./brute-force');
const {bruteForceWithDeltas} = require('./brute-force-with-deltas');
const {recursiveSolution} = require('./recursive-solution');

const formatOutput = (results) => {
  return `Buy at ${results.buy}, sell at ${results.sell}, for a profit of $${results.profit}`;
};

// Generate some random data...
generateData(100000);

// Load that data...
const data = require('./datapoints.json');

// Run all three. Go!
console.log(formatOutput(bruteForce(data)), '(Brute Force)');
console.log(formatOutput(bruteForceWithDeltas(data)), '(Modified Brute Force)');
console.log(formatOutput(recursiveSolution(data)), '(Recursive)');
