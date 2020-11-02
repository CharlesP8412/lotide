
//Take in an array and return the middle-most element(s) of the given array.
/* 
1 or 2 value arrays have no middle thus => []
odd # arrays yield middle
Even arrays yield middle 2 values

 */
const middle = function (arrayToMiddle) {
  let x = arrayToMiddle.length;
  let middleArray = []
  // 1 or 2 length
  if (x <= 2) {
    middleArray = [];

    //Odd
  } else if (x % 2 === 1) {
    let middleOddIndex = ((x / 2 + 0.5) - 1)
    return [arrayToMiddle[middleOddIndex]];

    //Even length
  } else if (x % 2 === 0) {
    let middleEven = (x / 2) - 1;
    middleArray.push(arrayToMiddle[middleEven])
    middleArray.push(arrayToMiddle[middleEven + 1])
  }

  return middleArray
}


module.exports = middle;