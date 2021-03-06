const countOnly = require('../countOnly');
const assert = require('chai').assert;


describe("#countOnly", () => {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  it("counts specified names, displays the ones that exist", () => {
    // console.log(">>>",result1)
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    // assert.equal(1, 1)
    
    assert.equal(result1['Jason'], 1);
  });
  
  /* 
  -------------------------------------
  WiP
  STILL WORKING ON IT
  */
  // it("retrun a full object with correct info", () => {
  //   const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  //  Might need to include undefined in the whole array?
  //   assert.equal(result1, {"Jason": 1, "Fang": 2});
  // });
  
  


});

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


// //Assert = can only check one set at a time
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
