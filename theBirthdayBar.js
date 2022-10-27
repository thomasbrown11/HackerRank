//s is an array of integers ie 
//d is the number that sets of integers need to sum to ie numbers in array must add to equal 4 
//m is the amount of elements that must be added... if 2 then only two elements of s at a time can be added... like 2 and 2 are valid

//the goal of birthday is to return how many combinations of the array work to equal d given the constraint of m... the array must retain its original order 
//so below only sets of 2 elements can be considered... 2+2 is 4 and 1+3 is 4. no other combinations exist without changing the order, therefore birthday should return 2 (as in combinations)


array1 = [1, 2, 1, 3, 2]
sum1 = 3
length1 = 2


function birthday(s, d, m) {
  let verAmount = 0;

  for (let i = 0; i < s.length; i++) {
    let count = 0;
    // console.log(`s[i] ${s[i]} count ${count}`)
    for (let j = 0; j < m; j++) {
      count += (s[i + j]);
      // console.log(`count ${count}`);
      if (j === m - 1 && count === d) {
        // console.log('yes');
        verAmount++
      }
    }
  }
  return verAmount;
}

console.log(birthday(array1, sum1, length1))