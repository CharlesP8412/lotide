/* 
ReCreate .map()
take 2 arguments 
1. array to map
2. callback function to be used
*/


const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅> Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️> Assertion Failed: ${actual} !== ${expected}`);
  }
}

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["cat", "dog", "mouse", "bird", "elephant"];
const words3 = ["ground", "wind", "fire", "eartgh", "water"];

const map = function(array, callback){

  const results = [];

  for (let item of array){
    results.push(callback(item));
  }
  return results
}

const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);

assertArraysEqual(results1, ['g','c','t','m','t']);
assertArraysEqual(results2, ['c','d','m','b','e']);
assertArraysEqual(results3, ['g','w','f','e','w']);
