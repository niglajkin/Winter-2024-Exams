// Get day number

//Step 3
//Add incorrect input constant for -1;
'use strict';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const incorrectInput = -1;

const getDayNumber = (day) => {
  for (let i = 0; i < DAYS.length; i++) {
    if (day.startsWith(DAYS[i].toLowerCase())) return i + 1;
  }

  return incorrectInput;
};

module.exports = getDayNumber;
