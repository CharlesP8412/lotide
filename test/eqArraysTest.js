const eqArrays = require('../eqArrays');
const assert = require('chai').assert;





// assertEqual(s1, true);
// assertEqual(s2, false);
// assertEqual(s5, true);
// assertEqual(s6, false);
// assertEqual(s7, false);


describe("#eqArrays", () => {
  //SCENARIOS
  const s1 = eqArrays([1, 2, 3], [1, 2, 3]) // => true
  const s2 = eqArrays([1, 2, 3], [3, 2, 1]) // => falsestatus
  const s3 = eqArrays([[2, 3], [4]], [[2, 3], [4]]) // => true
  const s4 = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]) // => false
  const s5 = eqArrays([[2, 3], [4]], [[2, 3], 4]) // => false
  const s6 = eqArrays([],[]); // => True;

  it(`returns true with standard arrays`, () => {
    assert.strictEqual(s1, true);
  });

  it("returns false; with mismatched arrays", () => {
    assert.strictEqual(s2, false);
  });


  it("returns true; with nested arrays", () => {
    assert.strictEqual(s3, true); // => true
  });

  it("return false; with mismatched nested arrays", () => {
    assert.strictEqual(s5, false);
  });

  it("return true; with two initially empty arrays ([], []) ", () => {
    assert.strictEqual(s6, true);
  });


});