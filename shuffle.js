
let array = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];


let shuffle = (array) => {
  let indexArray = [];
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let rand = Math.floor(Math.random() * array.length);
    while (indexArray.includes(rand)) {
      rand = Math.floor(Math.random() * array.length);
    }
    indexArray.push(rand);
    newArray.push(array[indexArray[i]])
  }
  return newArray
}

console.log(shuffle(array))

function averageTestScores(array) {
  let sum = array.reduce((a, b) => { return a + b })
  console.log(sum)
  return sum / array.length
}

let scores = [56, 76, 91, 55, 100]

console.log(averageTestScores(scores))