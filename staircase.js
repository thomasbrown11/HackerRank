//n = number of how many rows of a staircase and how many # will be in the bottom step.
//Looks like grid made of spaces and #'s
//all rows are the same length (n) but the first row will be n-1 spaces followed by a single # (at index n.length-1 if array)

//let n = 5;
//let i = n;

// for (i = 1; i < n + 1; i++) {
//   let line = [];
//   for (j = 0; j < n; j++) {
//     //console.log(j);


//   }

// }

//reverse loop would make i=5... or reference with index i=n-1 
//could call the last one in array with i[j-1]

let n = 9;
let i = n;

for (n; n >= 1; n--) {
  let line = [];
  for (let j = 0; j < i; j++) {
    if (n - j < 2) {
      line.push('#');
    } else {
      line.push(' ');
    }
  }
  console.log(line.join(''));
}