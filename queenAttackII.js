//n is number of rows and columns on the board (notice it will always form a square since it's the same number)
//k is the number of obstacles on the board that block the queen's path. 
//r_q is the row number of the queen's position
//c_q is the column number of the queen's position 
//obstacles is an array with each element containing an array with two values: the row and column of the obstacle 

//an obstacle will block the queen's path
//you don't count the obstacle position or any squares in that path (up,down,left,right,diagonals) after the obstacle 

//with all given information return how many squares the queen can possibly attack as an int value

//important to note that the board can be 100000^2 squares large so  you need to make very efficient code 
//k can be the same amount of obstacles as available squares on the board to that portion of the code would also need to be
//very efficient 

//NOTES

//one cell can contain multiple obstacles (which is obviously useless information)

//seems smart to sort? 
//supposedly can just loop through obstacles so try that first 

//first return a unique array in order? 

function queensAttack(n, k, r_q, c_q, obstacles) {
  let maxUp = n - r_q;
  let maxDown = r_q - 1;
  let maxLeft = c_q - 1;
  let maxRight = n - c_q;
  //diagonals start in upper left, to upper right, lower left, lower right 
  let diag1 = Math.min(maxUp, maxLeft);
  let diag2 = Math.min(maxUp, maxRight);
  let diag3 = Math.min(maxDown, maxLeft);
  let diag4 = Math.min(maxDown, maxRight);

  //determine the 2 diag line positions 
  //value to locate queen diag left to bottom right postion
  let queenLeftToBottom = maxRight - maxDown
  console.log(`queenLeftToBottom ${queenLeftToBottom}`)
  //value to location queen diag right to bottom left position  
  let queenRightToBottom = maxLeft - maxDown
  console.log(`queenRightToBottom ${queenRightToBottom}`)

  console.log(`maxUp ${maxUp}, maxDown ${maxDown}, maxLeft ${maxLeft}, maxRight ${maxRight}, diag1 ${diag1}, diag2 ${diag2}, diag3 ${diag3}, diag4 ${diag4}`)

  //loop obstacles and redefine one of the 8 values above based on rules
  for (let i = 0; i < obstacles.length; i++) {
    console.log(`iteration: ${i}`)
    //if in same row as queen row 
    if (obstacles[i][0] === r_q) {
      console.log('same row')
      //if it's to the left of the queen
      if (obstacles[i][1] < c_q) {
        //if already iterated over choose smaller of current value or queen column - obstacle column
        maxLeft = Math.min(maxLeft, (c_q - 1) - obstacles[i][1]);
        console.log(`${maxLeft} maxLeft`)
      }
      //it it's to the right of the queen 
      if (obstacles[i][1] > c_q) {
        //maxRight is either current value of maxRight (valid when process has already happened)
        //or currently calculated position of max right (column value-c_1 position) if smaller
        maxRight = Math.min(maxRight, (obstacles[i][1] - ((n - (n - c_q)) + 1)))
        console.log(`maxRight ${maxRight}`)
      }
    }

    //if in same column as queen 
    if (obstacles[i][1] === c_q) {
      console.log('same column')
      //if above queen 
      if (obstacles[i][0] > r_q) {
        //q=48,81 obs = 54,81 
        maxUp = Math.min(maxUp, ((obstacles[i][0]) - 1) - r_q) //n-r_q=68586 
        console.log(`maxUp ${maxUp}`)
      }
      //if below queen
      if (obstacles[i][0] < r_q) {
        maxDown = Math.min(maxDown, ((r_q - 1) - obstacles[i][0])) // maxDown = r_q-1 
        console.log(`maxDown ${maxDown}`)
      }
    }

    //if diag1 or diag4 conflict
    //value to test if same diag line as queen left to bottom right
    //(n-column) - (row-1)
    let obsLeftToBottom = (n - obstacles[i][1]) - (obstacles[i][0] - 1) //values are 54, 87 ..13-53.. -40... queen is 48,81 
    console.log(`obsLeftToBottom ${obsLeftToBottom}`)
    if (obsLeftToBottom === queenLeftToBottom) {
      console.log('same left diag')
      //if diag1 conflict 
      //so same diagnol line but above queen row necessitates diag1
      if (r_q < obstacles[i][0]) {
        console.log('diag1 conflict')
        diag1 = Math.min(diag1, (obstacles[i][0] - r_q) - 1)
        console.log(`diag1 ${diag1}`)
      }
      //if diag4 conflict
      if (r_q > obstacles[i][0]) {
        console.log('diag4 conflict')
        diag4 = Math.min(diag4, r_q - (obstacles[i][0]) - 1)
        console.log(`diag4 ${diag4}`)
      }
    }

    //if diag2 or diag 3 conflict
    //value to test if same diag line as queen right to bottom left 
    let obsRightToBottom = (obstacles[i][1] - 1) - (obstacles[i][0] - 1)
    console.log(`obsRightToBottom ${obsRightToBottom}`)
    if (obsRightToBottom === queenRightToBottom) {
      console.log('same right diag')
      //diag2 conflict
      if (r_q < obstacles[i][0]) {
        console.log('daig2 conflict')
        diag2 = Math.min(diag2, (obstacles[i][0] - r_q) - 1)
        console.log(`diag2 ${diag2}`)
      }
      //diag3 conflict
      if (r_q > obstacles[i][0]) {
        console.log('diag3 conflict')
        diag3 = Math.min(diag3, r_q - (obstacles[i][0]) - 1)
        console.log(`diag3 ${diag3}`)
      }
    }
  }
  console.log(`maxUp ${maxUp}, maxDown ${maxDown}, maxLeft ${maxLeft}, maxRight ${maxRight}, diag1 ${diag1}, diag2 ${diag2}, diag3 ${diag3}, diag4 ${diag4}`)
  return maxUp + maxDown + maxLeft + maxRight + diag1 + diag2 + diag3 + diag4;
}

