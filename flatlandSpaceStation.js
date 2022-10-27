//n is number of cities
//c is array with cities containing a spacestation

//return max distance any city is away from a space station 

function flatlandSpaceStations(n, c) {
  let max = 0;
  for (let i = 0; i < n; i++) {
    let allDist = [];
    for (let j = 0; j < c.length; j++) {
      let distance = Math.abs(i - c[j])
      // console.log(`i ${i} c[j] ${c[j]}, distance ${distance}`)
      allDist.push(distance)
    }
    // console.log(`allDist ${allDist}`);
    let smallest = Math.min(...allDist);
    if (i === 0) {
      max = smallest
    }
    if (smallest > max) {
      max = smallest
    }

    // console.log(`max ${max}`)
  }
  return max;
}

console.log(flatlandSpaceStations(5, [0, 4]))

//in the above example there are 5 cities and there are cities with stations at indice
//0 and 4
//cities are ordered 0,1,2,3,4 (always ordered this way regarless of number)
//0 is 0 away from a station as it has one
//4 is the same
//1 is 1 (Math.abs(0-1)) away from a station since it is next to 0, it is also 3 from 4 (Math.abs(1-4))
//2 is 2 away on either side
//3 is 1 away

//return 2 because that is the largest number 

//basically just loop through and do Math.abs somehow. Push value to max variable.
//if the next value is larger than max then max = next value
//return max 
