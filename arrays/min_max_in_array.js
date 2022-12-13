function min_max(arr) {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;

  for (let i of arr) {
    max = Math.max(max, i);
    min = Math.min(min, i);
  }
  return [min, max];
}

console.log(min_max([1, 2, 3, 4, 5, 6, 7]));
