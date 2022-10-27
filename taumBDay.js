//b is amount of gift type 1
//w is amount of gift type 2
//bc is cost of type 1
//wc is cost of type 2
//z is the cost of conversion (either can be converted to the other type)

//given these parameters what is the minimal total cost? 

function taumBday(b, w, bc, wc, z) {
  //determine if bc+z or wc is least 
  //multiply least amount by w 
  //dteremine if wc+z or bc is least 
  //multiply least amount by b

  //return sum of both 
  let bTotal = 0;
  let wTotal = 0;
  console.log(`b ${b}, w ${w}, bc ${bc}, wc ${wc}, z ${z}, wc+z ${wc + z}, bc+z ${bc + z}`)
  if (bc < wc + z) {
    bTotal = bc * b;
  } else {
    bTotal = (wc + z) * b;
  }
  console.log(`bTotal ${bTotal}`)

  if (wc < bc + z) {
    wTotal = wc * w
  } else {
    wTotal = (bc + z) * w;
  }
  console.log(`wTotal ${wTotal}`)

  return bTotal + wTotal;
}

//console.log(taumBday(3, 5, 3, 4, 1))
//console.log(taumBday(742407782, 90529439,
//  847666641, 8651519, 821801924))

//Failed Test case 
// 10
// 742407782 90529439
// 847666641 8651519 821801924
// 142640749 652432197
// 701695848 936714099 324221606
// 736418699 754161925
// 912285746 841360803 736841333
// 177076565 651852957
// 926160119 137199984 872396383
// 232813954 654376491
// 933554781 63130979 441062505
// 988402860 283959645
// 572488886 802335530 193057740
// 571683259 397259663
// 136103531 271866251 405911181
// 810421806 414506999
// 58343377 512117653 203737449
// 235081335 101052703
// 957899374 147367080 942413506
// 547257058 324443644
// 594266462 325933528 461643627

//Solution
// 617318315833461267
// 711232858900355655
// 1306346564995590229
// 253435467783263923
// 158694707102490425
// 783234000390521730
// 185809605416820942
// 155917081637180036
// 240076105402801530
// 430963577188284828


//this amount vetted for bTotal 
//console.log(830453443 * 742407782)

console.log((8651519 * 90529439) + (830453443 * 742407782))
//why is this 67 off?

//there is significantly more of  