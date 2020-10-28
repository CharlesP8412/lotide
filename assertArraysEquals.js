const passEmoji = String.fromCodePoint(0x2705); // Green Check
const failEmoji = String.fromCodePoint(0x26D4); // No Entry Emoji

const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`${passEmoji}> Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}> Assertion Failed: ${actual} !== ${expected}`);
  }
};


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
    console.log(`${passEmoji}> Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}> Assertion Failed: ${actual} !== ${expected}`);
  }
}

console.log(assertArraysEqual([10, 2], [10, '2']));
console.log(assertArraysEqual([10, 2], [10, 2]));