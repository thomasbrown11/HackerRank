let arr = [396285104, 573261094, 759641832, 819230764, 364801279]

function bubbleSort(array) {
  //define variable to trigger while loop as long as array isn't sorted. done only = false at the very beginning and if 
  //current index is larger than the following index. The larger number is always being placed in the following test place
  //(20,1 will be changed to 1,20 and then 20 will be tested against next index value) so the test of the for loop will
  //satisfy the for's if conditional and trigger the for loop body which will set 'done' to false, triggering another iteration
  //of the for loop from while loop. This will swap index spots until all larger numbers have been pushed to the bottom of 
  //list.. can be inefficient it looks like.   
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        let tmp = arr[i - 1]; //16 
        arr[i - 1] = arr[i]; //arr3 is now 7
        arr[i] = tmp; //arr 4 is now 16
      }
    }
  }
  return arr;
}

bubbleSort(arr);

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

console.log(`${minimum} ${maximum}`);