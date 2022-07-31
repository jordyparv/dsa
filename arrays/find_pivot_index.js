function sum(arr) {
  if (arr.length === 0) return false;
  let result = 0;

  arr.forEach((element) => {
    result += element;
  });
  return result;
}

function find_pivot(arr) {
  if (arr.length === 0) return -1;
  let len = arr.length;
  let leftSum = 0;
  let rightSum = 0;
  let total = sum(arr);
  for (let i = 0; i < len; i++) {
    rightSum = total - arr[i] - leftSum;
    if (leftSum === rightSum) return i;
    leftSum += arr[i];
  }

  return -1;
}

const result = find_pivot([2, 1, -1]);
console.log(result);
