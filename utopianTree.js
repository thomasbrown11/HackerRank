//a tree is planted each year with two cycles per year. It starts at 1 m high. The first cycle doubles it and the second cycle adds one. The 3rd cycle doubles, the 4th adds 1.. so on and so forth. 
//utopianTree returns the height (no units all meters) after n number of cycles. obviously will need to determine even/odd and add a number accordingly. 

function utopianTree(n) {
  let i = 0;
  let treeHeight = 1;
  while (i < n) {
    //check for a remainder with %2.. if none then even
    if (i % 2 === 0) {
      //double tree height for every even iteration
      treeHeight = treeHeight * 2;
    } else {
      //add 1 to tree height for every odd iteration
      treeHeight = treeHeight + 1;
    };
    i++
  }
  return treeHeight;
}

console.log(utopianTree(20))