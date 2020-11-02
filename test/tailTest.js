const tail = require('../tail.js');
const assert = require('chai').assert;


describe("#tail", () => {

  const words = ["Yo Yo", "Lighthouse", "Labs"];
  const numArr = [1, 5, 4, 2, 6];
  const headArr = ['one'];
  const emptyArr = [];

  it("returns tail of std array of string", () => {
    assert.deepStrictEqual(tail(words), ["Lighthouse", "Labs"]);
  });

  it("retirm tail of array of numbers", () => {
    assert.deepStrictEqual(tail(numArr), [5, 4, 2, 6]);
  });

  it("return and empty array when only one element ['one'] ", () => {
    assert.deepStrictEqual(tail(headArr), []);
  });

  it("return an empty array when given and empty array []", () => {
    assert.deepStrictEqual(tail(emptyArr), []);
  });

});