function kth_min(arr, kth) {
  arr.sort((a, b) => a - b);
  let set = new Set(arr);
  return Array.from(set)[kth - 1];
}

console.log(kth_min([7, 10, 4, 3, 20, 15], 1));
