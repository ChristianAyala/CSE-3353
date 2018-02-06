
// Define some helper functions here that I intend to use later. These can also be
// objects, strings, classes, etc.
const printFullName = (first, middle, last) => {
  return `${first} ${middle} ${last}`;
};

function somethingElse() {
  console.log('Hello world');
};

/**
 * Anything that you put in module.exports is accessible to other files. Everything
 * else remains private within this file. Typically module.exports is set to an
 * object, so that you can export any number of things.
 *
 * Note that the key for the value does not have to match the name. If it doesn't
 * (like in fName below), then when you require() this file, you use the value
 * via the key (in this case, you call the function printFullName via fName()).
 * Attempting to call printFullName() in another file will cause an error, so use
 * fName.
 *
 * You'll also see the shorthand for somethingElse below. The key AND the value
 * are somethingElse, so Javascript will figure that out for you and let you just
 * use a single word for both.
 */
module.exports = {
  fName: printFullName,
  somethingElse,
};
