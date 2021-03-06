
const findKeyByValue = function(keys, value) {
  for (let key in keys) {
    // console.log(key) // Shows Genres
    if (keys[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;


// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };
// //findKeyByValue(bestTVShowsByGenre, "The Wire");

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
