const assertEqual = function (actual, expected) {
  let passEmoji = String.fromCodePoint(0x2705); // Green Check
  let failEmoji = String.fromCodePoint(0x26D4); // No Entry Emoji
  

  if (actual === expected) {
    console.log(`${passEmoji}> Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}> Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
// Added length check to catch non starters
  let arr1Length = arr1.length
  let arr2Length = arr2.length
  if (arr1Length === arr2Length) {

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
      return true;
    }
  } else {
    return false;
  }
}


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
  for (let val1 in object1) {
    for (let val2 in object2) {
      // Check Keys against eachother
      if (val1 === val2) {
        // Check Key values
        if (object1[val1] === object2[val2]) {
          status = true;
        } else {
          if (eqArrays(object1[val1], object2[val2])) {
            status = true;
          } else {
            return false;
          }
        }
      }
    }
  }
  return status;
};



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


// ??? Passes assertion but unsure if I am on the right track / or if I am taking the long road to get there
// Also how do I get emojis (pictures) directly in VSCode ()