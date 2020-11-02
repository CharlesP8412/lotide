/* 
Take 2 parameters
Array to work with
The Callback 
*/


const takeUntil = function (array, callback) {
  let results = []

  for (let item of array) {
    //CONDITION TRUE
    if (callback(item) === true) {
      return results

    } else {
      results.push(item)
      //Do this until hit the TRUE w. Callback
    }
  }
  return results
}

module.export = takeUntil;

// // INPUT
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);   // Goes until it hits something < 0
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');  //Goes Until it hits a lone comma ,
// console.log(results2);


/*
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]

*/