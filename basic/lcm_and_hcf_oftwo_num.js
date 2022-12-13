import { toInt } from '../parv.js';
let lcm = [];

let num1 = 6,
  num2 = 15;

let count = 0;
let isPrime = false;
for (let i = 2; i < 10; i++) {
  let tmp = i / 2;

  for (let j = 2; j < tmp; j++) {
    if (tmp % j === 0) {
      count++;
    }
  }

  if (count === 0) {
    console.log(i);
  }
  count = 0;
}
