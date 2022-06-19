// function unique_count(arr) {
//   let count = new Array(arr.length + 1);

//   count.fill(1);

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count[arr[i]]++;
//       }
//     }
//   }

//   return count;
// }

// const arr = [1, 2, 1, 3, 4, 5, 6, 6, 1, 1, 1];
// console.log(unique_count(arr));
