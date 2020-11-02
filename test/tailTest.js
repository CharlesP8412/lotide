const tail = require('../tail.js');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


// const result = tail(["Hello", "Lighthouse", "Labs"]);
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// const headArr = ['one'];
// const emptyArr = [];

// // tail(words);
// console.log("--Test using length Assertion--")
// assertEqual(tail(words).length, 2);
// assertEqual(result.length, 2);
// assertEqual(tail(headArr).length, 0);
// assertEqual(tail(emptyArr).length, 0);

// console.log("--Expect Failure (comparing arrays directly)--")
// assertEqual(tail(headArr), []);
// assertEqual(tail(emptyArr), []);
// assertEqual(result, ["Lighthouse", "Labs"], " EXPECT FAILURE B/C COMPARING ARRAYS"); // => will always fail! < Not any more it wont
// assertEqual(tail(words), ['other words', 'hi']);