let string = [
  '111111111111111',
  '111111111111111',
  '111111011111111',
  '111111111111111',
  '111111111111111']

let sub = [
  '11111',
  '11111',
  '11110']



// console.log(string)

let splitter = string[1].split(sub[0][0]) // G[i].split(P[PMid][0])
//what this actually gives you is the total amount of times that P[PMid][0] occurs in G[i].. they could be in any position so it's not valid to subtract P[PMid].length here 
let pZeroStart = (splitter.length - 1) //needs to limit based on if there is room in G[i] to the right... not much point testing the final digit of G[i] when Pmid can't fit in it... P[PMid].length will be the right 
//thing here... sub[1].length is the substitute 
// console.log(`splitter ${splitter}, splitter length: ${splitter.length}, amount of 1 beginnings: ${pZeroStart}`)


//after PStart obv first one would fail.. how to test second it of sub[0]? 

//splitting the array does not include the character itself, but rather leaves that character out and starts the next substring in the array at the character after that
//so can you split the array and somehow account for this? Already determined it's not really possible to limit iterating through every occurence of this number in the string, but you can at least use that incrementor (MatchesInString)
//to set PStart saving you from using another loop since you have to use split anyway. Might as well just store the value of the split array at the top of the k loop and then pull from it 

// console.log('11111'.split('1'))
//starting postions of 1 would be index 2, 4, 5, 6, 7
let splitArray = '5633845374'.split('3')
console.log(splitArray)
// let PStart = splitArray[0].length//this could be the initial start value.. you could then define PStart again.. add k?

//this gives you the first occurence of P[PMid] but then how do you increment to the next occurence of the whole of PPMid without it 
//split start at PStart+1? 
//then whatever the next split is it's PStart + that length instead? 
let PStart = '56338453743845'.split('3845')[0].length;
for (let k = 0; k < splitArray.length - 1; k++) {
  console.log(k, PStart)
  //current value of Pstart + the length of the next indice + 1 to account for testing number (the first char of P)
  let removeFail = '56338453743845'.slice(PStart + 1)
  let newOne = removeFail.split('3845')[0].length
  console.log(`removeFail ${removeFail}, newOne ${newOne}`)
  PStart = PStart + 1 + newOne
};

//the length of the split array -1 is DEFINITELY the right value for MatchesInString since that is the iterator k=0 so it can still be k<MatchesInString which would result in a loop for every occurence of that number 

