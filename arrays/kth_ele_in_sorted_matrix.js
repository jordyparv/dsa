// B R U T E F O R C E  using space
// function kthSmallestElement(arr, k) {
//   if (arr.length === 0) return -1;
//   const len = arr.length;
//   let jumper = 0;

//   const singleArray = [];
//   let index = 0;

//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) singleArray[index++] = arr[i][j];
//   }
//   singleArray.sort((a, b) => a - b);
//   console.log(singleArray);
//   return singleArray[k - 1];
// }
// //  1 5 9, 10 11 13, 12 13 15,
// //  1 10 12,
// //  5 11 13
// //  9 13
//  const arr = [
//     [1, 5, 9],
//     [10, 11, 13],
//     [12, 13, 15],
//   ],
//   k = 8;
// const result = kthSmallestElement(arr, k);
// console.log(result);

// without using space
function kthelement(arr, k) {
  if (!arr.length) return -1;
  const len = arr.length;

  function count(matrix, ele) {
    let row = 0,
      col = len - 1;
    let count = 0;
    while (row < len && col >= 0) {
      if (matrix[row][col] <= ele) {
        count += col + 1;
        row++;
      } else col -= 1;
    }

    return count;
  }

  let low = arr[0][0],
    high = arr[len - 1][len - 1];

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (count(arr, mid) < k) {
      low = mid + 1;
    } else high = mid;
  }
  return  high;
}

const result = kthelement(
  [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
  ],
  8
);
console.log(result);
