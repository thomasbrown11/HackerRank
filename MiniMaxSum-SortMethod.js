let arr = [6, 5, 4, 3, 2, 1];

//sort will move a,b to b,a if a-b is greater than 0: 6-5=1 so 5,6 is returned 6-4 is 2 to 4,6
//must be implimenting same for and while loop from ForLoop alg because it would have to loop through the array several times
arr.sort((a, b) => { return a - b });

console.log(arr);
let minimum = 0
let maximum = 0

for (let j = 0; j < arr.length; j++) {
  if (j <= 3) {
    minimum += arr[j]
  }
  if (j > 0) {
    maximum += arr[j]
  }
}

console.log(minimum, maximum);