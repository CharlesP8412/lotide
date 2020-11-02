const passEmoji = String.fromCodePoint(0x2705); // Green Check
const failEmoji = String.fromCodePoint(0x26D4); // No Entry Emoji

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`${passEmoji}> Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}> Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Compare 2 arrays rtn true or false
const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


//Assertion for 2x arrays w. Message (actual and expected will not show exact diffrencs if its type)
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`${passEmoji}> Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}> Assertion Failed: ${actual} !== ${expected}`);
  }
};


const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    let match = false; //bool to see if an index of source can be found in itemsToRemove
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        match = true;
      }
    }
    if (!match) {
      newArray.push(source[i]);
    }
  }
};

module.export = without;
/* 
const test1 = without([1, 2, 3], [1]) // => [2, 3]
const test2 = (without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
const test3 = (without(["1", "2", "3"], [1, 2, "3","2"])) // => ["1", ]
assertArraysEqual(test1, [2, 3])
assertArraysEqual(test2, ['1', '2'])
assertArraysEqual(test3, ['1', '2'])
 */

const words = ["hello", "world", "lighthouse"];

without(words, ["lighthouse"]); // no need to capture return value for this test case
console.log("POST W/o: " +words)

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
