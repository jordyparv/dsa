function runningSum(arr) {
  if (arr.length === 0) return -1;
  let sum = 0,
    prevSum = [];

  let len = arr.length;
  for (let i = 0; i < len; i++) {
    sum += arr[i];
    prevSum.push(sum);
  }

  return prevSum;
}

const result = runningSum([1,1,1,1,1]);
console.log(result);
