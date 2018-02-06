/**
 * Insertion sort script
 *
 * NOTE: Be sure to run "npm install" before running "npm start".
 */

 /**
  * Chance is a way to generate pseudo-random data. You'll be using this in
  * future projects, so be sure to read into http://chancejs.com
  */
const random = new (require('chance'));

/**
 * The insertion sort algorithm. You know the drill. Returns the data
 * array completely sorted. This assumes integers.
 */
const insertionSort = (data) => {
  for (let i = 1; i < data.length; i++) {
    let x = data[i];
    let j = i - 1;
    while (j >= 0 && data[j] > x) {
      data[j + 1] = data[j];
      j--;
    }
    data[j + 1] = x;
  }
  return data;
};

// A really easy way to generate 50 random integers in range -50 < x < 50
const sample = random.n(random.integer, 50, {min: -50, max: 50});
console.log(insertionSort(sample));
