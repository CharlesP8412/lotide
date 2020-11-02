// const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([10, 2], [10, 2]);
assertArraysEqual([10, 2, 1, 4], [10, 2, 1, 4]);
assertArraysEqual([11, 2], [11, 2]);
console.log("--Expect to Fail --")
assertArraysEqual([10, 2], [10, '2']);

let test1 = []
let test2 = []
let test3 = [2]
let test4 = [3]
let test5 = [2, 3]
let test6 = [3, 4]


assertArraysEqual(test1, [])
assertArraysEqual(test2, [])
assertArraysEqual(test3, [2])
assertArraysEqual(test4, [3])
assertArraysEqual(test5, [2, 3])
assertArraysEqual(test6, [3, 4])
/*
describe("#assertArraysEqual", () => {

  it("", () => {
    assert.DeepStrictEqual();
  });

  it("", () => {
    assert.DeepStrictEqual();
  });

  it("", () => {
    assert.DeepStrictEqual();
  });

  it("", () => {
    assert.DeepStrictEqual();
  });

  it("", () => {
    assert.DeepStrictEqual();
  });

  it("", () => {
    assert.DeepStrictEqual();
  });

  
});

*/