const assertEqual = require("./assertEqual");

const findKey = function (object, callback) {
  for(const key in object) {
    // console.log(key, "key");
    // console.log(object[key], "object key");
    // console.log(callback(object[key]), "callback object key");
    if(callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;