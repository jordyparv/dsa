//     "abcabd", return 2
// "thedailybyte", return 1
// "developer", return 0

const string = 'abcabd';
let count;

for (let i in string) {
  
  count = 0;
  for (let j in string) {
    if (string[i] === string[j] && i !== j) count++;
  }
  if (count === 0) {
    count = i;
    break;
  }
}

console.log(count);
