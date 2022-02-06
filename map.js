function eqArrays(array1, array2) {
  for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]){
      return false;
    }
  } return true;
 }

 function assertArraysEqual(array1, array2) {
   if(eqArrays(array1, array2)){
    console.log(`✅✅✅ Assertion passed: ${array1} === ${array2}`);
   } else{
    console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
   }
 }


// const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item));
  }
  return results;
}
// const results1 = map(words, word => word[0]);
// console.log(results1);

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const numbers = [1, 3, 5, 6, 7];
const results2 = map(numbers, number => number + 2);
assertArraysEqual(results2, [3, 5, 7, 8, 9]);