// Extract substring between prefix and suffix

//Step 3
//Combine getting indexes of prefix and suffix and checking if they are valid

'use strict'

const getValueBetween = (searchedString, prefix, suffix) => {
  const indexOfPrefix = searchedString.indexOf(prefix);
  const indexOfSuffix = searchedString.indexOf(suffix);
  if (indexOfPrefix === -1 || indexOfSuffix === -1) return '';

  const indexWithoutPrefix = indexOfPrefix + prefix.length;
  searchedString = searchedString.substring(indexWithoutPrefix, indexOfSuffix);
  
  return searchedString;
};
