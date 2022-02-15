const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = function(array, callback) {
  const outcome = [];
  for(let i = 0; i < array.length; i++) {
    if(!callback(array[i])) {
      outcome.push(array[i]);
    } else {
      break;
    }
  }return outcome;
}

module.exports = takeUntil;