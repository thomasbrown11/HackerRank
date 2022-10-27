//referencing through arr[i][j] as in 'i' references the current row and 'j' is like the index of that row.
//arr is an array of arrays and i is the individual array
//arr = [1,2,3],[4,5,6],[7,8,9]... arr[0] returns [1,2,3] arr[1][2] returns 6 
//actual row length is non-determinate but the row length and amount of collumns is an equal number 

//arr is your only reference in the function and references the array of arrays as described above 

//diagnolly a[0][0] will always be the first value, a[1][1], a[2][2] will be third... so both variables can be incremented

//for opposite diagnol first integer would be arr[0][arr[0].length-1]... could be like arr[i].length-1[j somehow?] reference 

//clearly need to use nested arrays both incrementing one with i as variable, nested one with j as variable 

//https://stackoverflow.com/questions/16501704/convert-an-array-to-a-2d-array-square-matrix-in-javascript

//need to do the += thing with two variables which will both be updated on each iteration of the first loop. 
//sum1

let arr =
  [[1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]];

let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < arr.length; i++) {
  sum1 += arr[i][i]
  sum2 += arr[i][arr[i].length - 1 - i]
}

console.log(sum1 - sum2);
