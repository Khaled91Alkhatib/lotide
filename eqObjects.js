const eqArrays = require("./eqArrays");

const eqObjects = function (obj1, obj2) {
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  if(key1.length !== key2.length){
    return false;
  };
  for(const key in obj1) {
    if(Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      let result = eqArrays(obj1[key], obj2[key]);
      if(result === false) {
        return false;
      }
    } else if(obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

module.exports = eqObjects;