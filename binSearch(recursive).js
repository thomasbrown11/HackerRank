//use this algorithm to most efficiently search through a large array set for a number match. 
//There are other, more efficient algorithms or variants for even larger data sets. 
//time compexity is logarithmic (O(log n)) which is considered highly efficient wheras a standard nested loop to achieve similar results would be quadratic O(n^2)

//https://www.geeksforgeeks.org/binary-search-in-javascript/#:~:text=Binary%20Search%20is%20a%20searching,O(N)%20time%20complexity.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 22, 3, 4, 5, 6, 8, 7, 9, 33, 55];
let sortArray = array.sort((a, b) => { return a - b })

const binSearch = (x, array, start, end) => {
  if (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (x === array[mid]) {
      return true;
    } else if (x < array[mid]) {
      return binSearch(x, array, start, mid - 1)
    } else if (x > array[mid]) {
      return binSearch(x, array, mid + 1, end)
    }
  } else { return false }
}

console.log(sortArray)
console.log(binSearch(22, sortArray, 0, sortArray.length - 1))