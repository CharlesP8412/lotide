const assertEqual = function(actual, expected) {
  let passEmoji = String.fromCodePoint(0x2705); // Green Check
  let failEmoji = String.fromCodePoint(0x26D4); // No Entry Emoji

  if (actual === expected) {
    console.log(`${passEmoji}> Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}> Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(keys, value) {
  for (let key in keys) {
    // console.log(key) // Shows Genres
    if (keys[key] === value) {
      return key;
    }
  }
};




const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
//findKeyByValue(bestTVShowsByGenre, "The Wire");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
