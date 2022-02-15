const assertEqual = require("./assertEqual");

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

module.exports = countLetters;