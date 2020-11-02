//--!!!--BUG: cant handle two empty arrays [],[]
//  particularly when fed from other functions.  
//ACTION: Add check case if empty to give an error


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

console.log(eqArrays([1], [1]))
module.exports = eqArrays;
