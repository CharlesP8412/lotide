const assertEqual = function (actual, expected) {
  let passEmoji = String.fromCodePoint(0x2705); // Green Check
  let failEmoji = String.fromCodePoint(0x26D4); // No Entry Emoji

  if (actual === expected) {
    console.log(`${passEmoji}> Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}> Assertion Failed: ${actual} !== ${expected}`);
  }
};
/* assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Computer", "Computer");
assertEqual(1, 1);
assertEqual(4, 1); */

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const s1 = eqArrays([1, 2, 3], [1, 2, 3]) // => true
const s2 = eqArrays([1, 2, 3], [3, 2, 1]) // => false
const s3 = eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
const s4 = eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false); // => should PASS
