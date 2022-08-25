function isValid(str) {
  const hashtable = { ')': '(', '}': '{', ']': '[' };
  const stack = [];
  for (let s of str) {
    if (hashtable[s] === undefined) {
      stack.push(s);
    } else {
      if (hashtable[s] === stack[stack.length - 1]) {
        stack.pop();
      } else return false;
    }
  }
  return stack.length === 0;
}
console.log(isValid('[{[]}]'));