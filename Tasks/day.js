// Get day number

//Step 2
//Define DAYS with const instead of let
//Remove unneeded {} after if

'use strict';
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (day) => {
  for (let i = 0; i < DAYS.length; i++) {
    if (day.startsWith(DAYS[i].toLowerCase())) return i + 1;
  }
  return -1;
};

module.exports = getDayNumber;
