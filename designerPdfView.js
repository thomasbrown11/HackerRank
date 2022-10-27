//array always has 26 values corresponding to a-z letter height in ascending order 
let array = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

//h is the letter height array, word is a word. Return the highlighted array area {max corresponding letter height from array x number of letters in word}
function designerPdfViewer(h, word) {
  //use to find letterIndex
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  //populate all letter indexes 
  let lettersIndex = [];
  //
  let heights = [];
  //use binary search to efficiently push letterIndexes. 
  let binSearch = (x, array) => {
    let letterIndex = [];
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (x === array[mid]) {
        return array.indexOf(x);
      } else if (x < array[mid]) {
        end = mid - 1;
      } else if (x > array[mid]) {
        start = mid + 1;
      }
    }
  }
  //push result of binSearch for each letter of the word to lettersIndex;
  for (let i = 0; i < word.length; i++) {
    lettersIndex.push(binSearch(word[i], letters));
  }
  //map heights based on lettersIndex values
  for (let j = 0; j < lettersIndex.length; j++) {
    heights.push(h[lettersIndex[j]])
  }
  //sort heights
  let ordered = heights.sort((a, b) => { return a - b });
  //return highest height times length of word to find area of highlight;
  return ordered[ordered.length - 1] * word.length;
}

console.log(designerPdfViewer(array, 'hello'))

//make letter array and then use the index of that array as a reference point? like automatically have a number associated to the letter by having it in an array 