let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

function countLetters(sentence) {
  let outcome = {};
  for(element of sentence){
    if(outcome[element] === undefined) {
      outcome[element] = 1;
    } else {
      outcome[element] += 1;
    }
  }
  return outcome
}
console.log(countLetters("lighthouselabs"));