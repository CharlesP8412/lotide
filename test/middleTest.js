const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log(assertArraysEqual)


let test1 = middle([1]) // => []
let test2 = middle([1, 2]) // => []
let test3 = middle([1, 2, 3]) // => [2]
let test4 = middle([1, 2, 3, 4, 5]) // => [3]
let test5 = middle([1, 2, 3, 4]) // => [2, 3]
let test6 = middle([1, 2, 3, 4, 5, 6]) // => [3, 4]


assertArraysEqual(test1, [])
assertArraysEqual(test2, [])
assertArraysEqual(test3, [2])
assertArraysEqual(test4, [3])
assertArraysEqual(test5, [2, 3])
assertArraysEqual(test6, [3, 4])