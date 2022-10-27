//s is the intial string 
//t is another string
//k is a number referring to number of operations

//the only allowed operations are appending a lowercase letter to the first string, 
//or delete the last character of the string.. deleting a character from an empty string yields an empty string

//deleting from an empty string is a valid operation (if you have more operations left) 
//if(opCount <= k) {return 'Yes'} else {return 'No'}... this should handle that 

//return 'Yes' if you can convert the s string to the t string in exactly k operations, else print 'No'


function appendAndDelete(s, t, k) {
  //see how many letters match.. since you can only alter/delete the last char matching in exact position
  //is the only relevant information 
  let matchString = ''
  //find all matching letters in matching spots
  for (let i = 0; i < s.length; i++) {
    //console.log(s[i])
    if (s[i] === t[i]) {
      matchString = matchString.concat(s[i])
    } else {
      //break on first character that doesn't match
      break;
    }
  };
  console.log(`matchString ${matchString}`)
  //find amount of operations necessary after matches removed for both strings
  let sLength = s.length - matchString.length;
  let tLength = t.length - matchString.length;

  //get how many ops remain from total operations after string conversion complete
  let leftOverOps = k - (sLength + tLength)
  console.log(`sLength ${sLength} tLength ${tLength} leftoverOps ${leftOverOps}`)

  //remove all matching characters in matching positions from start of strings. If what is left is less than total operation
  //and there's an even amount of operations (or 0 since 0%2 still equals 0) the operation is possible
  //an add and subtract (after completing the string conversion) is necesary to shore up leftover conversions
  //so an uneven amount of operations makes this impossible 
  if (sLength + tLength <= k && leftOverOps % 2 === 0) {
    return 'Yes';
    //if there's operations left after deleting and adding back whole string you can use as many operations as needed
    //by doing a delete on 0
  } else if (s.length + t.length <= k)
    return 'Yes';
  else {
    return 'No';
  };

}

//console.log(appendAndDelete('aaaaaaaaaa', 'aaaaa', 7))
//console.log(appendAndDelete('yu', 'y', 2))
//console.log(appendAndDelete('aba', 'aba', 7))
//is leftOverOps actually good? like right now it's subtracting all matching characters and adding 
//the amount of characters left of both... meaning how many operations total would be needed to make them the same
//then it's subtracting the amount of necessary operations from the number of operations 
//this tells you how many bunk operations you need to make basically if it's going to be possible
//like you've already spelled aba but you could subtract 3, add 3 and you'd have one left over 

//if sLength + tLength === 0 (they match) and s.length + t.lenght <= k you're always solid
//that's because you'll be able to go down to zero and exhaust any possible extra operations 

console.log(appendAndDelete('abcdef', 'fedcba', 15))

//what about if sLength is 0?
//as in 'aaaaa' 'aaaaaaaaaa' 7 
//do the tests already take care of this? 

//maybe see how many string characters match? remember only the last position can be altered though so it has to be a match
//in the exact spot? 

//'y' 'yu' 2 doesn't work because you have to add 'u' but then any other operation would be invalid.. how to test 
//console.log(2 % 2)
//is this a relevant test? 
//console.log(1 % 2)

//Math.abs(slength-tlength) >= k? 
//in the above case 0-1 Math.abs(0-1) is 1.. as in there's a difference of 1

//is tlength-sLength better? like would it be an issue if s was longer? yes still impossible so Math.abs is better 

//yu, y, 2 
//this is impossible again since you would have to subtract 

//yu, y, 3
//thsi is possible because you can 

//y, yu, 3 

//bear in mind if the difference between s and t came out to 0 having more operations would be fine.. is that the key? 

//'hackerrank', 'hackerdank', 9 
//5-9 5-9... 4 + 4 = 8. against k 9 
//so 8 is less than k but still impossible.. if there were one more operation you'd be fine though

//hackerrank, hackerdank, 10
//you'd still have 8, but you could add and then delete a number at the end 

//it it that there's a difference of 1? like 9 % 8
//console.log(9 % 8)
//so is 'k % (sLength+tLength) != 1' the better test?

//what about hackerrank, hackerdank, 11 

//still 8, so you'd have 3 operations... you then would be fucked again because you could delete and add
//but then you'd have one left over... 

//so maybe it's more like it has to be an even amount of operations left over 
//let leftOverOps = k % (sLength+tLength) 
//if (leftOverOps % 2 === 0) then you're good... this works if you have 0 as well so wouldn't need to include 
//specific conditional of s and t being equal or getting to 0 etc 

//or would you? 

//'you' 'boo' 7
//subtract 3, do an extra delete op, add 3 


//'you' 'boo' 8
//subtract 3, do 2 delete ops, add 3




