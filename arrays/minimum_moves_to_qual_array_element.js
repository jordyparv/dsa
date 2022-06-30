var minMoves2 = function (nums) {
  const len = nums.length;
  nums.sort((a, b) => a - b);

  const target = nums[Math.trunc(len / 2)];
  let element = 0;
  for (let i = 0; i < len; i++) {
    element += Math.abs(nums[i] - target);
  }
  return element;
};
console.log(minMoves2([1, 3, 2]));
