// IMPORTS functions 
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByvalue = require('./findKeyByvalue');
// const flatten = require('./flatten');  - WiP: uncomment when completed and in exports as well
const head = require('./head');
const index = require('./index');
const letterPosition = require('./letterPosition');
const map = require('./map');
const middle = require('./middle');
const tail = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');


//Exports the list as a single object
module.exports = {
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByvalue: findKeyByvalue,
  // flatten: flatten,
  head: head,
  index: index,
  letterPosition: letterPosition,
  map: map,
  middle: middle,
  tail: tail,
  takeUntil: takeUntil,
  without: without

};