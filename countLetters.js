const assertEqual = function(actual, expected) {
  let passEmoji = String.fromCodePoint(0x2705); // Green Check
  let failEmoji = String.fromCodePoint(0x26D4); // No Entry Emoji

  if (actual === expected) {
    console.log(`${passEmoji}> Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${failEmoji}> Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(orgString) {
  const modString = orgString.split(' ').join('');
  let tally = {};
  for (let ltr of modString) {
    if (tally[ltr]) {
      tally[ltr]++;
    } else {
      tally[ltr] = 1;
    }
  }
  return tally;
};

module.export = countLetters;
// const test1 = (countLetters('lighthouse   in the house  rrr'));

// assertEqual(test1['l'], 1);
// assertEqual(test1['r'], 3);
