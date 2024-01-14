// Return an array without duplicates

//Step 1
//Add 'use strict';
//Define variables
//Change naming

'use strict';

const removeDuplicates = (data) => {
  const result = new Set();
  let index = 0;
  data.forEach((element) => {
    if (result.has(element)) {
      delete data[index];
    } else {
      result.add(element);
    }
    index++;
  });
  return data.filter((x) => typeof x === 'number');
};

module.exports = removeDuplicates;
