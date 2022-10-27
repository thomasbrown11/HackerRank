//a is a starting point, b is an ending point of integers

//with the values of a and b included (if applicable?)
//determine how many square integers are present within that range 

//a square integer is an integer which is a square of an integer 

//that's not clearly stated but basically 25 is a square integer because 5X5 is 25.. 1 * 1 is 1 2 * 2 is 
//4 so 4 is a square integer

// function squares(a, b) {
//   let count = 0
//   for (i = a; i <= b; i++) {
//     if (Math.sqrt(i) === Math.floor(Math.sqrt(i))) {
//       count++
//       console.log(`i ${i} count ${count}`)
//     }
//   }
//   return count;
// }

//OR

//this is marginally more efficient because one less operations (removes Math.floor())
// function squares(a, b) {
//   let count = 0
//   for (i = a; i <= b; i++) {
//     if (i % Math.sqrt(i) === 0) {
//       count++
//       console.log(`i ${i} count ${count}`)
//     }
//   }
//   return count;
// }

//both algorithms work but are too inefficient for the model 

//x * x = 9
//x = 9/x 

//      1 4 9 16 25 36 49 64 82
//up by   3 5  7  9 11 13 15 17

//in this way it seems like you could increment by 2 or like increment by set integer+2

//how do you find the set integer? 

//this would halve the operations possibly making it efficient enough 

//could take the different of the first 2 square integers from the inclusive range with a while loop
//terminate while loop when array (house the numbers) reaches 2 

function squares(a, b) {
  //store first two square integers to get difference, later push rest of them with for loop
  //this more or less cuts your operations in half 
  let firstTwo = [];
  let i = a;
  //this only works if there's actually 2 square integers to get.. in 17-24 there's none but it still
  //logs 25 and 36 as those are the next ones 
  while (firstTwo.length < 2) {
    if (i % Math.sqrt(i) === 0) {
      firstTwo.push(i)
    }
    i++
  }
  console.log(firstTwo)
  let iterator = firstTwo[1] - firstTwo[0]
  console.log(iterator)

  //these are quick test cases to end the algorithm if there is 0 or only 1 square integers in the inclusive range
  if (firstTwo[0] > b) {
    return 0
  } else if (firstTwo[0] < b && firstTwo[1] > b) {
    return 1
  }

  //the first iteration will be firstTwo[1] since that's the number.. the next iteration will be 13 away so it 2 
  //goes up by j=iterator+2
  for (let j = firstTwo[1]; j <= b; j = j + iterator) {
    firstTwo.push(j)
    console.log(`j ${j}`);
    iterator = iterator + 2
    console.log(`iterator ${iterator}`)
  }
  console.log(firstTwo)
  //36 gets logged a second time as the first iteration of the for loop so remove that.. 
  //cound have also done second array and then did +1 but either way its janky
  return firstTwo.length - 1
}

//console.log(squares(24, 100))
//console.log(squares(3, 9))// should output 2 (4 and 9)
console.log(squares(17, 24))// should output 0

//this is the same function as above with comments removed 
function squares(a, b) {

  let firstTwo = [];
  let i = a;

  while (firstTwo.length < 2) {
    if (i % Math.sqrt(i) === 0) {
      firstTwo.push(i)
    }
    i++
  }
  let iterator = firstTwo[1] - firstTwo[0]

  if (firstTwo[0] > b) {
    return 0
  } else if (firstTwo[0] < b && firstTwo[1] > b) {
    return 1
  }

  for (let j = firstTwo[1]; j <= b; j = j + iterator) {
    firstTwo.push(j)
    iterator = iterator + 2
  }

  return firstTwo.length - 1
}