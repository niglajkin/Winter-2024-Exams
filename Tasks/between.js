// Extract substring between prefix and suffix

//Step 4
//Rewrite without mutating incoming parameters
//Replace magic number -1 with constant NotExist

'use strict';

const NOT_EXIST = -1;

const getValueBetween = (searchedString, prefix, suffix) => {
  const indexOfPrefix = searchedString.indexOf(prefix);
  const indexOfSuffix = searchedString.indexOf(suffix);

  if (indexOfPrefix === NOT_EXIST || indexOfSuffix === NOT_EXIST) return '';

  const indexWithoutPrefix = indexOfPrefix + prefix.length;
  const result = searchedString.substring(indexWithoutPrefix, indexOfSuffix);

  return result;
};

module.exports = getValueBetween;
