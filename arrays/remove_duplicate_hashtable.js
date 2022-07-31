function remove_duplicate(arr) {
  const hashtable = {};
  const newArray = [];
  if (arr.length === 0) return -1;

  for (let value of arr)
    if (hashtable[value] === undefined) hashtable[value] = 1;

  for (let key in hashtable) {
    newArray.push(key);
  }
  return newArray;
}

const result = remove_duplicate([1, 1, 1, 1, 1, 1, 12, 2, 312, 3, 123]);
console.log(result);
