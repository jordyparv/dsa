function unique_count(arr) {
  const hashtable = {};
  if (arr.length === 0) {
    return -1;
  }
  for (let value of arr) {
    if (hashtable[value] !== undefined) {
      hashtable[value]++;
    } else hashtable[value] = 1;
  }
  return hashtable;
}

const array = [1, 1, 1, 2, 2, 3, 45, 4, 7, 7, 7, 7, 7, 7, 7, 1, 1, 11, 1];

const result = unique_count(array);

console.log(result);
