
const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    let match = false; //bool to see if an index of source can be found in itemsToRemove
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        match = true;
      }
    }
    if (!match) {
      newArray.push(source[i]);
    }
  }
};

module.export = without;
/* 
const test1 = without([1, 2, 3], [1]) // => [2, 3]
const test2 = (without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
const test3 = (without(["1", "2", "3"], [1, 2, "3","2"])) // => ["1", ]
assertArraysEqual(test1, [2, 3])
assertArraysEqual(test2, ['1', '2'])
assertArraysEqual(test3, ['1', '2'])
 */

// const words = ["hello", "world", "lighthouse"];

// without(words, ["lighthouse"]); // no need to capture return value for this test case
// console.log("POST W/o: " +words)

// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
