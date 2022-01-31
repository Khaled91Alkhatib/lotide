function eqArrays(array1, array2) {
  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]){
      return false
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

function without(source, itemsToRemove) {
  let result = [];
  for(let i = 0; i < source.length; i++) {
    if(source[i] !== itemsToRemove[i]) {
      result.push(source[i]);
    }
  }
  return result;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [1]), [3, 3]) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]