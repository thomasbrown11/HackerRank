//the prompt isn't asking for all scores, but rather to only compare to the original leaderboard 
//or rather what is happening is linear, so the first score here would be rank 6, not 8
//the other scores haven't happened yet

//user tip: if playerScores are sorted to be ascending you somehow don't need to reiterated entire list
//somehow you can just start at the last index? 
//maybe make a new array that is sorted, get the ranks, and then loop again? How is that more efficient? 

let leaderboard = [100, 100, 50, 40, 40, 20, 10];
let playerScores = [5, 25, 50, 120];

const climbingLeaderboard = (ranked, player) => {
  let rankArray = [];
  //remove duplicates from ranked array 
  let ordered = [... new Set(ranked)]
  //console.log(ordered)
  for (let j = 0; j < player.length; j++) {
    ordered.push(player[j]);
    //console.log(ordered)
    let newArray = ordered.sort(function (a, b) { return a - b }).reverse()
    //console.log(newArray)
    // ordered.sort(function (a, b) { a - b }).reverse()
    //if doesn't work then changed ordered to newArray in below loop
    for (let m = 0; m < newArray.length; m++) {
      if (player[j] == newArray[m]) {
        rankArray.push(newArray.indexOf(player[j]) + 1);
        break;
      }
    }
  }
  //console.log(rankArray);
  return rankArray;
}
//console.log(climbingLeaderboard(leaderboard, playerScores))
climbingLeaderboard(leaderboard, playerScores);