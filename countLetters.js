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

module.exports = countLetters;
