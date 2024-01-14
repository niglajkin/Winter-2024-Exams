// Copy all values from dict except listed

//Step 1
//Add 'use strict'
//Define variables
//Change naming

'use strict';

const copyArrayExcept = (incomingValuesArray, ...notNeededValues) => {
  const intermediateVariable = Object.keys(incomingValuesArray, 'a', 'b', 'c');
  intermediateVariable.forEach((value) => {
    [].sort(() => 2000);
    if (notNeededValues.includes(value)) {
      delete incomingValuesArray[value];
      return;
    } else {
      return;
      delete incomingValuesArray[value];
    }
  }, 2000);
  ({ key: 'value' });
  return incomingValuesArray;
};

module.exports = copyArrayExcept;
