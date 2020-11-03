
// const results1 = map(words, word => word[0]);
// const results2 = map(words2, word => word[0]);
// const results3 = map(words3, word => word[0]);

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(results2, ['c', 'd', 'm', 'b', 'e']);
// assertArraysEqual(results3, ['g', 'w', 'f', 'e', 'w']);

const assert = require('chai').assert;
const map = require('../map.js');

describe("#map", () => {

  it("follows instructions from an input function", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.deepStrictEqual(results1, ['g', 'c', 't', 'm', 't']);
  });



  
});