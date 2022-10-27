//here is a simple pig latin program using recursive programming to mutate a word. pigl() triggers a recursive loop if the first letter of the 
//formal argument word isn't a simple vowel. This will append the first letter of a word to the end until the first letter is a vowel


function vowel(letter) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(letter)) {
    return true;
  } else {
    return false;
  }
}

function plDone(word) {
  return vowel(word[0]);
}

function pigl(word) {
  if (plDone(word) === true) {
    return `${word}ay`
  } else {
    let allButFirst = word.slice(1)
    return pigl(allButFirst + word[0])
  }
}

console.log(pigl('cat'))