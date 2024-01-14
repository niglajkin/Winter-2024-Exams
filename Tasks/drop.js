// Delete listed keys from dictionary

//Step 3
//Rewrite forEach using for of

'use strict';

const deleteKeys = (dictionary, ...keysToDelete) => {
  const dictionaryKeys = Object.keys(dictionary);
  for (const key of dictionaryKeys) {
    if (keysToDelete.includes(key)) delete dictionary[key];
  }
  return dictionary;
};

module.exports = deleteKeys;
