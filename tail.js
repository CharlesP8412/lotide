const assertEqual = function(actual, expected) {
  let passEmoji = String.fromCodePoint(0x2705); // Green Check Emoji
  let failEmoji = String.fromCodePoint(0x26D4); // No Entry Emoji

  if (actual.toString() === expected.toString()) {
    console.log(`${passEmoji}> Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}> Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Rtns the tail (everything except the first entry in an array)
const tail = function(arr1) {
  let tailArray = [];
  //Loop starting at 1 instead of 0 > IoT skip the head
  for (let i = 1; i < arr1.length; i++) {
    tailArray.push(arr1[i]);
  }
  return tailArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
const headArr = ['one'];
const emptyArr = [];

tail(words);


assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
assertEqual(words.length,3);
assertEqual(tail(headArr), []);
assertEqual(tail(emptyArr), []);


