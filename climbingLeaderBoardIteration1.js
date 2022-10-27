let leaderboard = [100, 100, 90, 2];
let playerScores = [100, 100, 80, 100];

const climbingLeaderboard = (ranked, player) => {
  //uniqueRank is an array with all duplicate values removed from rank 
  let uniqueRank = [...new Set(ranked)]
  let rankArray = [];
  let pushRankArray = uniqueRank;
  //console.log(uniqueRank)
  //console.log(rankNumbers)
  for (let i = 0; i < player.length; i++) {
    for (let j = 0; j < uniqueRank.length; j++) {
      //console.log(`index ${i}. rank index ${j} player ${player[i]}. score ${uniqueRank[j]}`)
      //if value matches return uniqueRank indice as rank of current player array element
      if (player[i] == uniqueRank[j]) {
        rankArray.push(uniqueRank.indexOf(uniqueRank[j]) + 1)
        break;
      } else {
        //if there is no match then run this code 
        //add value to uniqueRank shallow copy and push
        pushRankArray.push(player[i])
        //reorder shallow copy in descending order 
        pushRankArray.sort(function (a, b) { return a - b }).reverse()
        //push current indice of shallow copy +1 for proper rank by matching pushRankArray value to current player element value
        rankArray.push(pushRankArray.indexOf(player[i]) + 1)
        //always break after first iteration
        break;
      }
    }
  }
  return rankArray;
}

console.log(climbingLeaderboard(leaderboard, playerScores));

//time limit issues? Mostly working but needs to be optimized 
