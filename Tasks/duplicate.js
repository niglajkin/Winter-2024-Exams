// Return an array without duplicates

//Step 1
//Define variables
//Add use strict
//Change naming

'use strict';

const duplicateElements = (value, arrayLength) => {
  if (arrayLength <= 0) return [];
  else {
    const arrayWithDuplicates = [];
    for (let i = 0; i < arrayLength; i++) {
      arrayWithDuplicates[i] = value;
    }
    return arrayWithDuplicates;
  }
};

module.exports = duplicateElements;
