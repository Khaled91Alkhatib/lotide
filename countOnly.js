const assertEqual = require("./assertEqual");

function countOnly(allItems, itemsToCount){
  const results = {};
  for(const item of allItems) {
    if(itemsToCount[item]) { 
      if(results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
      // console.log(item);
    }
  }
  return results;
}

module.exports = countOnly;