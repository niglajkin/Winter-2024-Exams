// Return an array without duplicates

//Step 2
//Rewrite using for of instead of forEach

'use strict';

const removeDuplicates = (data) => {
  const result = new Set();
  let index = 0;
  for (const element of data) {
    if (result.has(element)) {
      delete data[index];
    } else {
      result.add(element);
    }
    index++;
  }
  return data.filter((x) => typeof x === 'number');
};

module.exports = removeDuplicates;
