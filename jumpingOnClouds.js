//c is an array of clouds, values 0 and 1. 0 is normal cloud, 1 is a thunder cloud
//k is jump size 

//character is jumping across clouds. they start with energy level e=100. 
//1 unit of energy is used to make a jump the size of k (given value)

//the character starts the cloud at c[0].. 
//the next cloud's indice is determined from the formula c[(i+k)%n] where i is the iteration and n is the length of c

//so cloud 2 would be at c[(0+2)%4].. this equals c[2]. c[2] happens to point to a value of 1, representing a thundercloud

//a character loses an additional 2 energy (e) points if they land on one. 

//the next jump is calculated with index 2 in mind c[(2+2)%4] = c[0]

//when the player lands back on c[0] the game ends so it lasted a total of 2 jumps

//the first jump to c[2] took 1 energy, plus an additional 2 for the thundercloud, then 1 more jump back to cloud 0 (which was normal cloud)
//for another 1 energy. That's a toal of 4 energy points used out of 100 

let clouds = [0, 0, 1, 0]
let jumpSize = 2;

function jumpingOnClouds(c, k) {
  //energy points
  let e = 100;
  //keep track of total jumps before reaching index 0 again.. start at 1 so that you can do a while loop, making calculations for 
  //first jump first.
  let jumpCount = 1;
  //used for equation 
  let n = c.length;
  //actual location
  let i = 0;
  //this is the equation for the location on each increment
  let jumpTo = (i + k) % n;
  //update location after initial value get for jumpTo 
  i = jumpTo
  //this is only for the first location.. if landing on thundercloud subtract 2 points
  if (c[i] === 1) {
    e = e - 2
    console.log(`1st it ${e}`)
  }
  console.log(`e ${e}`)
  //do the first iteration out and increment all values accordingly? That way when you reach 0 it's done? 
  while (i != 0) {
    jumpCount++
    console.log(`jumpCount ${jumpCount}`)
    //update jumpTo 
    jumpTo = (i + k) % n
    console.log(`jumpTo ${jumpTo}`)
    //update i 
    console.log(`i${i}`)
    i = jumpTo;
    if (c[i] === 1) {
      e = e - 2
      console.log(`e${e}`)
    }
  }
  return e - jumpCount
}

console.log(jumpingOnClouds(clouds, jumpSize))