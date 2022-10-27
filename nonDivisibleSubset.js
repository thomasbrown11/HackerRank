//s is array, k is factor 

//s will be random integers and you must return largest subset where the sum of any 2 numbers are NOT evenly divisible by k
//the main key here is to find a qualifying factor by which singular values in s can be measured 

//to find a proper iterable range remember that the only possible range of values of any number % k will be 0-(k-1)
//if evenly divisible then it will equal 0, if not then it can be no more than one less than k or it would be evenly divisible
//and thus 0... so our loop can be 0 through k (0 based)

//the key is to get modulus values of s[i] k 

//from here on out a % k = p and b % k = q where a and b reperesent two numbers from s that can be compared (since sums)

//only one value of p OR k (either a%k or b%k) in a maximal subset can equal 0 or else a sum is 
//guaranteed to be evenly divisible by k

//the next rule is that if p + q = k then it will be divisible by k. There are no other possibilities (just taking for granted)
//if this is true then we can also measure values by p = k - q (so if 2 + 3 = 5 then 3 = 5 -2)
//since these values where p and q add together to equal k will be evenly divisible by k it's only possible to have one
//value or the other (as in all numbers where number % k is either p OR q)... return whichever number is more common 
//as in if 3 numbers equal p and 2 numbers equal q then obviously the 3 (p's) would belong to the maximal subset 

//this is all that is required if k is an odd number (k % 2 != 0) because the number can't be split evenly and thus a repeat
//value for p or q can't equal out to k 
//with this in mind, the exceptional rule for when k is an even number is that a p or q value equal to k/2 can only occur once
//since obviously 2 occurences of that value would equal k (like if k=6 then you can't have two values or p or q = 3);

//make a count array denoting how many times each value of number % k occurs. like how many times does number % k equal 0
//how many times 1? etc. Only go to k-1 (or really i<k) since it's impossible for there to be a remainder more than k-1 

//from there value 0 can only occur once to return 0 if no occurences of num % k = 0 or one if greater than 0

//for instances where k is an odd number measure p and q somehow and return which happens more frequently.. 
//like if k = 5 then num % k could be 2 or 3... but if both of those values exist in the array they are equally divisible
//there return only the numbers wehre num % k equals 2 or num % k = 3... whichever is more common
//this will be done for any possible values where both add up to k... so if k=5 measure p=1 and q=4 as well. 0 and 5 isn't possible

//for even numbers (this can be done separately as it just won't occur if k is odd) measure k/2, determine if there are 
//any values for num % k equal to this value and if 0 add 0 to answer and if greater than 0 add 1 only (as any more would 
//again be evenly divisible 

let array1 = [1, 2, 3, 4, 5, 3, 3, 3]
let num = 4;

function nonDivisibleSubset(k, s) {
  let counts = [];
  //populate counts with 0's to be incremented 
  for (let j = 0; j < k; j++) {
    counts.push(0);
  }
  //increment index of s = to remainder of current index % k;
  //so how many times does num % k = 0, how many times does it equal 1, etc 
  for (let i = 0; i < s.length; i++) {
    let remainder = s[i] % k;
    //console.log(remainder)
    counts[remainder]++;
  }
  console.log(counts)

  let answer = 0
  if (counts[0] > 0) {
    answer++
    console.log(`answer ${answer}`)
  }
  if (k % 2 === 0) {
    console.log('even')
    let halfK = k / 2;
    if (counts[halfK] > 0) {
      answer++
    }
    console.log(halfK)
  }
  console.log(`answer after even ${answer}`)

  //now just populate p = k-q logic and you're done
  //this is done with a loop in the python example 

  //iterate through countArray and measure against another number  
  //do k/2 because you only need the first half of the arrays (you don't need to measure twice)
  for (let c = 0; c < k / 2; c++) {
    if (c === 0) {
      continue
    }
    if (c === k / 2) {
      continue
    }

    answer += Math.max(counts[c], counts[k - c])
    //console.log(answer)
    //console.log(`c ${c},comparator ${comparator}, counts[i] ${counts[c]}, counts[comparator] ${counts[comparator]} answer ${answer}  `)
  }
  return answer
}

console.log(nonDivisibleSubset(num, array1))

// function nonDivisibleSubset(k, s) {
//   let counts = [];
//   for (let j = 0; j < k; j++) {
//     counts.push(0);
//   }

//   for (let i = 0; i < s.length; i++) {
//     let remainder = s[i] % k;
//     counts[remainder]++;
//   }

//   let answer = 0
//   if (counts[0] > 0) {
//     answer++
//   }
//   if (k % 2 === 0) {
//     let halfK = k / 2;
//     if (counts[halfK] > 0) {
//       answer++
//     }
//   }

//   for (let c = 0; c < k / 2; c++) {
//     if (c === 0) {
//       continue
//     }
//     if (c === k / 2) {
//       continue
//     }

//     answer += Math.max(counts[c], counts[k - c])

//   }
//   return answer
// }