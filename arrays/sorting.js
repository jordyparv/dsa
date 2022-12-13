function size(arr) {
  return arr.length;
}
function sort(arr) {
  for (let i = 0; i < size(arr); i++) {
    for (let j = i + 1; j < size(arr); j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(sort([0, 0, 1, 2, 1, 0, 2, 1]));
