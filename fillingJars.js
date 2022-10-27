//n is the number of jars of infinite capacity... can be huge number, operations is an array 
//of arrays, each containing 3 integers representative of an operation done on jars
//the first number of each array (in operations) is the starting indice of n (which will be an
//array for conceptual purposes), and the second is the ending indice of n. 
//the third number is how many beans to add to the jars included between (and including) the 
//first two numbers

//so solve(5, [[1,2,10],[2,4,5],[4,5,10]])

//there are 5 jars (n=5) which start at zero: [0,0,0,0,0] **NOT zero indexed.. numbered 1-5
//the first operation affects jars 1 and 2 and says to add 10 to both: [10,10,0,0,0]
//operation 2 is 2,4,5... meaning 2-4 add 5: 
//[10,15,5,5,0]
//finally 4 and 5 add 10: [10,15,5,15,10]
//now find the floor average of the array (Math.floor())

//add all indices together and divide by n
//55/5= 11 
//no Math.floor() necessary since integer is even.

//return 15 

//if looping i needs to start at 1 instead of 0 to avoid zero indexing since first two numbers
//of the operations won't work if zero indexed. 

//is it more efficient to push added values to an empty array or to create the 0's array?

//what if you added all of the instances of a number changing (like all times a specific indice
//is changed in operations) and then just append that value to the ending array at the end?

//adding zeros is irrelevant in the final call since you'll be dividing by n anyway
//therefore a loop to create nArray may be a waste? 

function solve(n, operations) {

  let num = 0;

  for (let i = 0; i < operations.length; i++) {
    //find number to multiply by last operations value
    num = num + (((operations[i][1] - operations[i][0]) + 1) * operations[i][2])
  }

  return Math.floor(num / n)

}

console.log(solve(5, [[1, 2, 10], [2, 4, 5], [4, 5, 10]]));

//like if/else statement? do a count = Math.min(count, operations[i][0])
//if operations[i][0] < count then you must do an operation.. 

//actually, does this matter? 
//you could potentially just add the first two operators together and multiply by 3rd
//operation value 


