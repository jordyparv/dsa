import { print } from '../parv.js';
const arr = [4, 5, 2, 1, 6, 10, 4, 9, 11];

let min = Number.MAX_VALUE;
let profit = 0;

arr.forEach((i) => {
  if (i > min) profit = Math.max(profit, i - min);
  else min = i;
});

print(profit);
