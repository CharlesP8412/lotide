// return all the indices (zero-based positions) in the string where each character is found.
// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
/*
Instead of counting letters, it is marking the index of each occurance

Similar to countLetters but instead of tally it will note the address
Array for each Key
*/


const letterPositions = function(sentence) {
  const results = {};
  const modString = sentence.split(' ').join('');

  //Iterate all letters in modString
  for (let i = 0; i < modString.length; i++) {
    //If the value exits push it to the proper spot
    let currLtr = modString[i];

    if (results[currLtr]) {
      results[currLtr].push(i);

      //If it doesnt exit: CREATE and ARRAY then add the index to That array
    } else {
      results[currLtr] = [];
      results[currLtr].push(i);

    }
  }
  return results;
};
module.export = letterPositions;

let test = 'hello';
// let test = "lighthouse labs in the house";

letterPositions(test);