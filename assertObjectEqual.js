const eqArrays = require('./eqArrays');


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


