import { toInt, print } from '../parv.js';
function isLeapYear(year) {
  if (toInt(year % 4) === 0) return true;
  if (toInt(year % 100) === 0) return false;
  if (toInt(year % 400) === 0) return true;
  return false;
}

print(isLeapYear(2000));
