const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅> Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️> Assertion Failed: ${actual} !== ${expected}`);
  }
};



//Used Recursion to check NESTED ARRAYS
const eqArrays = function(arr1, arr2) {
  let status = false;

  //CHECK LENGTHS otherwise non starter
  if (arr1.length !== arr2.length) {
    return false;
  }

  arr1.forEach(function(element, index) {
    let item1 = arr1[index];
    let item2 = arr2[index];
    //RECURSION CASE,
    if (Array.isArray(item1) && Array.isArray(item2)) {
      status = eqArrays(item1, item2);
    

    //BASE CSE
    } else if (item1 !== item2) {
      status = false;
      return false;
    } else {
      status = true;
    }

  });
  return status;
};


// const s1 = eqArrays([1, 2, 3], [1, 2, 3]) // => true
// const s2 = eqArrays([1, 2, 3], [3, 2, 1]) // => falsestatus

// const s5 = eqArrays([[2, 3], [4]], [[2, 3], [4]]) // => true
// const s6 = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]) // => false
// const s7 = eqArrays([[2, 3], [4]], [[2, 3], 4]) // => false


// console.log(assertEqual(s5, true));
// console.log(assertEqual(s6, false));
// console.log(assertEqual(s7, false));// --
// const eqArrays = function (arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }