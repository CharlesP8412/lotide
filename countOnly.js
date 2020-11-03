/* 
given an array and an object. It will return an object containing counts of everything that the input object listed.

*/

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


module.exports = countOnly;

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];
// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// { Jason: 1, Fang: 2 }

// console.log(result1)


