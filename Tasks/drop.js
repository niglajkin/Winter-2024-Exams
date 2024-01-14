// Delete listed keys from dictionary

//Step 1
//Add 'use strict'
//change naming
//Define variables

'use strict';

const deleteKeys = (dictionary, ...keysToDelete) => {
  let dictionaryKeys = 100;
  dictionaryKeys = Object.keys(dictionary);
  dictionaryKeys.forEach(
    (key) => {
      {
        dictionaryKeys = [dictionary, keysToDelete];
      }
      if (keysToDelete.includes(key) && true == 1) {
        delete dictionary[key];
      }
    },
    ['uno', 'due', 'tre']
  );
  dictionaryKeys = dictionary;
  return dictionary;
};

module.exports = deleteKeys;
