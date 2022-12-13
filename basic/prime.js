import { toInt, print } from '../parv.js';
function isPrime(num) {
  let count = 0;

  if (num < 2) return false;
  else if (num === 2) true;
  for (let i = 2; i <= toInt(num / 2); i++) {
    if (num % i === 0) {
      count++;
    }
  }
  if (count === 0) {
    return true;
  } else return false;
}

let prime = [];

for (let i = 1; i < 100; i++) {
  if (isPrime(i)) prime.push(i);
}
print(prime);
