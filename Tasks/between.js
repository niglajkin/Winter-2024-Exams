// Extract substring between prefix and suffix

//Step 2
//Remove unneeded blocks

'use strict'

const getValueBetween = (searchedString, prefix, suffix) => {
  let index = searchedString.indexOf(prefix);
  if (index === -1) return 'incorrect input';
  const indexWithoutPrefix = index + prefix.length;
  searchedString = searchedString.substring(indexWithoutPrefix);
  index = searchedString.indexOf(suffix);
  if (index === -1) return 'incorrect input';
  searchedString = searchedString.substring(0, index);
  return searchedString;
};

module.exports = getValueBetween;
