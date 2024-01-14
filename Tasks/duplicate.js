// Return an array without duplicates

//Step 2
//Remove unneeded else block
'use strict';

const duplicateElements = (value, arrayLength) => {
  if (arrayLength <= 0) return [];

  const arrayWithDuplicates = [];
  for (let i = 0; i < arrayLength; i++) {
    arrayWithDuplicates[i] = value;
  }
  return arrayWithDuplicates;
};

module.exports = duplicateElements;
