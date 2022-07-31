function isMatrix(arr) {
  if (arr.length === 0) return -1;
  return arr[0].length === arr.length;
}
function arrayInverse(arr) {
  if (arr.length === 0) return -1;

  if (isConvertable(arr) === false) return 'Array is not stable';

  const rowLen = arr[0].length;
  const columnLen = arr.length;

  const cols = Array(rowLen).fill(0);
  for (let i in cols) cols[i] = Array(columnLen).fill(0);

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < columnLen; j++) {
      cols[i][j] = arr[j][i];
    }
  }
  return cols;
}

function isConvertable(arr) {
  if (arr.length === 0 || arr[0].length === undefined) return false;
  const rowLen = arr[0].length;
  const len = arr.length;
  for (let row = 1; row < len; row++) {
    if (arr[row].length !== rowLen) false;
  }
  return true;
}

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
];
const arr3 = [
  [1, 3],
  [1, 3],
  [4, 5],
  [7, 5],
  [298, 415],
];
const result = arrayInverse(arr3);
console.log(result);
console.log(arrayInverse(result));
