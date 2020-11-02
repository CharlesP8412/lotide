const assertArraysEqual = require('../assertArraysEquals');


assertArraysEqual([10, 2], [10, 2]);
console.log("--Expect Fail --")
assertArraysEqual([10, 2], [10, '2']);