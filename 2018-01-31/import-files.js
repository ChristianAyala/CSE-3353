
/**
 * Here we load the file, located in the current directory. We do a fancy technique
 * called "destructuring": we extract out the keys we're interested in, which in
 * this case are the somethingElse and fName functions.
 *
 * The alternative is to do the following:
 *
 * const utilities = require('./utilities');
 * utilities.somethingElse();
 * ....
 *
 * Which is slightly more verbose
 */
const {somethingElse, fName} = require('./utilities');

somethingElse();
fName('Chris', '', 'Ayala');
