function dupLen(s, t) {
  const s_hashtable = {};
  const t_hashtable = {};

  for (let i in s) {
    if (s_hashtable[s[i]] === undefined) s_hashtable[s[i]] = 1;
    if (t_hashtable[t[i]] === undefined) t_hashtable[t[i]] = 1;
  }
  let sum1 = 0,
    sum2 = 0;
  for (let key in s_hashtable) {
    sum1 += s_hashtable[key];
  }
  for (let key in t_hashtable) {
    sum2 += t_hashtable[key];
  }
  return sum1 === sum2;
}
function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  if (!dupLen(s, t)) return false;

  const hashtable = {};
  for (let i in s) {
    if (hashtable[s[i]] === undefined) {
      hashtable[s[i]] = t[i];
    }
  }

  console.log(hashtable);
  for (let i in s) {
    if (t[i] !== hashtable[s[i]]) {
      return false;
    }
  }
  return true;
}

const str1 = 'badc';
const str2 = 'bada';

const result = isIsomorphic(str1, str2);
console.log(result);
