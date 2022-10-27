//s is a random string of english letters could be any length <= 100 
//n is the amount of letters to repeat s in order.. like n would be length of infinitely repeating s 

//for example: s = 'abc'
//n = 10

//the string segment being considered is 'abcabcabca' 

//return the number of times 'a' is present in the string 


//find length s and divide n by that amount... this number should provide you with the amount of times s needs to be 
//repeated and combined 

function repeatedString(s, n) {

  //how many times s must be repeated for its length to be greater than n
  let repeatNum = Math.ceil(n / s.length);
  console.log(`repeatNum ${repeatNum}`)

  let aCount = 0;

  //loop through s to get number of a's in string
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      aCount++
    }
  }

  console.log(`acount ${aCount}`)

  //stores amount of a's in all iterations except for the final one which could vary
  let allButLastAmount = aCount * (repeatNum - 1);

  console.log(`allButLastAmount ${allButLastAmount}`)

  //s.length * repeatNum gives you full necessary string length-> - n gives you remainder string length
  //this would be how many to cut off end.. would then need to do .slice(0, -[insertNum])
  //seems more elegant to just subtract s.length from that amount to get the finalStringLength
  let finalStringLength = s.length - ((s.length * repeatNum) - n)

  console.log(`finalStringLength ${finalStringLength}`)

  //get string fragment to iterate thorugh for final iteration 
  let stringFragment = s.slice(0, finalStringLength)
  console.log(`stringFragment: ${stringFragment}`)

  let lastItACount = 0;

  //iterate through last string fragment for remaining a's 
  for (let j = 0; j < stringFragment.length; j++) {
    if (stringFragment[j] === 'a') {
      lastItACount++
    }
  }
  console.log(`lastItACount ${lastItACount}`)

  return allButLastAmount + lastItACount;
}

console.log(repeatedString('abc', 10));

// function repeatedString(s, n) {
//   let repeatNum = Math.ceil(n / s.length);
//   let aCount = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === 'a') {
//       aCount++
//     }
//   }
//   let allButLastAmount = aCount * (repeatNum - 1);
//   let finalStringLength = s.length - ((s.length * repeatNum) - n)
//   let stringFragment = s.slice(0, finalStringLength)
//   let lastItACount = 0;

//   for (let j = 0; j < stringFragment.length; j++) {
//     if (stringFragment[j] === 'a') {
//       lastItACount++
//     }
//   }
//   return allButLastAmount + lastItACount;
// }
