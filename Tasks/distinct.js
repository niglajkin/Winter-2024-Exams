// Return an array without duplicates

//Step 3
//Do not change incoming parameters

'use strict';

const removeDuplicates = (data) => {
  const result = new Set();
  for (const element of data) {
    if (!result.has(element)) result.add(element);
  }
  return Array.from(result).filter((x) => typeof x === 'number');
};

module.exports = removeDuplicates;
