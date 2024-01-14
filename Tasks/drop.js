// Delete listed keys from dictionary

//Step 4
//Do not mutate incoming parameters

'use strict';

const deleteKeys = (dictionary, ...keysToDelete) => {
  const dictionaryKeys = Object.keys(dictionary);
  const result = Object.assign(dictionary);
  for (const key of dictionaryKeys) {
    if (keysToDelete.includes(key)) delete result[key];
  }
  return result;
};

module.exports = deleteKeys;

