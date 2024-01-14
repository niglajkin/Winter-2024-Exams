// Get day number

//Step 1
//Add use strict
//Change naming
//Define function with const

'use strict';

let DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (day) => {
  let i;
  for (i = 0; i < DAYS.length; i++) {
    if (day.startsWith(DAYS[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = getDayNumber;
