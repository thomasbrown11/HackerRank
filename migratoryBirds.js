//sort through array to find most common number
//if multiple numbers are most common return smallest number 

//array can be up to 200000 integers long
//array values ranger from 1-5 only, no other numbers possible 

birdArray = [1, 4, 4, 4, 5, 3]

function migratoryBirds(arr) {
  //array of count in ascending order 
  let countArray = [];
  //one loop for each possible value of arr[j]
  for (let i = 1; i < 6; i++) {
    let count = 0;
    //loop through array 5 times, compairing against number 1,2,3,4, and 5 respectively in ascending order
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        //if number is equavalent increment counter
        count++
      }
    }
    //push final count value to array at proper index number 
    countArray.push(count);
  }

  console.log(countArray)
  //loop through countArray in ascending order 
  for (let k = 0; k < countArray.length; k++) {
    console.log(countArray[k])
    if (countArray[k] === Math.max(...countArray)) {
      //return the most common number with 0-indexing in mind... ie the count of 1 is stored at index 0... since 3 is the first largest array variable at index 2
      //it is pointing to the value of 3 (since index 2 is the number of 3's present in the initial birdArray)
      console.log(`k+1 ${k + 1}`)
      return k + 1
    }
  }
}

console.log(migratoryBirds(birdArray));

// function migratoryBirds(arr) {

//   let countArray = [];

//   for (let i = 1; i < 6; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === i) {
//         count++
//       }
//     }
//     countArray.push(count);
//   }

//   for (let k = 0; k < countArray.length; k++) {
//     if (countArray[k] === Math.max(...countArray)) {
//       return k + 1
//     }
//   }
// }

// console.log(migratoryBirds(birdArray));
