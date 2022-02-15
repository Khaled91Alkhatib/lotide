const assertEqual = require("./assertEqual");

let tail = function(array) {
  return array.slice(1);
};
// tail([1, 2, 3]);

module.exports = tail;