const eqArrays = require('./eqArrays');


const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅> Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️> Assertion Failed: ${actual} !== ${expected}`);
  }
}


module.exports = assertArraysEqual


// assertArraysEqual([10, 2], [10, 2]);
// assertArraysEqual([10, 2, 1, 4], [10, 2, 1, 4]);
// assertArraysEqual([11, 2], [11, 2]);


// let test1 = []
// let test2 = []
// let test3 = [2]
// let test4 = [3]
// let test5 = [2, 3]
// let test6 = [3, 4]


// assertArraysEqual(test1, [])
// assertArraysEqual(test2, [])
// assertArraysEqual(test3, [2])
// assertArraysEqual(test4, [3])
// assertArraysEqual(test5, [2, 3])
// assertArraysEqual(test6, [3, 4])

// console.log("--Expect to Fail --")
// assertArraysEqual([10, 2], [10, '2']);