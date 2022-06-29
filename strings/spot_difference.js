// s = "foobar", t = "barfoot", return 't'
// s = "ide", t = "idea", return 'a'
// s = "coding", t "ingcod", return ''
function getDifferentChar(s, t) {
  let count;
  for (let i of t) {
    count = 0;
    for (let j of s) {
      if (i === j) {
        count++;
      }
    }
    if (count === 0) {
      return i;
    }
  }

  return '';
}
const s = 'foobar';
const t = 'barfoot';
const result = getDifferentChar(s, t);

console.log(result);
