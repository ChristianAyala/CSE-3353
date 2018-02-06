/**
 * Asynchronous functions.
 *
 * Lots of functions within node.js in particular are "asynchronous", meaning
 * they execute on a separate thread. Node uses the "callback" convention for
 * handling this: you start by calling a function with some arguments, and the
 * last argument is a function. That function is called a "callback" because
 * the function is called back on the main thread (get it?), not the spawned
 * thread.
 *
 * There are two main alternatives to this that you are free to research:
 * Promises and async/await.
 */

const fs = require('fs');

/**
 * A function that is meant to process some data. There's nothing special about
 * this function, and this can be arbitrarily complex.
 */
const processMyData = (data) => {
  console.log(data);
};

/**
 * https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
 * The node readFile function is asynchronous.
 * Argument 1: The path and file name you want to read
 * Argument 2: The encoding of the file. Typically utf-8 for text.
 * Argument 3: The callback function. The function should accept two arguments:
 * the first is an error object. On success, the error is null. On error, the
 * err object will contain more data, so we log it out. The second argument
 * is the data from the file itself. If err is null, then data has the contents
 * of the file.
 *
 * In this case, we load and print the package.json file located in the current dir.
 */
fs.readFile('./package.json', 'utf-8', (err, data) => {
  // Good practice: always check to see if err is a non-null value
  if (err) {
    console.error('There was an error', err);

    // This is how you immediately terminate a script
    process.exit(1);
  }

  // data has file contents, so start the processing!
  processMyData(data);
});
