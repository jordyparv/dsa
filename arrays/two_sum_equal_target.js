function isSumEqualToTarget(arr, targetValue) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    if (arr[i] < targetValue) {
      for (let j = i + 1; j < len; j++) {
        if (arr[i] + arr[j] === targetValue) {
          return [arr[i], arr[j]];
        }
      }
    }
  }
  return false;
}
const targetValue = 10;
const arr = [1, 3, 8, 2];
const output = isSumEqualToTarget(arr, targetValue);
console.log(output);
