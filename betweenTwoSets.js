//a number is considered between both arrays a and b

//the number must be a multiple of all numbers in the first array (multiples of 2 are 2,4,6,8,10,12,14,16,18,20)
//the number must be a factor of all numbers in second array (factors of 24 are 2,3,4,6,12,24)

//.. notice that 2 and 4 aren't valid multiples of 6, but rather it would start at 6 then 12, 18, 24 etc..
//therefore num >= Math.max(array1) is a requirement for any integer that satisfies the first array stipulation

//6 is a multiple of 6 as well as a multiple of 2, 12 is a multiple of both, 18 is a multiple of both, 24 is a multiple of both
//36 is a multiple of both etc. 
//this could go on ad naseum, but the number must also satisify the second array's conditionals. 

//factors of array2[0] (24) are 2,3,4,6,12,24 (every number is a factor of itself)
//factors of array2[1] (36) are 2,3,4,6,9,12,18,36

//since the number has to be a factor of all elements of array2 num <= Math.min(array2) (minimum) would be required as obviously
//a larger number couldn't fit in that smallest number dividing equally 

//a successful integer would be one that was a multiple of all elements of array1 (6 and 12 here)
//and also a factor of all arrayb elements (again 6, and 12)

//you then return the number of possible integers that satisfy all conditionals (here only 6 and 12 so you return 2)

//give constraints that num an only be between array1 Max and array2 Min you can get a working range with math


//testing conditionals could be shortened by incrementing by the value of array1's max until you hit 

array1 = [3, 4];
array2 = [24, 48];

// function getTotalX(a, b) {
//   //iterator counter if all testing conditions met
//   let count = 0;

//   //all iterations of i would be all possible multiples and factors of the collective arrays, from here must be pared
//   // first by testing against a, then testing against b if conditions pass 
//   //all multiples must be at least the max of a (can't be multiples smaller than the number itself)
//   //all factors must be at most the min of b (a smaller number can't be divided by a bigger number)
//   for (let i = (Math.max(...a)); i <= (Math.min(...b)); i += (Math.max(...a))) {
//     console.log(`first iterator i ${i}`)

//     //iterate through a and determine that current value of i is a multiple all numbers in a
//     for (let j = 0; j < a.length; j++) {
//       console.log(`a[j] ${a[j]}`)
//       if (i % a[j] != 0) {
//         console.log(`not a multiple of ${a[j]}`)
//         break
//       } else if (j === a.length - 1 && i % a[j] === 0) {
//         console.log('good')

//         //if i hasn't broken loop by end of a array test b array
//         //make sure i is a factor of all elements of b
//         for (let k = 0; k < b.length; k++) {
//           console.log(`k ${k}, i ${i}`)
//           if (b[k] % i != 0) {
//             console.log(`i ${i} is not a factor of b[k] ${b[k]}`)
//             break
//           } else if (k === b.length - 1 && b[k] % i === 0) {
//             console.log(`i ${i} is a factor of all b elelements ${b} `)
//             //iterate if i hasn't broken loop by end of b array and is factor of final element of b
//             count++
//             console.log(`count ${count}`);
//           }
//         }
//       }
//     }
//   }
//   return count
// }


// console.log(getTotalX(array1, array2))

function getTotalX(a, b) {
  let count = 0;

  for (let i = (Math.max(...a)); i <= (Math.min(...b)); i += (Math.max(...a))) {
    for (let j = 0; j < a.length; j++) {
      if (i % a[j] != 0) {
        break
      } else if (j === a.length - 1 && i % a[j] === 0) {
        for (let k = 0; k < b.length; k++) {
          if (b[k] % i != 0) {
            break
          } else if (k === b.length - 1 && b[k] % i === 0) {
            count++
          }
        }
      }
    }
  }
  return count
}


console.log(getTotalX(array1, array2))