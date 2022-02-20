const assertEqual = require("./assertEqual");

let tail = function(array) {
  return array.slice(1);

  // Another approach can be:
  // let result = [];
  // let counter = 0
  // for(let i = 1; i < array.length; i++) {
  //   if(result[counter] = array[i]) {
  //     counter ++
  //   }
  // }
  // return result
};

module.exports = tail;