/* 
Takes in an object and a callback
scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined. 
*/

//Scan Object rtn first key
const findKey = function(object, callback) {
  for (let key in object) {   
    if (callback(object[key]) === true) {
      return key;
    }
  }
};
module.exports = findKey;
/* 
let testCase = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"

let testCase2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 4 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 5 }
}, x => x.stars === 5) // => "noma"

let testCase3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 2 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(testCase, 'noma');
assertEqual(testCase2, 'Akelarre');
assertEqual(testCase3, 'Akaleri');
 */