//A house is located on an x-axis between points s and t
//an apple tree lies before the house on x axis at point a (fixed point)
//an orange tree lies after the house on x axis at point b (fixed point)
//apples and oranges variables are integer arrays denoting distance fruits fell from trees
//if apple or orange integer is positive it has fallen to the right on x axis, if negative to the left on x axis
//you'll see how many apples or oranges fell based on how many values are in their respective integer arrays 
//to determine end point of each value always calculate a+value (in loop) for apples and b+value (in loop) for oranges

let appArray = [2, 3, -4];
let orgArray = [3, -2, -4];

//if a is 12 then you would use 12+2, 12+3, 12 + (-4) 
//once values are mutated in each array determine how many fall within the inclusive range of s to t variables 

//return how many fruits fell on the house (within the inclusive zone respectively as 2 integers)

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  //final fruit on house amounts 
  let aAmount = 0;
  let bAmount = 0;

  //get fruit locations for both arrays
  for (i = 0; i < apples.length; i++) {
    let test = (a + apples[i]);
    if (test >= s && test <= t) {
      aAmount = aAmount + 1;
    }
  }
  for (j = 0; j < oranges.length; j++) {
    let test = (b + oranges[j]);
    if (test >= s && test <= t) {
      bAmount = bAmount + 1;
    }
  }
  let result = [aAmount, bAmount];
  return result;
}

console.log(countApplesAndOranges(7, 10, 4, 12, appArray, orgArray))