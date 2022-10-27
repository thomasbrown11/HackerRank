//x1 and x2 are starting positions for 2 kangaroos
//v1 and v2 are the respective distances they jump per jump 

//return YES if kangaroos will ever jump to the same spot in the same iteration (or jump)
//return NO if not. 

//kang1 starts at 0 and kang2 starts at 2. kang1 jumps v1=5 and kang2 jumps v2=3. After the first jump they will
//both be at position 5 so print YES. 

//if kang 2 starts after kang 1 then kang1 has to move faster than kang2 to catch up 
//if x2 > x1 then v1 must be > v2. 

//can you use modulus? like modulus x1+v1 and modulus x2+v2?? 


//5 and 6... modulus 2 would be 1 and 0 respectively but 2 +3 and 1 + 5... 

//at some point x1+v1*y (where y is number of jumps) has to equal x2+v2*y... 
//you could iterate: 

//100 is obviously an arbitrary, brute force limit
//for (let y=0; y<100; y++) {
//   if ((x1+v1)*y === (x2+v2)*y {
//     return 'YES'
//   } else {
//     return 'NO'
//   }
// }
//this would be a pretty inefficient solution where you would just return No if there was never a yes.. or break when YES
//worst case scenario is very inefficient

//if the second kangaroo is further away then you have to cover a distance of kang2-kang1 distance (h) to catch up
//so if after a jump kang1 is at 7 and kang2 is at 10 you have to cover a distance of h=3

//standard formula velocity (hence v1 and v2) = distance/time.. time can be expressed as a jump so velocity=distance/jump 
//this means that we can algebraically say v*j=d 
//the thinking here is that at some point distance (landing spot) needs to be equal for both kangaroos 
//since we are wanting them to land in the same spot we are needing to make sure they are at the ame distance..

//hence the formula x1+v1*y=x2+v2*y... or distance = distance where y is the jump number.
//if you solve the problem for y the result will be the number of iterations(jumps) needed to reach the same spot
//you can now manipulate this with algebraic processes, subtracting like from like: 

//org. ** x1+v1 * y = x2+v2 *y

//subtract like from like 
//v1*y - v2*y = x2- x1

//combine like w/ like, separate y
//(v1-v2)*y= x2-x1

//move velocities to other side of equation 

//y = x2-x1/v1-v2
//this newly derived formula to find the number of jumps required to meet will now definitely equal a number as
//those values are already defined, however, the number needs to be a whole value for it to be valid... a fractional amount
//implies that there would have to be less than a full jump distance to reach at the same time which isn't possible here

//this can be very simply expressed with modulus: if (x2-x1 % v1-v2 === 0) {return 'YES'}

//this works assuming that x2 is always greater than x1 and v1 is always greater than v2 (kang2 starts later and kang1 faster
//the given restraint of 0 <= x1 < x2 confirms, so you only need to test that v1 is faster than v2 

function kangaroo(x1, v1, x2, v2) {
  //since x2 is further ahead, x1 logically has to be faster to catch up
  if (v1 > v2) {
    //(x2-x1)/(v1-v2) is formula to find the amount of jumps needed to reach the same distance
    //can they reach the same spot using only full jumps? If remainder than less than one jump would have to be used
    //at some point
    if ((x2 - x1) % (v1 - v2) === 0) {
      return 'YES'
    } else {
      return 'NO'
    }
  } else {
    return 'NO';
  }
};

console.log(kangaroo(0, 3, 4, 2));
//3 6, 6 8, 9 10, 12 12
console.log(kangaroo(0, 2, 5, 3));