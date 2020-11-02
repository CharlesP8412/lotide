const middle = require('../middle');
const assert = require('chai').assert;
// const assertArraysEqual = require('../assertArraysEqual');



// assertArraysEqual(test1, [])
// assertArraysEqual(test2, [])
// assertArraysEqual(test3, [2])
// assertArraysEqual(test4, [3])
// assertArraysEqual(test5, [2, 3])
// assertArraysEqual(test6, [3, 4])

describe("#middle", () => {

  const test1 = middle([1]) // => []
  const test2 = middle([1, 2]) // => []
  const test3 = middle([1, 2, 3]) // => [2]
  const test4 = middle([1, 2, 3, 4, 5]) // => [3]
  const test5 = middle([1, 2, 3, 4]) // => [2, 3]
  const test6 = middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

  it("return middle of an array w/ EVEN elements", () => {
    assert.deepStrictEqual(test6, [3, 4]);
  });

  it("return middle of an array w/ ODD elements", () => {
    assert.deepEqual(test4, [3]);
  });

  it("return empty array with given an array with ONE element [1]", () => {
    assert.deepStrictEqual(test1, []);
  });
  it("return empty array with given an array with TWO elements [1,2]", () => {
    assert.deepStrictEqual(test2, []);
  });

  it("return empty array with given an empty array", () => {
    assert.deepStrictEqual(middle([]), []);
  });


});