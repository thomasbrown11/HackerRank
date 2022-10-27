let arr = [-1, -2, 0, 1, 2];
let positive = 0;
let negative = 0;
let zero = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    positive += 1;
  } else if (arr[i] < 0) {
    negative += 1;
  } else {
    zero += 1;
  }
}

console.log((positive / arr.length).toFixed(6));
console.log((negative / arr.length).toFixed(6));
console.log((zero / arr.length).toFixed(6));
