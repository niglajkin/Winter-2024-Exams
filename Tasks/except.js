// Copy all values from dict except listed

//Step 2
//Remove senseless parts

'use strict';

const copyArrayExcept = (incomingValuesArray, ...notNeededValues) => {
  const intermediateVariable = Object.keys(incomingValuesArray);
  intermediateVariable.forEach((value) => {
    if (notNeededValues.includes(value)) {
      delete incomingValuesArray[value];
    }
  }, 2000);
  return incomingValuesArray;
};

module.exports = copyArrayExcept;
