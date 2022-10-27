//n is number of stones
//a is a possible different 
//b is a second possible difference 

//manasa starts with a stone with a 0 on it. She finds n number of stones.
//each stone can be either value a or value b greater than the one before

//n = 3 means there's three stones that she finds 
//a = 10 means it could go up by 10
//b = 20 means it could go up by 20

//stone 1 could be EITHER 10 or 20, stone 2 could go up from stone 1 by 10 or 20..
//so stone1 = 10 or 20, if 10 then stone2 could be 20 or 30, if 20 then stone2 could be 30 or 40

//return all possible values of the final stone in ascending order 

//permutations of differences: [10,10,10],[10,10,20],[10,20,20],[20,20,20],[10,20,10],[20,10,10],
//[20,20,10], [20,10,20] 



//may need to add ordering where if a is greater than b then reverse.. 
function stones(n, a, b) {
  console.log(`a ${a}, b ${b}`)
  let arr = [];
  if (a > b) {
    let store = a;
    a = b;
    b = store;
  }
  console.log(`a ${a}, b ${b}`)
  for (let i = 0; i < n; i++) {
    //first iteration is all a's and 0 b's
    //next it is 2 a's and 1 b.. incrementally takes 1 from a and adds 1 to b
    arr.push((n - 1 - i) * a + (b * i));
  }
  let unique = [...new Set(arr)]
  return unique;
}

//based on these looks like n actually equals all stones and not just non-zero stones
console.log(stones(4, 100, 10)) //expected output is 2,3,4
// console.log(stones(2, 2, 1))//expected output is 30,120,210,300



//there's 8 possibilites (2**3)
//stone 1 [10 or 20] stone2 [20,30,or40] stone3 [30,40,50,60]

//       10        20
//   20       30        40
//30 or 40 40 or 50  50 or 60

//notice that the larger number is always covered by the 

//30,40,50,60

//each stone doubles the amount of possibilities that occur 
//so if there's one non-zero stone (n=1) then there'd be 2 possiblities
//if there's 2 (n=2) then there'd be 4, 3 (n=3) there's be 8, 4 n=4 there'd be 16

//could write recursive script 

//min would be Math.min(a,b) * (n-1) this is assuming that the first value is always 0 for n which seems to be true 

//from video: basically push to array: (i * a + (n-1-i) * b)

//for 4,10,100(nab) input: i=0 (first iteration) a=10, n=4, b=100
//n-1-i - 4-1-0=3.. 3*100 is 300.. 0*10 = 0.. 0+300 is 300.. this is the max amount
//now i=1.. 1*10=10.. 4-1-1 is 2*b(100)=200.. 10+200 is 210 (next lowest amount)
//your array will always be equal to n in amounts.. just how the math works out.. there's 4 stones..
//1st it is 2 possibilites, 2nd is 4, 3rd is 8.. but half of the possibilites are repeats so still 
//4 DISTINCT possibilites. 

//the video equation is just based on a visual pattern where max is 

//bear in mind that for every set you're guaranteeing that the order is a being smaller, and b being larger

//(0 * 10 + (4-1-0) * 100) 0 (no a's?) + 3 (number of b's) *100.. 0 a, 3 b 300
//(1 * 10 + (4-1-1) * 100) 10 + (2) * 100 ... looks like 1 a, 2 b 210
//(2 * 10 + (4-1-2) * 100) 20 + 1 * 100 .. so 2 a, 1 b  120
//(3 * 10 + (4-1-3) * 100) 30 + 0 *100 so 3 a, 0 b 30 

//(i* a) literally just determining how many a's you want.. always starts as none
//(n-1-i) how many b's to count.. always starts with all b's 
//n-1 is accounting for zero indexing.. the first amount is always 0 (she starts with 0)
//therefore if you have 4 stones you can only iterate 3 times. for a max of 300
//i here is the iterator guaranteeing for every time a goes up by 1 b goes down by 1 
//in this way (n-1-i) is the limiter incrementing b down as a is incrementing up 
//*100 just works the same way as * 10 

//the value you're really looking at with above equations is: 
// 0a 3b
// 1a 2b
// 2a 1b
// 3a 0b 

//write equation in reverse? 

//(n-1-i) * a + (b * i) .. 3*a + b*0.. 30
//(2) * a + (1 * b).. 2a + 1b .. 120
//1a + 2b.. 210
//0a + 3b .. 300 

