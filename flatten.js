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

function flatten(nestedArray) {
  return [].concat(...nestedArray);
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])