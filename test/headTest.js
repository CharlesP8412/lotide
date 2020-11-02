const head = require('../head.js');
const assertEqual = require('../assertEqual');


assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([55]), 55);
assertEqual(head([]), undefined);