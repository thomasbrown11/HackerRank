//gradingStudents returns correctly rounded grades from an array
//40 is the lowest passing grade, if the number is less than 38 don't bother rounding. If 38 or 39 round to 40.. handled next
//if difference between grade and next highest multiple of 5 is less than 3 round up.. 
//so if the grade is 43 it would be compared against 45 (next mult of 5)... 45-42 is 3 (not > 3**) so round to 45

//use modulus somehow? if remainder 

//could use Math.round()... divide to move the place and round it... if over? 

//1. figure out how to find nearest multiple of 5? 
//2. write conditionals after.. (should be easy) 

let array = [36, 6, 98, 25, 97, 24, 25, 70, 50, 71, 30, 14, 28, 100, 3, 26, 61, 98, 50, 41, 5, 3, 28, 34, 0
];

function gradingStudents(grades) {

  let result = [];

  function multOf5(num) {

    let string = num.toString().split('')
    if (string[1] < 5) {
      string[1] = 5;
    } else {
      string[0] = parseInt(string[0]) + 1;
      string[1] = 0;
    }
    let newString = `${string[0]}${string[1]}`
    return parseInt(newString)
  }

  for (let i = 0; i < grades.length; i++) {
    let mult = multOf5(grades[i]);
    console.log(mult - grades[i])
    if (grades[i] < 38 || grades[i] === 100) {
      result.push(grades[i])
    }
    else if (mult - grades[i] < 3) {
      result.push(mult);
    } else {
      result.push(grades[i]);
    }
  }
  return result
}

console.log(gradingStudents(array));
//gradingStudents(array)

//doesn't work for anything less than 10
function multOf5(num) {
  //convert number to string 
  let string = num.toString().split('')
  //if last number less than 5 make last number 5 
  if (string[1] < 5) {
    string[1] = 5;
    //if greater than 5 add 1 to first number, next number is 0 
  } else {
    string[0] = parseInt(string[0]) + 1;
    string[1] = 0;
  }
  //combine to mutated numbers
  let newString = `${string[0]}${string[1]}`
  //return new number string as an integer value
  return parseInt(newString)
}