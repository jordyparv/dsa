function linearSearch(arr, ele) {
  let isFound = false;
  if (arr.length === 0) return false;
  for (let i = 0; i < arr.length; i++) {
    if (ele === arr[i]) {
      isFound = true;
      return i;
    }
  }
  if (!isFound) return false;
}
const arr = [18, 12, 9, 1, 14, 77, 50];

const result = linearSearch(arr, 01);
console.log(result);
 