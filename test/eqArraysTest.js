const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');



const s1 = eqArrays([1, 2, 3], [1, 2, 3]) // => true
const s2 = eqArrays([1, 2, 3], [3, 2, 1]) // => falsestatus
const s5 = eqArrays([[2, 3], [4]], [[2, 3], [4]]) // => true
const s6 = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]) // => false
const s7 = eqArrays([[2, 3], [4]], [[2, 3], 4]) // => false

assertEqual(s1, true);
assertEqual(s2, false);
assertEqual(s5, true);
assertEqual(s6, false);
assertEqual(s7, false);
