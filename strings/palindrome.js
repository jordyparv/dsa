import { reverse } from './reverse_string.js';

function isPalindrome(s) {
  return reverse(s) === s;
}

console.log(isPalindrome('131'));
