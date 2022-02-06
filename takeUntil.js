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

const takeUntil = function(array, callback) {
  const outcome = [];
  for(let i = 0; i < array.length; i++) {
    if(!callback(array[i])) {
      outcome.push(array[i]);
    } else {
      break;
    }
  }return outcome;
}

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"])

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);