const assertEqual = function(actual, expected) {
  let passEmoji = String.fromCodePoint(0x2705); // Green Check
  let failEmoji = String.fromCodePoint(0x26D4); // No Entry Emoji

  if (actual === expected) {
    console.log(`${passEmoji}> Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}> Assertion Failed: ${actual} === ${expected}`);
  }
};

//Function to return first addr in an array (the 'Head')
const head = function(arr1) {
  return arr1[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([55]), 55);
assertEqual(head([]), undefined);