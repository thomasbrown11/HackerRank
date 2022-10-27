//k is the max height someone can jump
//h is array of heights of all hurdles 

//hurdleRace() should return how many doses of potion the runner would need to jump over the tallest hurdle (if player can jump 4 units they can clear h=4, but if they could only jump 2 (k=2) and the h was still 4 they would need 2 potions so would return 2)
let array = [1, 4, 3, 5, 6, 1];

function hurdleRace(k, h) {
  let sortArray = h.sort((a, b) => { return a - b });
  let tallest = sortArray[sortArray.length - 1]
  let potions;
  if (k >= tallest) {
    potions = 0;
  } else {
    potions = tallest - k
  }
  return potions;
}

console.log(hurdleRace(1, array))