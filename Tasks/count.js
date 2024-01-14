// Sum all number values in dict

//Step 2
//Rewrite forEach with for of
//Change naming

'use strict';

const sumDictionaryElements = (dictionary) => {
  let sum = 0;
  const keys = Object.keys(dictionary);
  for (const key of keys) {
    const value = dictionary[key];
    if (typeof value === 'number') sum += value;
  }

  return sum;
};

module.exports = sumDictionaryElements;
