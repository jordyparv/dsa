const valueOne = '11';
const valueTwo = '1';
let z = '0'.charCodeAt();
let i = valueOne.length - 1;
let j = valueTwo.length - 1;
let carry = 0;
let sum = 0;
let result = '';

while (i >= 0 || j >= 0) {
  sum = carry;
  if (i >= 0) sum += valueOne[i--].charCodeAt() - z;
  if (j >= 0) sum += valueTwo[j--].charCodeAt() - z;
  carry = sum > 2 ? 1 : 0;
  result += Math.floor(sum % 2);
}
if (carry === 1) result += carry.toString();
console.log(result);
