//there is a larger and smaller grid (r and column square)
//if smaller grid is present in larger grid returns YES.. if not NO 

//G is the search grid and P is the pattern grid.. is P in G? 

//there will never be more than 1000 rows or columns and 
//P will always be equal to or smaller than G

//this is all correct now except no column testing.. '21' is present in '4321', but not 
//in relation to '12' in '1234'

function gridSearch(G, P) {
  let GColumn = G[0].length;
  let PColumn = P[0].length;
  let PMid = Math.floor((0 + (P.length - 1)) / 2);
  let GRow = G.length;
  let PRow = P.length;
  console.log(`iterable amount (outer while loop lines of P to be scanned): ${PRow - PMid - 1}`)
  console.log(`GColumn ${GColumn}, GRow ${GRow}, PColumn ${PColumn}, PRow ${PRow}, PMid ${PMid}`);

  //iterate through all lines of G and find matches for PMid only
  for (let i = 0; i < G.length; i++) {
    //if PMid is in G[i] and there's enough rows Below G[i] in G (i >= PMid) to fit P as well as enough space above (3rd conditional) then test
    if (G[i].includes(P[PMid]) && i >= PMid && G.length - i - 1 >= PRow - PMid - 1) {
      console.log(`G[i] ${G[i]}.. G.length-G[i] ${G.length - i}`)
      //test for correct column positioning (insert PStart as first argument of .slice)

      //PStart just splits the string, adding a comma right before the first occurence of the PMid substring 
      //therefore using the length of the first indice of the resulting array gives you the start point of the 
      //first occurence of PMid in the G[i] string
      //you would probably need to mutate the G[i] string, cutting the first part of it after testing if you need to test
      //the same string... you would use matchesInString only as the iterator since this simply gives you the amount of splits that happened
      //in the string when run against PMid

      //PStart can be completely changed after the first instance. just set PStart = '' at end of inner while loop 
      //this needs to be outside of both while loops since you want to avoid a reset. 


      //this is basically just saying PStart plus the length of a string of P which is all the same length.
      //just start where it starts and go until the end of the substring (P) length only... therefore only PStart would have to change to reflect being
      //on the next part of the string.. PEnd will auto-adjust, being dependent on PEnd...

      //should this be moved to the top of the loop? If it fails then definitely because PStart is changing.. so will the redefinition carry in the loop 
      //or will it be the same value the whole way through? 
      // let PEnd = PStart + P[0].length;
      // console.log(`pmid is in G row ${G[i]}, at G index ${i} and starts at index ${PStart}`)
      // console.log(`PStart ${PStart}, PEnd ${PEnd}`)

      //iterate through all lines +- lines of P
      let j = 1;
      //iterate through all occurences of PMid in G[i]
      let k = 0;
      //make array from G[i], splitting at first char of P[PMid]
      let PZeroMatches = G[i].split(P[PMid][0]);
      //use length of that array -1 to get proper amount of iterations to test all occurences of first P char in G[i]
      let matchesInString = PZeroMatches.length - 1;
      //meaure all lines below and above G[i] at the same substring segment position as G[i] itself.. test all matches of P[PMid] in G[i] by incrementing to each occurent on P[PMid]'s first char
      // let PStart = PZeroMatches[0].length;
      //start at first occurent of P[PMid] in G[i]
      let PStart = (G[i].split(P[PMid]))[0].length;
      console.log(`PZeroMatches ${PZeroMatches}, matchesInString ${matchesInString}, PStart ${PStart}`)
      console.log(`pmid is in G row ${G[i]}, at G index ${i} and starts at index ${PStart}`)

      while (k < matchesInString) {
        let PEnd = PStart + P[0].length;
        while (j < (PRow - PMid)) {
          console.log(`you are on iteration ${j}.. lines above and below PMid at j increment`)
          console.log(`G + j ${G[i + j]}, P + j ${P[PMid + j]}`)
          console.log(`G[i-j] ${G[i - j]}, P[PMid-j] ${P[PMid - j]}`)
          console.log(`PStart ${PStart}, PEnd ${PEnd}`)
          //this prevents .includes() breaking when G[i-j] = undefined
          //if there is no row above PMid or G[i]
          if (G[i - j] === undefined && P[PMid - j] === undefined) { //deleted: && P[PMid - j] === undefined... && P[PMid - j] != undefined could work? 
            console.log('there are no lines in P or G above PMid')
            //do nothing;
          }
          //test for row above PMid in both arrays in correct position when there is row(s) above PMid in P 
          //second condition prevents slice breaking when there's a row above G[i] but not a row about PMid 
          else if (!G[i - j].slice(PStart, PEnd).includes(P[PMid - j]) && P[PMid - j] != undefined) {
            console.log(`P[PMid - j] ${P[PMid - j]}`)
            console.log('pmid-j not in G')
            break;
          }
          //test for row below PMid in both arrays in correct position
          if (!G[i + j].slice(PStart, PEnd).includes(P[PMid + j])) {
            console.log(`P[PMid + j] ${P[PMid + j]}`)
            console.log(`G[i + j].slice(PStart, PEnd) ${G[i + j].slice(PStart, PEnd)}`)
            console.log('pmid+j not in G')
            break;
          }
          console.log(`no problem j ${j}`)
          //this should only trigger on the final iteration after all tests for all lines of P have matches G... while loop will break before this point
          //if any lines fail to match.. this if will fail and be skipped if not the final iteration 
          if (j === PRow - PMid - 1) {
            return 'YES'
          }
          //iterate to next lines relative to PMid  
          j++
        }
        //**redefine PStart here? Should go through all P lines in 1st position... return yes it it doesn't break...  */
        //iterate to next PMid match column positioning in G[i] and measure all lines above/below at same string segment position

        //this is only the next slice to search through, it's not a legit answer to PStart 
        // console.log(`G[i] ${G[i]} G[i].slice(PEnd) ${G[i].slice(PEnd)} PEnd ${PEnd}`)
        //this isn't tooled properly and isn't taking what is sliced away into account, giving you the wrong position
        let removeFail = G[i].slice(PStart + 1)
        console.log(`removeFail ${removeFail}`)
        //this is the new PStart when it works 
        //when there was no other match it just returned full length of string because the split never split anything and returned same value

        //This definition is the only problem with the code.. it needs to increment to the next occurence of P[PMid][0] rather than skip a whole chunk since sometimes the start of the correct answer
        //is in the previous chunk... 
        PStart = PStart + 1 + (removeFail.split(P[PMid])[0].length)
        // PStart = PStart + 1 + PZeroMatches[k + 1].length;
        console.log(`new PStart ${PStart}`)

        //can use p end to slice from P end will then be redefined? 
        k++
      }
    } else {
      continue;
    }
  }
  return 'NO';
}

