//n is number of prisoners
//m is number of candy
//s is starting point

//which prisoner gets the last candy, looping through in order and always incrementing by one 

//brute force doesn't work as the data sets can be huge.. need to use math or more efficient data structure.

//2 ways to go about this..

//1.get the position from starting position first (ie where it would land if you started on one only factoring in n and m)

//2.start from s (starting point) and go from there 

function saveThePrisoner(n, m, s) {
  //if the amount of candies can be distributed equally and you start 
  //on the first person then logically everyone will get the same amount 
  //thus the final piece will be given to the final person 
  if (m % n === 0 && s === 1) {
    return n
    //if there's an uneven amount then use modulus to get the remainder of pieces after candies have been distrubuted equally among members.. like if there's 3 prisons and 10 candies
    //they each get three and then 1 is left, thus makes candies % prisoners a good test. 
  } else {
    let x = m % n;
    //the remainder also would be where the last candy would land without starting position being factored. To get starting position just add the value with zero indexing considered (s-1)
    let position = x + (s - 1)
    //if the final position is over the number of prisoners (like there were 10 prisoners, you started on 9 but you had more than 1 candy so it would put you in next iteration)
    //then subtract the number of prisoners to get the right position in the right iteration
    if (position > n) {
      position = position - n
    }
    return position
  }
}

console.log(saveThePrisoner(4, 6, 2))
//console.log(saveThePrisoner(5, 2, 2))
//console.log(saveThePrisoner(13, 140874526, 1))
//console.log(saveThePrisoner(10, 20, 1))

//1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
//1 2 3 4 5 6 7 8 9 10 1  2  3  4  5  6  7  8  9  10

//is there a time where modulus 0 

//supposed to be 13 

console.log(140874526 % 13)
console.log(13 * 10836502)//this equals m 

//so what this boils down to is it needs to fall under the intial if statement where it needs to be equal to n


//1 2 3 4 5 6
//2 3 4 1 2 3 

//1 2 
//2 3 4 5

//1 2 3 4 5 6 7 8 9 10
//1 2 3 1 2 3 1 2 3 1 

//1. starting position after 
//in both instances where m is greater than n you iterate (at least partially) through the prisoners as many times as 
//n(prisoner) fits into m (candy) plus reaminder ... hence Math.ceil(m/n) where the remainder is another iteration
//so ex 1 iterates twice and ex 3 iterates 4 times (4 goes into 6 1once plus extra, 3 into 10 3 plus extra)

//1 2 3 4 1 2
//1 2 3 4 5 6 

//this quickly gives you the remainder of going through the iterations like where you'd land at the end if in starting 1 
// console.log(6 % 4)// 2 as in first line above.. so m % n
// console.log(10 % 3)//1 as in would land on 1 if starting from 1 with 3 prisoners and going to 10 

//testing for if m < n (the above 2 could be under m > n if doesn't work) 
// console.log(2 % 5) // returns 2? this is actually just fine.. basically it zeroes out and just returns where it would land
//still.. operations are 2/5 with no remainder (=0) then 0 * 5 (0) and then add the dividend (2)... so basically cancels 5
//which is great since it isn't really a factor. If m<n then obviously it will just land where the end of the candy is
//this works for 3 and 4 as well

//what about when there's equal prisoners to candy? 
// console.log(5 % 5)//returns 0 ... so for like 5,5,2 
//1 2 3 4 5 
//2 3 4 5 1 
//that's why it seems like you'd have to use zero indexing (like s-1) to get the final result 

//if it was 5,5,5 
//1 2 3 4 5
//5 1 2 3 4 
//where 5%5 is 0 and s(5)-1 is 4 that works.. 

//6,4,3
// console.log(4 % 6)//still good here to always use m % n 

//4 + (s(3)-1) is 6 algo would be m % n = x.. x + (s-1)

//1 2 3 4
//3 4 5 6 works 

//4,6,2... algo works 


//3,10,3... 2ould be 1 + (3-1) which would be 3

//1 2 3 4 5 6 7 8 9 10
//3 1 2 3 1 2 3 1 2 3 

//10,3,8 worked 

//***now works 
//10,3,9   3 + 9 - 1 11 ...doesn't fucking exist if greater than n then minus n? 
//like 11 - 10 is 1 
//9 10 1  works 

//10, 3, 10 3 + 10 -1 12... 12-n(10) is 2 
//10 1 2 

//************* */
// if it was 5,5,1 
//1 2 3 4 5
//1 2 3 4 5 where 5 % 5 is 0 and s(1)-1 is 0. so that doesn't work here 

//is it specific to if m = n? no because all other s's work 

//***************** */
//5 5 1
//0 + 1 -1 is 0.. but should be 5 
//1 2 3 4 5 
//***************** */

//5 5 3 ... 0 + 3-1 is 2 works 
//3 4 5 1 2 

//5 5 4 0 + 4-1 works 

//5 5 5 ..5 1 2 3 4 .. 0 + 5-1 = 4 

//10 10 3 0 2 
//1 2 3 4 5 6 7 8 9 10
//3 4 5 6 7 8 9 10 1 2 

//10 10 1 0... broken ... so if n===m and s = 1 postion = m ? 

//10 9 1 ...9 % 10 = 9 + 1-1 is 9 good 

// console.log(10 % 9)

//9 10 1 ... x=1 + 1-1 is 1 works 












