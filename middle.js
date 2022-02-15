const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

function middle(newArray) {
  if(newArray.length === 1 || newArray.length === 2) {
    return [];
  }else if(newArray.length % 2 === 0) {
    return [newArray[newArray.length / 2 - 1], newArray[newArray.length/2]];
  }else {
    return [newArray[Math.floor(newArray.length / 2)]];
  }
}

module.exports = middle;