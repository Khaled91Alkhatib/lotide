const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

function flatten(nestedArray) {
  return [].concat(...nestedArray);
}

module.exports = flatten;