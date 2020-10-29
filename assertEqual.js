const assertEqual = function(actual, expected) {
//   let passEmoji = String.fromCodePoint(0x2705); // Green Check
//   let failEmoji = String.fromCodePoint(0x26D4); // No Entry Emoji

  if (actual === expected) {
    console.log(`✅> Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️> Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Computer", "Computer");
assertEqual(1, 1);
assertEqual(4, 1);
