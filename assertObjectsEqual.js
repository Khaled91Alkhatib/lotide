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

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  // console.log(`Example label: ${inspect(actual)}`);
  if(eqObjects(actual, expected)){
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
   } else{
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
   }
};
assertObjectsEqual({first: "1", second: "2"}, {first: "1", second: "2"});
assertObjectsEqual({first: "1", second: 2}, {first: "1", second: "2"});

