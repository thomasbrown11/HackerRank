//return 256th day of the year given a year between 1700-2700 with calendar type changes (Julian to Gregorian) and leap years considered 

//return the day of the year in dd.mm.yyyy format (obviously yyyy will be taken care of);

//to be a leap year a year must be divisible by 4, unless it's a end-of-century year (ie 1700, 1800, 2000)..
//if end of century year must be divisble by 400 (2000%400 is 0 so it's a leap year, 1900%400 is 300 so it's not)

//for both calendars day 256 is 09/12 on a leap year (leapYear(year) (evalutates to true)), and 09/13 on common year (leapYear(year) === false)

//for julian calendar every 4 years is a leap year 

//if date is before or equal to 1917 it's a julian calendar, whereas if it's > 1917 it's gregorian... in 1918 specifically feb 14 was the 32nd day of the year .. 1918 the day will be 09/26

function dayOfProgrammer(year) {
  //return true or false if leap year
  function leapYear(year) {
    //get third number of year which if 0 means its an end of century year
    let splitter = year.toString()
    let lastHalf = `${splitter[2]}${splitter[3]}`
    console.log(lastHalf)
    let gregorian = false;
    let julian = false;
    let transition = false;

    if (year <= 1917) {
      julian = true;
    } else if (year === 1918) {
      transition = true;
    } else if (year > 1918) {
      gregorian = true;
    }

    if (julian) {
      if (year % 4 === 0) {
        return true
      } else {
        return false
      }
    } else if (gregorian) {
      //if end of century check if divisible by 400;
      if (lastHalf === '00') {
        if (year % 400 === 0) {
          //if yes it's a leap year
          return true;
        } else {
          return false;
        }
        //if not end of century years see if divisible by 4
      } else if (year % 4 === 0) {
        //if yes then it's a leap year
        return true;
      } else {
        return false;
      }
    } else if (transition) {
      return false
    }
  }

  if (year === 1918) {
    return '26.09.1918'
  } else if (leapYear(year)) {
    return `12.09.${year}`
  } else {
    return `13.09.${year}`
  }
}

console.log(dayOfProgrammer(2508))