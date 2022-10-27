//console.log(BigInt(115511210043330985984000000))

function extraLongFactorials(n) {
  //convert to BigInt immediatley to avoid rounding/truncating issues 
  n = BigInt(n);
  //start as 1 so BigInt will just return itself on first iteration of for loop (i=n)
  result = BigInt(1)
  console.log(`Big Int 1 ${BigInt(1)}`)

  for (let i = n; i > 0; i--) {
    console.log(`i ${i} n ${n} result ${result}`)
    result *= i
    console.log(result)
  }
  //must return as a string value to avoid scientific notation 
  console.log(result.toString());
}

console.log(extraLongFactorials(30))