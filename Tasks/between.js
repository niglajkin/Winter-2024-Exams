// Extract substring between prefix and suffix

//Step 1
//Add 'use strict'
//Change naming
//Define variables

'use strict';

const getValueBetween = (searchedString, prefix, suffix) => {
  let index = searchedString.indexOf(prefix);
  if (index === -1) return '';
  else {
    const indexWithoutPrefix = index + prefix.length;
    searchedString = searchedString.substring(indexWithoutPrefix);
    if (searchedString) {
      index = searchedString.indexOf(suffix);
      if (index === -1) {
        return '';
      } else {
        searchedString = searchedString.substring(0, index);
      }
    }
  }
  return searchedString;
};

module.exports = getValueBetween;
