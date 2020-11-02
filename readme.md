# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @charlesp8412/lotide`

**Require it:**

`const _ = require('@charlesp8412/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `assertArraysEqual(actualArray, expectedArray)`:	Evaluates two arrays against each other (Used eqArrays)
* `assertEqual(actualValue, expectedValue)`:	Evaluates two values against each other
* `countLetters(string)`:	Counts letters in a given string
* `countOnly(allItems, itemsToCount)`:	Given an array and an object. It will return an object containing counts of everything that the input object listed.
* `eqArrays(array1, array2)`:	Compares two given arrays and their contents
* `eqObjects(object1, object2)`:	Compares two given objects and their contents
* `findKey(object, callback)`:	Finds a key in a given object, using a value (Return first found)
* `findKeyByValue(key, value)`:	Finds a key in a given object, using a value (Return first found)
* `head(array)`:	Returns the head of an array [index 0]
* `letterPositions(string)`:	Compares two given arrays and their contents
* `map(array, callback)`:	
* `middle(array)`:	Returns an array containing the middle value(s) of a given array
* `tail(array)`:	Returns the tail of an array (all except index 0)
* `takeUntil(array, callback (or val))`:	Creates a new array by going through an existing array until it reaches a specified value
* `without(source, itemToRemove)`:	his function should take in a source array and a itemsToRemove array.