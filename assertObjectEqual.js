const eqArrays = function(arr1, arr2) {
  // Added length check to catch non starters
  let arr1Length = arr1.length;
  let arr2Length = arr2.length;
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
};


// Ret true if both obj have same keys and values ELSE false
const eqObjects = function(object1, object2) {
  let status = false;

  //Determine # of Keys and see if they are equal > if NOT rtn FALSE
  const ob1Length = Object.keys(object1).length;
  const ob2Length = Object.keys(object2).length;
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

// Assert Objects, instead of comparing true v false, will compare both objects
// EXPECT: ✅✅✅ Assertion Passed: [object Object] === [object Object]
// OR:     🛑🛑🛑 Assertion Failed: [object Object] !== [object Object]
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line  >>  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected) === true) {
    console.log(`✅> Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`⛔️> Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1', c:'2' });
