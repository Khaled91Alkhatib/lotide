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

const letterPositions = function(sentence) {
  let results = {};
  for(let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if(results[char]) {
      results[char].push(i);
    } else {
      results[char] = [i];
    }
  }
  return results;
};
assertArraysEqual(letterPositions("lighthouselabs").i, [1]);

// console.log(letterPositions("lighthouselabs"))