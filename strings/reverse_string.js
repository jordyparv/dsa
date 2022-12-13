import { print } from '../parv.js';

function reverse(s) {
  let res = '';

  for (let ch = s.length - 1; ch >= 0; ch--) res += s[ch];

  return res;
}
export { reverse };
