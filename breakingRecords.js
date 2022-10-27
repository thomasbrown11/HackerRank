//scores parameter is array with integers representing game scores
//index 0 sets the min and max (lowest and highest score) as its valiue (ie if 12 then min=12 and max=12)
//index 1 will now be compared to min and max.. if it's lower then min will be set to index 1 (like if 5 then it's lower than 12 so new min is 5)
//if index 1 is higher it will now be the new max. 
//each time min and max changes it is logged to a minCounter and a maxCounter 
//breakingRecords returns an array [maxCounter, minCounter ]

let games = [12, 24, 10, 24];

function breakingRecords(scores) {
  let min = scores[0]
  let max = scores[0]
  let minCounter = 0;
  let maxCounter = 0;

  for (let i = 0; i < scores.length; i++) {
    //console.log(`scores[i] ${scores[i]} min ${min} max ${max} minCounter ${minCounter} maxCounter ${maxCounter}`)
    if (scores[i] > max) {
      max = scores[i]
      maxCounter++
    }
    if (scores[i] < min) {
      min = scores[i]
      minCounter++
    }
  }
  return [maxCounter, minCounter];
}

console.log(breakingRecords(games));