// IMPORTS functions 
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
// const flatten = require('./flatten');  - WiP: uncomment when completed and in exports as well
const head = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const tail = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');

//Exports the list as a single object
module.exports = {
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  // flatten: flatten,
  head,
  letterPositions,
  map,
  middle,
  tail,
  takeUntil,
  without

};

