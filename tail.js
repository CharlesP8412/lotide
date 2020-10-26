const assertEqual = function(actual, expected) {
  let passEmoji = String.fromCodePoint(0x2705); // Green Check Emoji
  let failEmoji = String.fromCodePoint(0x26D4); // No Entry Emoji

  if (actual.toString() === expected.toString()) {
    console.log(`${passEmoji}> Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}> Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr1) {
  return arr1.slice(1);
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
const headArr = ['one'];
const emptyArr = [];

tail(words);

assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
assertEqual(words.length, 3);
assertEqual(words.length, 5);
assertEqual(tail(headArr), []);
assertEqual(tail(emptyArr), []);
assertEqual(tail(words), ['other words', 'hi']);