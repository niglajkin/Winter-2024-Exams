// Compare two dictionaries

//Step 2
//Remove unneeded if-else block
//Get second values instead of unnecessary parameter list

'use strict';

const compareDictionaries = (firstValues, secondValues) => {
  const firstKeys = Object.keys(firstValues);
  const secondKeys = Object.keys(secondValues);
  if (firstKeys.join('-') !== secondKeys.join('-')) return false;

  let result = true;
  for (const key of firstKeys) {
    result &&= firstValues[key] === secondValues[key];
  }

  return result;
};

module.exports = compareDictionaries;
