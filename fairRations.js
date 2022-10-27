//B is an array of ints representing number of loaves 

//each time you give a loaf out you have to give a loaf to the person in front of OR behind them
//as well. each loaf is counted. This means 2 loaves are always distributed at a time 

//return the min number of loaves required to make all numbers in array even 
//if not possible return NO 

function fairRations(B) {
  let totalCount = 0;
  for (let i = 0; i < B.length; i++) {
    //test for even numbers
    let behind = B[i - 1] % 2;
    let current = B[i] % 2;
    let inFront = B[i + 1] % 2;
    console.log(`behind ${behind}, current ${current}, inFront ${inFront}`)
    if (i === B.length - 1 && current === 1) {
      return 'NO';
    }
    //if even
    if (current === 0) {
      continue
    } else {
      console.log('odd')
      B[i] = B[i] + 1
      B[i + 1] = B[i + 1] + 1
      totalCount = totalCount + 2
      console.log(`B[i] ${B[i]} B[i+1] ${B[i + 1]}, totalCount ${totalCount}`)
    }
  }
  return totalCount;
}

console.log(fairRations([4, 5, 6, 8]))

//it doesn't matter what order you do it in in this problem.. if you alter i=3 and then i=1 it's same 
//moves vs i=1 then i=3

//if you iterate in order then you never have to worry about altering the person behind