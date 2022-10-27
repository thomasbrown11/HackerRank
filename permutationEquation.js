//p is an array of integers with all distinct values ranging from 1 to whatever the length of the array is.. ie all positive intgers 
//the value of n (no given, but determines array length) is no greater than 50 so efficiency doesn't matter. 

//x = the increment value and that must be at least 1, thus in your for loop use x and define the first value as for For (x=1). 
//You need to find which index location in p points to the value of x.. so where is 1 in array p? 

//***for some reason values aren't zero indexed***
//p = [5,2,1,3,4]... so x = 1, while being location at p[2] is condiered to be at p3 in the context of this algorithm 

//from there you have to figure out which number in p could be the index of p that would point to the original value of x... 
//but again don't zero index

//so x = 1 ... thus x = p(3) (at p[2] position wise... actual length location) .. so what is y in p(p(y))=1.. 
//as in which number points to value 3? 3 is at the 4th position (index 3) 
//again, go for position and not index, so value 1 is at p(p(y))... where y = 4 (NOT 3). push the value of y (4) to an array

//return the y array with all permutation values for all indices of p 

function permutationEquation(p) {
  let xPArray = [];
  let yPArray = [];
  let pValue;
  let yValue

  for (let x = 1; x <= p.length; x++) {
    //let pValue = p.indexOf(x) + 1
    pValue = p.indexOf(x) + 1
    xPArray.push(pValue)
  }
  console.log(`p ${p}`)
  console.log(`xPArray ${xPArray}`)

  for (let i = 0; i < xPArray.length; i++) {
    //console.log(xPArray[i])
    yValue = p.indexOf(xPArray[i]) + 1
    console.log(yValue)
    yPArray.push(yValue)
  }
  console.log(`yPArray${yPArray}`)
  return yPArray
}

console.log(permutationEquation([5, 2, 1, 3, 4]))