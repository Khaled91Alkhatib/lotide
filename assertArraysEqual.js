const eqArrays = require("./eqArrays");

 function assertArraysEqual(array1, array2) {
   if(eqArrays(array1, array2)){
    console.log(`✅✅✅ Assertion passed: ${array1} === ${array2}`);
   } else{
    console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
   }
 }

 module.exports = assertArraysEqual;