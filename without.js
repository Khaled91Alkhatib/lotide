const assertArraysEqual = require("./assertArraysEqual");


function without(source, itemsToRemove) {
  let result = [];
  for(const element of source){
    if(itemsToRemove.includes(element) === false) {
      result.push(element);
    }
  }
  return result
}

module.exports = without;