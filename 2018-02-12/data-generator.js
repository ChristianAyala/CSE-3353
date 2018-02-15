const fs = require('fs');
const random = new (require('chance'));

const generateData = (size) => {
  const data = random.n(random.integer, size, {min: -10000000, max: 10000000});
  fs.writeFileSync('./datapoints.json', JSON.stringify(data));
};

module.exports = {
  generateData,
};
