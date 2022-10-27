//bill is an array of integers representing item cost for a shared bill 
//k is an integer representing an index in bill (aka bill[k]) that wasn't eaten 
//b is the amount of money brian charged anna 

//brian gets the bill and calculates the total anna owes.. they are only paying for what they ate so anna should only pay the sum of times she ate divided by 2 (split with brian)

//if b is the correct amount then bonAppatit should print 'Bon Appetit'.. if brian overcharged than it should print what he owes her (the remaineder of b - the calculation)

let accrued = [3, 10, 2, 9];
let notEaten = 1;
let amountCont = 12;

function bonAppetit(bill, k, b) {

  bill.splice(k, 1)
  //console.log(bill)


  let total = bill.reduce((a, b) => { return a + b }) / 2;

  //console.log(total)

  if (total === b) {
    console.log('Bon Appetit')
  } else {
    console.log(b - total)
  }
}

console.log(bonAppetit(accrued, notEaten, amountCont))