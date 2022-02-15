const assertEqual = require("./assertEqual");

let tail = function(array) {
  let tailArray = [];
  for(let i = 0; i < array.length; i++) {
    tailArray = array[i];
  }
  return tailArray;
};
// tail([1, 2, 3]);
// console.log(tail([1, 2, 3]))

module.exports = tail;