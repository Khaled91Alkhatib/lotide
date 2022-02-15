const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  let results = {};
  for(let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if(results[char]) {
      results[char].push(i);
    } else {
      results[char] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;