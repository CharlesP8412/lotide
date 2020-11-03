const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅> Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️> Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;

// assertEqual("Computer", "Computer");
// assertEqual(1, 1);
// console.log("--Expect to fail--")
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(4, 1);

