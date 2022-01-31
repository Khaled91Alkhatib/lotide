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

function middle(newArray) {
  if(newArray.length === 1 || newArray.length === 2) {
    return [];
  }else if(newArray.length % 2 === 0) {
    return [newArray[newArray.length / 2 - 1], newArray[newArray.length/2]];
  }else {
    return [newArray[Math.floor(newArray.length / 2)]];
  }
}

assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) // => []
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]