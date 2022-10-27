//a is an array
//k is the amount of times it should be rotated (cut last value and paste to start)
//queries is the indices you want to report 

function circularArrayRotation(a, k, queries) {
  for (let i = 0; i < k; i++) {
    let popper = a.pop()
    console.log(`popper ${popper}`)
    a.unshift(popper)
    console.log(a)
  }
  let b = [];
  for (let j = 0; j < queries.length; j++) {
    b.push(a[queries[j]])
    console.log(b)
  }
  return b
}

console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]))