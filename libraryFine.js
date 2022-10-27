//d,m,y1 refer to when a book was return , d,m,y2 are the expected return date 

//if the book is returned in the following year (ei y1 > y2) the fine is 10000 so return 10000

//if the book is returned in the correct year (y1===y2) but in the wrong month charge 500 per month late
//like if month1 is 7 and month2 is 5 then it's 2 months late and the fee would be 1000 .. return 1000

//if same year and month then charge 15 per day late... so in bottom example it is 7 days late so multiply 7 * 15 and return

//if the book is returned before the due date return 0 


function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1 > y2) {
    console.log('year late')
    return 10000;
  } else if (y1 === y2 && m1 > m2) {
    console.log('months late')
    return (m1 - m2) * 500;
  } else if (y1 === y2 && m1 === m2 && d1 > d2) {
    console.log('days late')
    return (d1 - d2) * 15;
  }
}

console.log(libraryFine(14, 7, 2018, 5, 7, 2018))

console.log(9 * 15)