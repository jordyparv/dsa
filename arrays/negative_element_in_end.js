import { size, print } from '../parv.js';
function fixAarry(arr) {
  let pos = [];
  let neg = [];
  for (let i of arr) {
    if (i > -1) pos.push(i);
    else neg.push(i);
  }
  return [...pos, ...neg];
}

print(fixAarry([1, -1, 3, 2, -7, -5, 11, 6]));
