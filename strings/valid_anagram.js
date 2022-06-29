//s = "cat", t = "tac", return true
//s = "listen", t = "silent", return true
//s = "program", t = "function", return false
function isValidAnagram(s, t) {
  if (s.length !== t.length) return false;
  let count = 0;
  for (let i of s) {
    for (let j of t) {
      if (i === j) {
        count++;
        break;
      }
    }
  }
  return count === s.length;
}
const s = 'listen';
const t = 'silent';

const result = isValidAnagram(s, t);

console.log(result);
