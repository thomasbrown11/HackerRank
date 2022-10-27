//s is an array of 3 arrays. Each array contains 3 integers. array[0] (the first array) would be a row, array[1] next row etc
//forming a 3x3 matrix. the sum of any column, row, or diagonal comes out to the same constant value.. 

//numbers are always 1-9

//the matrix must have all distrinct numbers... so one of the 5s below must change, one of the 4s, and there's no 9

//the cost of a change is the absolute value of the original value minus the new value |a-b| (must use Math.abs(a-b))

//the only possible constant is 15. 5 is always in the middle and even numbers are always on the outside. They can rotate, but really there's
//one pattern? 

//2 9 4   4 9 2   8 1 6   6 1 8 
//7 5 3   3 5 7   3 5 7   7 5 3     5
//6 1 8   8 1 6   4 9 2   2 9 4 

//etc there are 8 total but they all look similar... check to make sure that all even numbers are on corners and 5 is in middle

//it is a given that s won't be a magic square yet. 

function formingMagicSquare(s) {
  //all possible magicSquares
  let magicArray =
    ['816357492',
      '618753294',
      '492357816',
      '294753618',
      '834159672',
      '438951276',
      '672159834',
      '276951438'
    ]
  //convert s to a string 
  let stringS = s.toString().replaceAll(',', '');
  console.log(stringS)

  let costArray = [];
  //iterate through all magicArray values
  for (let i = 0; i < magicArray.length; i++) {
    console.log(magicArray[i])
    //total cost of changing s to one of the magicSquares
    let cost = 0;
    //iterate through all numbers in s (as string) and if not equal log cost of change to current magicSquare to cost
    for (let j = 0; j < stringS.length; j++) {
      if (magicArray[i][j] === stringS[j]) {
        continue
      } else {
        console.log(`i ${i} j ${j} parsInt(magicArray[i][j] ${magicArray[i][j]} `)
        console.log(`stringS[j] ${stringS[j]} Math.abs(parseInt(magicArray[i][j]) - parseInt(stringS[j]) ${Math.abs(parseInt(magicArray[i][j]) - parseInt(stringS[j]))}`)
        cost = cost + Math.abs(parseInt(magicArray[i][j]) - parseInt(stringS[j]))
        console.log(cost)
      }
    }
    //push the total cost of change against current magicSquare to costArray
    costArray.push(cost)
    console.log(`costArray ${costArray}`)
  }
  //return smallest cost array value (ie cheapest magicArray to copy and thus cheapest possible change)
  return Math.min(...costArray);
}


// console.log(formingMagicSquare([[4, 8, 2], [4, 5, 7], [6, 1, 6]]))

// function formingMagicSquare(s) {
//   let magicArray =
//     ['816357492',
//       '618753294',
//       '492357816',
//       '294753618',
//       '834159672',
//       '438951276',
//       '672159834',
//       '276951438'
//     ]
//   let stringS = s.toString().split(',');
//   let costArray = [];

//   for (let i = 0; i < magicArray.length; i++) {
//     let cost = 0;
//     for (let j = 0; j < stringS.length; j++) {
//       if (magicArray[i][j] === stringS[j]) {
//         continue
//       } else {
//         cost = cost + Math.abs(parseInt(magicArray[i][j]) - stringS[j])
//       }
//     }
//     costArray.push(cost)
//   }
//   return Math.min(...costArray);
// }

//console.log(formingMagicSquare([[4, 8, 2], [4, 5, 7], [6, 1, 6]]))
console.log(formingMagicSquare([[6, 1, 2], [7, 2, 6], [5, 6, 2]]))

//you need to use basic math to arrive at the conclusion of 8 possible squares (since it was given)

//first the basic rule here is that the matrix must always have all integers from 1 to 9, 
//thus the total value of the square summed is 45 (1+2+3+4+5+6+7+8+9)
//since there are 3 rows total you can write 3r(row)=45.... r = 45/3.. r = 15
//so a row must always equal 15, and since all rows, columns, diagonals must be 15 the only possible sum of a row is 15

//from here you must final all possible combinations of 3 numbers 1-9 that equal 15 with no repeats in the 3 values

//did this in your head
//1+9+5 
//1+8+6
//no more possible with 1 as first value
//2+9+4
//2+8+5
//2+7+6
//no more possible with 2 as first value
//3+8+4
//3+7+5
//4+6+5

//all other combos are repeats of the above 8 

//just minimum number, maximum number (possible), and then the number that makes it 15 in last place 

//so from the above 8 you can count how many times a number appears, thinking about how they intersect 

//1 appears twice
//3 appears twice
//7 appaeras twice
//9 appears twice
//2 appears 3 times
//4 appears 3 times
//6 appears 3 times
//8 appears 3 timeshe 
//5 appears 4 times

//since 5 appears 4 times it has to go in the middle since that is the only number that gets crossed over 4 times 
//by this, it is crossed over diagonally twice, once across, once down 
//therefore 5 must always be in the middle 

//since the first 4 (the odd numbers) appear only twice they must be in the middles, being crossed once down, once across

//since the even numbers appear 3 times they must be in the corners since they will be crossed once across, 
//once down, once diagnoally

//from here we derive that 5 is in the center, odds are in the middles, and evens are in the corners 

//with these rules make all possible iterations of one number against 5.. so 1 has to be in the middle thus there are 4
//possible entries 

//0 1 0  0 0 0  0 0 0  0 0 0 
//0 5 0  0 5 0  1 5 0  0 5 1
//0 0 0  0 1 0  0 0 0  0 0 0 

//since it has to be 15 9 must always be exactly across 

//0 1 0  0 9 0  0 0 0  0 0 0 
//0 5 0  0 5 0  1 5 9  9 5 1
//0 9 0  0 1 0  0 0 0  0 0 0 

//the same logic can be applied to 3 and 7 which must also be across from eachother and in the middles

//0 1 0  0 9 0  0 3 0  0 3 0 
//3 5 7  3 5 7  1 5 9  9 5 1
//0 9 0  0 1 0  0 7 0  0 7 0 

//notice that we haven't exhausted all combinations of 3 and 7, as we were able to repeat their positions 
//since 1 and 9 change

//these are just changing the positions of 3 and 7 to the opposite position 

//0 1 0  0 9 0  0 7 0  0 7 0 
//7 5 3  7 5 3  1 5 9  9 5 1
//0 9 0  0 1 0  0 3 0  0 3 0 

//so there are 8 possible combinations of the odd numbers.. each gets to occupy a middle position twice since the other 
// while the other odds change around it (like 9 can be on top row twice since 3 and 7 or 7 and 3 can be in the 2nd row)

//there are no other possible combos of odds, so we just need to verify that the evens fit in this mold 

//8 1 6  4 9 2  8 3 4  4 3 8 
//3 5 7  3 5 7  1 5 9  9 5 1
//4 9 2  8 1 6  6 7 2  2 7 6

//6 1 8  2 9 4  6 7 2  2 7 6 
//7 5 3  7 5 3  1 5 9  9 5 1
//2 9 4  6 1 8  8 3 4  4 3 8 

//and it is possible so there are 8 possible combos 