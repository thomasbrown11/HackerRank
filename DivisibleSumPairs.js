//n is the length of ar... for some reason? 
//k is a number that sums of a pair of numbers must be divisible 1+2 (array1[0]+array1[2] = 3 % 3 (k) = 0)
//ar is the array

//first number is ar[i], second is ar[j] (ie array1[0] can be first i, then j would be any other number)
//i must be less than j (as in the iterator, not the number) and the two array elements summed must be divisble by k. 
//this is specifically important because it means that you shouldn't order the list and you aren't considering values with a reloop..
//ie [ar[5] doesn't need to be measure against ar[1]... the highest comparison here would be ar[4] against ar[5] since any other pair would break the constraints of i<j; (i=4 and j=5 here)
//return how many combinations are divisible by the k

let array1 = [1, 3, 2, 6, 1, 2]

let array1Length = array1.length;

let divisor = 3

function divisibleSumPairs(n, k, ar) {

  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    //console.log(ar[i])
    for (let j = i + 1; j < ar.length; j++) {
      //console.log(`ar[i] ${ar[i]} ar[j] ${ar[j]}`)
      if ((ar[i] + ar[j]) % k === 0) {
        // console.log(`i ${i} j ${j} ar[i] ${ar[i]} ar[j] ${ar[j]} i+j ${ar[i] + ar[j]}`)
        count++
        // console.log(count)
      }
    }
  }
  return count;
}

console.log(divisibleSumPairs(array1Length, divisor, array1))