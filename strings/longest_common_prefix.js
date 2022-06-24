const arr = ['spot', 'spotty', 'spotted'];
const l1 = arr.length - 1;
let count = 0;

let preCount = Number.MAX_VALUE;

for (let i = 0; i < l1; i++) {
  let x = 0,
    y = 0;

  while (x < arr[i].length) {
    if (arr[i][x++] === arr[i + 1][y++]) {
      count++;
    }
  }
  preCount = Math.min(count, preCount);
  count = 0;
}
let result = '';
for (let i = 0; i < preCount; i++) {
  result += arr[0][i];
}
console.log(result);