// console.log(gridSearch(
//   ['123412',
//     '561212',
//     '123634',
//     '781288'],
//   ['12',
//     '34']
// ))
//this raises the point that currently the code can only test a line once, but this test is only
//successful on a second iteration of a single line ... need to test by string index? 
//really don't want to do a second full loop. 

//need to resolve slice first but also your code doesn't account for multiple possible matches.. it says there's 3 of '11111' but there's really 11 possible
// console.log(gridSearch(
//   ['111111111111111',
//     '111111111111111',
//     '111111011111111',
//     '111111111111111',
//     '111111111111111'],
//   ['11111',
//     '11111',
//     '11110']
// ))

// above problem worked, but now there's a problem where '3' is the beginning of 3845 
//basically current PStart is only testing every segment starting with the correct number of the correct length, but it's not making sure that that segment is completely correct
//so all lines above and below could be correct (the testing is good there) but then G[i] itself could be incorrect, only having the right length and right first char. 

//you can change the init of pstart to just be the place where it first starts (G[i].split(P[PMid]).length)
// console.log(gridSearch([
//   '7283455864',
//   '6731158619',
//   '8988242643',
//   '3830589324',
//   '2229505813',
//   '5633845374',
//   '6473530293',
//   '7053106601',
//   '0834282956',
//   '4607924137'], [
//   '9505', //changes 5 to 6
//   '3845',
//   '3530',
//   '3106'
// ]))

// console.log(gridSearch(
//   ['1234',
//     '4321',
//     '9999',
//     '9999'],
//   ['12',
//     '21']))

function gridSearch(G, P) {
  let PMid = Math.floor((0 + (P.length - 1)) / 2);
  let PRow = P.length;
  for (let i = 0; i < G.length; i++) {
    if (G[i].includes(P[PMid]) && i >= PMid && G.length - i - 1 >= PRow - PMid - 1) {
      let j = 1;
      let k = 0;
      let PZeroMatches = G[i].split(P[PMid][0]);
      let matchesInString = PZeroMatches.length - 1;
      let PStart = (G[i].split(P[PMid]))[0].length;
      while (k < matchesInString) {
        let PEnd = PStart + P[0].length;
        while (j < (PRow - PMid)) {
          if (G[i - j] === undefined && P[PMid - j] === undefined) {
            //do nothing;
          }
          else if (!G[i - j].slice(PStart, PEnd).includes(P[PMid - j]) && P[PMid - j] != undefined) {
            break;
          }
          if (!G[i + j].slice(PStart, PEnd).includes(P[PMid + j])) {
            break;
          }
          if (j === PRow - PMid - 1) {
            return 'YES'
          }
          j++
        }
        let removeFail = G[i].slice(PStart + 1)
        PStart = PStart + 1 + (removeFail.split(P[PMid])[0].length)
        k++
      }
    } else {
      continue;
    }
  }
  return 'NO';
}