//console.log(queensAttack(9, 3, 4, 7, [[6, 5], [7, 4], [2, 9], [2, 5], [6, 9], [5, 8]]))

//console.log(queensAttack(100000, 100000, 20001, 20003, [[20001, 20002], [20001, 20004], [20000, 20003], [20002, 20003], [20000, 20004], [20000, 20002], [20002, 20004], [20002, 20002], [564, 323]]))
console.log(queensAttack(100, 100, 48, 81, [
  [54, 87],//x0
  [64, 97],//x1
  [42, 75],//x2
  [32, 65],//x3
  [42, 87],//x4
  [32, 97],//x5
  [54, 75],//x6
  [64, 65],//x7
  [48, 87],//x8
  [48, 75],//x9
  [54, 81],//x10
  [42, 81],//x11
  [45, 17],//x12
  [14, 24],//x13
  [35, 15],//x14
  [95, 64],//x15
  [63, 87],//x16
  [25, 72],//x17
  [71, 38],//x18
  [96, 97],//x19
  [16, 30],//x20
  [60, 34],//x21
  [31, 67],//X22
  [26, 82],//x23
  [20, 93],//x24
  [81, 38],//x25
  [51, 94],//x26
  [75, 41],//x27
  [79, 84],//x28
  [79, 65],//x29
  [76, 80],//x30
  [52, 87],//x31
  [81, 54],//x32
  [89, 52],//x33
  [20, 31],//x34
  [10, 41],//x35
  [32, 73],//x36
  [83, 98],//x37
  [87, 61],//x38
  [82, 52],//x39
  [80, 64],//x40
  [82, 46],//x41
  [49, 21],//x42
  [73, 86],//x43
  [37, 70],//x44
  [43, 12],//x45
  [94, 28],//x46
  [10, 93],//x47
  [52, 25],//x48
  [50, 61],//x49
  [52, 68],//x50
  [52, 23],//x51  
  [60, 91],//x52
  [79, 17],//x53  
  [93, 82],//x54
  [12, 18],//x55
  [75, 64],//x56
  [69, 69],//x57
  [94, 74],//X58
  [61, 61],//x59
  [46, 57],//x60
  [67, 45],//x61
  [96, 64],//x62  
  [83, 89],//x63  
  [58, 87],//x64
  [76, 53],//x65
  [79, 21],
  [94, 70],
  [16, 10],
  [50, 82],
  [92, 20],
  [40, 51],
  [49, 28],
  [51, 82],
  [35, 16],
  [15, 86],
  [78, 89],
  [41, 98],
  [70, 46],
  [79, 79],
  [24, 40],
  [91, 13],
  [59, 73],
  [35, 32],
  [40, 31],
  [14, 31],
  [71, 35],
  [96, 18],
  [27, 39],
  [28, 38],
  [41, 36],
  [31, 63],
  [52, 48],
  [81, 25],//x95?
  [49, 90],//x96
  [32, 65],
  [25, 45],
  [63, 94],
  [89, 50],
  [43, 41]])) //expected output is 40, but 30 currently 


