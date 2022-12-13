// nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
// nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
// nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []

function in_array(arr, value) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

const nums1 = [1, 2, 3, 3];
const nums2 = [3, 3, 1, 2];

const cmNums = [];
const n1len = nums1.length;

for (let i = 0; i < n1len; i++) {
  if (in_array(nums2, nums1[i]) && !in_array(cmNums, nums1[i])) {
    cmNums.push(nums1[i]);
  }
}
console.log(cmNums);
