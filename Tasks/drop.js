// Delete listed keys from dictionary

//Step 2
//Remove unneeded parts
//Change let to const for dictionaryKeys

'use strict';

const deleteKeys = (dictionary, ...keysToDelete) => {
  const dictionaryKeys = Object.keys(dictionary);
  dictionaryKeys.forEach(
    (key) => {
      if (keysToDelete.includes(key)) {
        delete dictionary[key];
      }
    },
  );
  return dictionary;
};

module.exports = deleteKeys;
