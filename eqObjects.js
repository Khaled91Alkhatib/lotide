const assertEqual = require("./assertEqual");

function eqArrays(array1, array2) {
  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i] || array1.length !== array2.length){
      return false
    }
  } return true;
 }

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;