// c c c c c 
//r0 0 0 0 0
//r0 0 0 q 0
//r0 0 0 0 0
//r0 0 0 0 0
//r0 0 0 0 0

//q is [4,4]


8
// c c c c c c c c  
//r0 0 0 0 0 0 0 0 
//r0 0 0 0 0 0 0 0
//r0 0 0 0 0 0 0 0
//r0 0 0 0 0 0 0 0
//r0 0 0 0 0 0 0 0
//r0 0 0 0 0 0 q 0
//r0 0 0 0 0 0 0 0
//r0 0 0 0 0 0 0 0
//q is [3,7]

9
// c c c c c c c c c
//r0 0 0 0 0 0 0 0 0 
//r0 0 0 0 0 0 0 0 0 
//r0 0 0 x 0 0 x 0 0 (7,7)... r_q is 4.. maxUp is 5 
//r0 0 0 0 0 0 0 0 0 
//r0 0 0 0 0 0 0 x 0 
//r0 0 0 0 0 0 q 0 0 
//r0 0 0 0 0 0 0 0 0 
//r0 0 0 0 x 0 0 0 x (2,5) maxLeft(column-1)=4... maxDown(row-1)=1.. 4-1=3 
//r0 0 0 0 0 0 0 0 0 

//for diag3 or diag4 conflict 
//can be (r_q-obsRow)-1 (to zero index)


// function queensAttack(n, k, r_q, c_q, obstacles) {
//   let maxUp = n - r_q;
//   let maxDown = r_q - 1;
//   let maxLeft = c_q - 1;
//   let maxRight = n - c_q;
//   let diag1 = Math.min(maxUp, maxLeft)
//   let diag2 = Math.min(maxUp, maxRight);
//   let diag3 = Math.min(maxDown, maxLeft);
//   let diag4 = Math.min(maxDown, maxRight)
//   let queenLeftToBottom = maxRight - maxDown
//   let queenRightToBottom = maxLeft - maxDown
//   for (let i = 0; i < obstacles.length; i++) {
//     if (obstacles[i][0] === r_q) {
//       if (obstacles[i][1] < c_q) {
//         maxLeft = Math.min(maxLeft, (c_q - 1) - obstacles[i][1]);
//       }
//       if (obstacles[i][1] > c_q) {
//         maxRight = Math.min(maxRight, (obstacles[i][1] - ((n - (n - c_q)) + 1)))
//       }
//     }
//     if (obstacles[i][1] === c_q) {
//       console.log('same column')
//       if (obstacles[i][0] > r_q) {
//         maxUp = Math.min(maxUp, (obstacles[i][0] - (n - r_q)))
//         console.log(maxUp)
//       }
//       if (obstacles[i][0] < r_q) {
//         maxDown = Math.min(maxDown, ((r_q - 1) - obstacles[i][0]))
//       }
//     }
//     let obsLeftToBottom = (n - obstacles[i][1]) - (obstacles[i][0] - 1)
//     if (obsLeftToBottom === queenLeftToBottom) {
//       if (r_q < obstacles[i][0]) {
//         diag1 = Math.min(diag1, (obstacles[i][0] - r_q) - 1)
//       }
//       if (r_q > obstacles[i][0]) {
//         diag4 = Math.min(diag4, r_q - (obstacles[i][0]) - 1)
//       }
//     }
//     let obsRightToBottom = (obstacles[i][1] - 1) - (obstacles[i][0] - 1)
//     if (obsRightToBottom === queenRightToBottom) {
//       if (r_q < obstacles[i][0]) {
//         diag2 = Math.min(diag2, (obstacles[i][0] - r_q) - 1)
//       }
//       if (r_q > obstacles[i][0]) {
//         diag3 = Math.min(diag3, r_q - (obstacles[i][0]) - 1)
//       }
//     }
//   }
//   return maxUp + maxDown + maxLeft + maxRight + diag1 + diag2 + diag3 + diag4;
// }


