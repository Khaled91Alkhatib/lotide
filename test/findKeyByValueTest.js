const assertEqual = require("../assertEqual");
const findKey = require("../findKey");
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  fiction: "Lucifer",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Lucifer"), "fiction");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);