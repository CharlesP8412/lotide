// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅> Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`⛔️> Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const eqArrays = require('./eqArrays');

// const eqArrays = function (arr1, arr2) {
//   // Added length check to catch non starters
//   let arr1Length = arr1.length
//   let arr2Length = arr2.length
//   if (arr1Length === arr2Length) {

//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//       return true;
//     }
//   } else {
//     return false;
//   }
// }


/* //--ORIGINAL --
// Ret true if both obj have same keys and values ELSE false
const eqObjects = function (object1, object2) {
  let status = false;

  //Determine # of Keys and see if they are equal > if NOT rtn FALSE
  const ob1Length = Object.keys(object1).length
  const ob2Length = Object.keys(object2).length
  if (ob1Length !== ob2Length) {
    return false;
  }

  //Iterate Object 1, and Object 2
  for (let key1 in object1) {
    for (let key2 in object2) {
      // Check Keys against eachother
      if (key1 === key2) {
        // Check Key values
        if (object1[key1] === object2[key2]) {
          status = true;
        } else {
          if (eqArrays(object1[key1], object2[key2])) {
            status = true;
          } else {
            return false;
          }
        }
      }
    }
  }
  return status;
};  */

//RECURSION VERSION
//RECUSION CASE: If the object Value is another object (Run the function again)
//BASE CASE: Finish running all keys
const eqObjects = function (object1, object2) {
  let status = false;
  //Determine # of Keys and see if they are equal > if NOT rtn FALSE
  const ob1Length = Object.keys(object1).length;
  const ob2Length = Object.keys(object2).length;
  if (ob1Length !== ob2Length) {
    return false;
  }

  //Iterate Object 1, and Object 2
  for (let key1 in object1) {
    for (let key2 in object2) {

      // Check Keys against eachother
      if (key1 === key2) {
        // Check Key values
        let val1 = object1[key1];
        let val2 = object2[key1];
        if (val1 === val2) {
          status = true;

          //Are they arrays?
        } else if (Array.isArray(val1) && Array.isArray(val2)) {
          status = eqArrays(val1, val2);

          //ARE THEY OBJECTS?
        } else if (typeof val1 === 'object' && typeof val2 === 'object') {

          //RECURSION HERE > ARE THEY OBJECT IF SO RUN AGAIN
          // Put those objects into the function 
          if (eqObjects(val1, val2) === false) {
            return false;
          }
        } else {
          return false;
        }
      }
    }
  }
  return status;
};

module.export = eqObjects;
/* 
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

let test1 = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => true
assertEqual(test1, true)

let test2 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
assertEqual(test2, false)


let test3 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false
assertEqual(test3, false)
 */