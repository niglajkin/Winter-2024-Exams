// Copy all values from dict except listed

//Step 3
//Rewrite using for of instead of forEach
//Do not mutate incoming parameters

'use strict';

const copyArrayExcept = (incomingValuesArray, ...notNeededValues) => {
  const arrayKeys = Object.keys(incomingValuesArray);
  const result = Object.assign(incomingValuesArray);

  for (const key of arrayKeys) {
    if (notNeededValues.includes(key)) delete result[key];
  }

  return result;
};

module.exports = copyArrayExcept;
