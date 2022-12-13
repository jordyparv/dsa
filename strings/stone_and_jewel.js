//jewels = "abc", stones = "ac", return 2
//jewels = "Af", stones = "AaaddfFf", return 3
//jewels = "AYOPD", stones = "ayopd", return 0
const jewels = 'Af';
const stones = 'AaaddfFf';
let count = 0;
for (let i of stones) {
  for (let j of jewels) {
    if (i === j) {
      count++;
    }
  }
}
console.log(count);
