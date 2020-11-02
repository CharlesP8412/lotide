const middle = require('../middle');
const assert = require('chai').assert;


describe("#middle", () => {

  const test1 = middle([1]) // => []
  const test2 = middle([1, 2]) // => []
  const test3 = middle([1, 2, 3, 4, 5]) // => [3]
  const test4 = middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

  it("return middle of an array w/ EVEN elements", () => {
    assert.deepStrictEqual(test4, [3, 4]);
  });

  it("return middle of an array w/ ODD elements", () => {
    assert.deepEqual(test3, [3]);
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