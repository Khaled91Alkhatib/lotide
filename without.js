const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

function without(source, itemsToRemove) {
  let result = [];
  for(let i = 0; i < source.length; i++) {
    if(source[i] !== itemsToRemove[i]) {
      result.push(source[i]);
    }
  }
  return result;
}

module.exports = without;