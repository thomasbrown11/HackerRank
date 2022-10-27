//arr is an array of sticks with lengths of the number of the integer at each indice 
//you must iterative work through this problem (ie brute force..)
//at each iteration push how many sticks are in the array
//always log the full length of the array as the first value 

//at each iteration discard all sticks of the smallest value, and also subtract that amount from all remaining sticks
//iterate thorugh until there are none left

//do not include 0 in the return array, only include iterations with at least a length of 1 


function cutTheSticks(arr) {
  let lengthArray = [];

  while (arr.length > 0) {
    lengthArray.push(arr.length)
    let cutter = Math.min(...arr)
    console.log(`cutter ${cutter}`)

    let bigger = arr.filter(element => { return element != cutter })
    for (let i = 0; i < bigger.length; i++) {
      bigger[i] = bigger[i] - cutter
    }
    arr = bigger
    console.log(`bigger ${bigger}`)
    console.log(`arr ${arr}`)
  }
  return lengthArray
}

let numbers = [5, 4, 4, 2, 2, 8]
console.log(cutTheSticks(numbers))

