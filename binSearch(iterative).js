let array = [1, 2, 3, 4, 5, 6, 7, 8, 22, 3, 4, 5, 6, 8, 7, 9, 33, 55];
let sortArray = array.sort((a, b) => { return a - b })

//iterative binSearch function to search for value in array with time complexity of O(logN) (logarithmic time)
//more efficient than a linear search.. starts same efficiency but time is slowly halved comparitively with more iterations
//(as in for bigger data set)
const binSearch = (x, array) => {
  let start = 0;
  let end = array.length - 1;
  // let mid = Math.floor((start + end) / 2);
  // console.log(start, end, mid)
  while (start <= end) {
    //mid needs to be recalculated inside of the loop so conditionals can be tested.. otherwise infiinite loop
    let mid = Math.floor((start + end) / 2);
    console.log(start, end, mid)
    if (x === array[mid]) {
      return true;
    } else if (x < array[mid]) {
      end = mid - 1;
      console.log(`end ${end}`);
    } else if (x > array[mid]) {
      start = mid + 1;
      console.log(`start ${start}`)
    }
  }
  //if x isn't in array then return false
  return false
}

console.log(binSearch(2, sortArray))

//console.log(sortArray)

