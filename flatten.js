const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

// flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

function flatten(array) {
  let newArray = [];
  array.forEach(item => {
    if (Array.isArray(item)) {
      if (item.length > 0) {
        for (subItem of item) {
          newArray.push(subItem)
        }
      } else {
        flatten(item);
      }
    } else {
      newArray.push(item);
    }
  });
  return newArray;
};

module.exports = flatten;
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]

let test1 = [1, 2, 3, 4, 5];
let test2 = [[1, 2, [[3], 4]], 5, []];
let test3 = [[[[[[[[[[[[[1]]]]]]]]]]]]];
let testx = [2, 1, [3, 4], 3];
console.log(">> ", flatten(test1));
console.log(">> ", flatten(test2));
console.log(">> ", flatten(test3));
console.log(">> ", flatten(testx));
