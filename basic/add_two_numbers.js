function listNode(arr) {
  return arr.reduceRight((next, value) => ({ value, next }), null);
}
var addTwoNumbers = function (l1, l2) {
  let result = [];
  let carry = 0;
  let tmp = [];

  if (l1.length >= l2.length) {
    tmp = l1;
    l1 = l2;
    l2 = tmp;
  }
  if (l1.length <= l2.length) {
    for (let i = l1.length - 1; i >= 0; i--) {
      let sum = l1[i] + l2[i + (l2.length - l1.length === 0 || 1) - 1] + carry;
      carry = 0;
      if (sum > 9) {
        carry = Math.trunc(sum / 10);
        sum = Math.trunc(sum % 10);
      }
      result.push(sum);
    }
  }
  for (let i = l2.length - l1.length - 1; i >= 0; i--) {
    let sum = l2[i] + carry;
    carry = 0;
    if (sum > 9) {
      carry = Math.trunc(sum / 10);
      sum = Math.trunc(sum % 10);
    }
    result.push(sum);
  }
  if (carry > 0) result.push(carry);
  return listNode(result);
  
};

console.log(addTwoNumbers([0], [0]));
