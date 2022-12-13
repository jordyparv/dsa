function even(num) {
  if (num === 0) return 1;
  let count = 0;
  while (num !== 0) {
    num = Math.trunc(parseInt(num) / 10);
    count++;
  }
  return count;
}

function checkNumberOfEven(arr) {
  if (arr.length === 0) return false;
  let evenCount = 0;
  for (let i = 0; i < arr.length; i++) {
    // if (even(arr[i]) % 2 === 0) {
    //   evenCount++;
    // }
    
    if ((Math.trunc(Math.log10(arr[i])) + 1) % 2 === 0) evenCount++;
  }
  return evenCount;
}

const arr = [
  12, 4, 6, 87, 897, 4, 21, 87, 4126, 156, 4, 564, 65, 4123, 12, 46, 54,
];
const result = checkNumberOfEven(arr);
console.log(result);
