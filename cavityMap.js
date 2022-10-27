//grid is an array of integer strings of n height/width as such that if n was 4 then 
//there would be 4 integer strings, each containing four integers. 

//function must return the same grid, but every time a number is not on the border and
// all surrounding numbers (above, below, and to either side, NOT diaganol) are smaller it is 
//replaced with an x (upper case x specifically)

let grid1 = ['1112', '1912', '1892', '1234'];
let grid2 = ['179443854', '961621369', '164139922', '968633951', '812882578', '257829163', '812438597', '176656233', '485773814']
let grid3 = ['2476387', '1485738', '6591334', '9589583', '6827769', '2559498', '1822388']

//looks like:  needs to return: 
//1112          1112
//1912          1X12
//1892          18X2
//1234          1234 

//grid[0] and grid[grid.length-1] will never be altered as they are always on the border
//same token grid[i][0] and grid[i][grid[i].length-1] will never be altered either 

function cavityMap(grid) {
  //can access numbers through double indexes 
  //console.log(grid[grid.length - 1])
  //console.log(grid[1][grid[1].length - 1])
  //iterate through all rows of grid, skipping first and last (border values)

  let newGrid = [grid[0]]
  console.log(newGrid)
  for (let i = 1; i < grid.length - 1; i++) {
    //iterate through current row, skipping first and last numbers (border values)
    //push current string to newString in order to be continuously updated in next loop
    newGrid.push(grid[i])
    console.log(newGrid)
    for (let j = 1; j < grid[i].length - 1; j++) {
      console.log(grid[i][j])
      let newString;
      if (grid[i][j] > grid[i][j - 1] && grid[i][j] > grid[i][j + 1] && grid[i][j] > grid[i - 1][j] && grid[i][j] > grid[i + 1][j]) {
        console.log('yes')
        //create altered version of current string 
        newString = newGrid[i].substring(0, j) + 'X' + newGrid[i].substring(j + 1, newGrid[i].length)
        console.log(newString)
        newGrid[i] = newString
      }
    }
  }
  newGrid.push(grid[grid.length - 1])
  //console.log(newGrid)
  return newGrid
}

console.log(cavityMap(grid3))