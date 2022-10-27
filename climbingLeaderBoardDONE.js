//needs to return an array with values only related to the original array (of leaderboard values)
//therefore you will not be creating a new array with inserted values, but rather you need to measure the rank and return it
//this will probably look like an index +1 since index is obviously 0-indexed 

//ranked is the leaderboard array
//player is the array of player scores 

//use iterative binSearch since it's less verbose 

let leaderboard = [100, 100, 50, 40, 40, 20, 10];
let playerScores = [5, 25, 50, 120];

const climbingLeaderboard = (ranked, player) => {
  //array of scores to be returned 
  let rankedArray = [];
  //remove duplicates from ranked 
  let sortRank = [... new Set(ranked)];

  //loop through player score array and push a value for each score to rankedArray
  for (let i = 0; i < player.length; i++) {
    console.log(player[i])
    // let start = 0;
    // let end = sortRank.length - 1;
    //use true as testing conditional so only returning a push will break loop (true will always be true so only returning will break)
    // console.log(`start ${start}, end ${end}`)
    let start = 0;
    let end = sortRank.length - 1;
    //mid will need to be recalculated on each iteration
    //let mid = Math.floor((start + end) / 2)
    //console.log(`start ${start}, end ${end}, mid ${mid}`)
    while (start <= end) {
      //recalculate mid upon each halving of array 
      let mid = Math.floor((start + end) / 2)
      console.log(`start ${start}, end ${end}, mid ${mid}`)
      //if playerscore is greater than all scores in ranked array or iterative start of array push current rank of start+1 (this is start value's rank, but that value would change to 2 if a greater value came along)
      if (player[i] > sortRank[start]) {
        rankedArray.push(start + 1);
        break;
        //if playerscore is less than all leaderboard scores or iterative end score (like more than mid less than next larger value) give it the score of one less than end (end's score is end+1, so next score is end+2)
      } else if (player[i] < sortRank[end]) {
        rankedArray.push(end + 2);
        break;
        //if player score is equal to mid score then push mid score (index +1) to rankedArray;
      } else if (player[i] === sortRank[mid]) {
        //can't return the push because it breaks the entire function and returns the number of elements in rankedArray
        rankedArray.push(mid + 1);
        //break current while loop iterationand begin next for loop iteration 
        break;
      }
      //if player score is less than middle leaderboard score change start so that only the smallest half of the array scores will be tested on next iteration
      else if (player[i] < sortRank[mid]) {
        start = mid + 1
        console.log(`new start ${start}`)
        //if player score is greater than middle leaderboard score change end so that you only test the largest half of ranked scores on next iteration 
      } else if (player[i] > sortRank[mid]) {
        end = mid - 1;
        console.log(`new end ${end}`)
      }
    }
  }
  return rankedArray;
};

console.log(climbingLeaderboard(leaderboard, playerScores));

//no comment version 
// const climbingLeaderboard = (ranked, player) => {
//   let rankedArray = [];
//   let sortRank = [... new Set(ranked)];
//   for (let i = 0; i < player.length; i++) {
//     let start = 0;
//     let end = sortRank.length - 1;

//     while (start <= end) {
//       let mid = Math.floor((start + end) / 2)
//       if (player[i] > sortRank[start]) {
//         rankedArray.push(start + 1);
//         break;
//       } else if (player[i] < sortRank[end]) {
//         rankedArray.push(end + 2);
//         break;
//       } else if (player[i] === sortRank[mid]) {
//         rankedArray.push(mid + 1);
//         break;
//       }
//       else if (player[i] < sortRank[mid]) {
//         start = mid + 1
//       } else if (player[i] > sortRank[mid]) {
//         end = mid - 1;
//       }
//     }
//   }
//   return rankedArray;
// }

// console.log(climbingLeaderboard(leaderboard, playerScores));