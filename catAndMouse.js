//x,y,z all refer to integer values placed on an x axis, specifying position. 

//x refers to 'Cat A', 7 is 'Cat B', and z is 'Mouse C'... return which cat is closest to Mouse C in either positive or negative integer value, or return Mouse C if they are equidistant

//do you need conditionals if cat A is after mouse C? not specified. Only constraints are all are less than 100 

function catAndMouse(x, y, z) {
  //if cat a is before mouse 
  if (x < z) {
    catADistance = z - x
    //if after
  } else {
    catADistance = x - z
  }
  //if cat b is before mouse 
  if (y < z) {
    catBDistance = z - y
    //if after
  } else {
    catBDistance = y - z
  }

  if (catADistance < catBDistance) {
    return 'Cat A';
  } else if (catBDistance < catADistance) {
    return 'Cat B';
  } else {
    return 'Mouse C'
  }


  //console.log(`catADistance ${catADistance} catBDistance ${catBDistance}`)
  //if ()
}

console.log(catAndMouse(2, 5, 4))