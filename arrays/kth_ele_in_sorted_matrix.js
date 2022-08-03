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
function binary_search(arr, value) {
  if (!arr.length) return -1;
  let start = 0,
    end = arr.length;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === value) {
      return mid;
    } else if (value > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

function kthelement(arr, kth) {
  const len = arr.length;
  let count = 0;
  let x = -1;

  for (let i = 0; i < len; i++)
    for (let j = 0; j < len; j++) {
      for (let k = i; k < len; k++) {
        if (count === kth) {
          x = arr[j][k - 1];
          break;
        }
      }
      count++;
    }
  console.log(count);
  return x;
}
const result = kthelement([[-5]], 1);
console.log(result);
