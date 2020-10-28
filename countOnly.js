/* 
given an array and an object. It will return an object containing counts of everything that the input object listed.

*/

const assertEqual = function (actual, expected) {
  let passEmoji = String.fromCodePoint(0x2705); // Green Check
  let failEmoji = String.fromCodePoint(0x26D4); // No Entry Emoji

  if (actual === expected) {
    console.log(`${passEmoji}> Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}> Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function (allItems, itemsToCount) {
  let tally = {}

  //Loop the itemsToCount object
  for (let keyOfObj in itemsToCount) {
    if (itemsToCount[keyOfObj] !== false) {
      for (let arrItem of allItems) {
        // Cross check and count against array allItems
        if (keyOfObj === arrItem) {
          // Add to the tally if it exits
          if (tally[keyOfObj]) {
            tally[keyOfObj]++
            // If it doesnt exit, Creates the key and adds 1
          } else {
            tally[keyOfObj] = 1
          }
        }
      }
    }
  }
  return tally
}



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


//Assert = can only check one set at a time
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
