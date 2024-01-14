// Compare two dictionaries

//Step 1
//Add 'use strict'
//Replace let with const were possible
//Change naming

'use strict';

const compareDictionaries = (firstValues, ...parametersList) => {
  const secondValues = parametersList[0];
  const firstKeys = Object.keys(firstValues);
  const secondKeys = Object.keys(secondValues);
  if (firstKeys.join('-') !== secondKeys.join('-')) return false;
  let result = true;
  for (const key of firstKeys) {
    if (firstValues[key] === secondValues[key]) result = result && true;
    else {
      result = result && false;
    }
  }
  return result;
};

module.exports = compareDictionaries;
