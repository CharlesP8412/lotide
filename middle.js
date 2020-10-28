
// Checks if 2 arrays are equal
const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


const assertArraysEqual = function (actual, expected) {
  const passEmoji = String.fromCodePoint(0x2705); // Green Check
  const failEmoji = String.fromCodePoint(0x26D4); // No Entry Emoji
  if (eqArrays(actual, expected) === true) {
    console.log(`${passEmoji}> Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}> Assertion Failed: ${actual} !== ${expected}`);
  }
}

//Take in an array and return the middle-most element(s) of the given array.
/* 
1 or 2 value arrays have no middle thus => []
odd # arrays yield middle
Even arrays yield middle 2 values

 */
const middle = function (arrayToMiddle) {
  let x = arrayToMiddle.length;
  let middleArray = []
  // 1 or 2 length
  if (x <= 2) {
    middleArray = [];

    //Odd
  } else if (x % 2 === 1) {
    let middleOddIndex = ((x / 2 + 0.5) - 1)
    return arrayToMiddle[middleOddIndex];

    //Even length
  } else if (x % 2 === 0) {
    let middleEven = (x / 2) - 1;
    middleArray.push(arrayToMiddle[middleEven])
    middleArray.push(arrayToMiddle[middleEven + 1])
  }

  return middleArray
}



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