function inArray(arr, value) {
  if (arr.length === 0) {
    return false;
  }
  for (let i of arr) if (i === value) return true;
  return false;
}

function unique_values_count(arr) {
  const unique_values = [];

  for (let i of arr) if (!inArray(unique_values, i)) unique_values.push(i);

  const unique_values_counts = [];
  for (let i of unique_values) {
    let count = 0;
    for (let j of arr) {
      if (i === j) {
        count++;
      }
    }
    unique_values_counts.push({ value: i, count });
  }
  return unique_values_counts;
}

const arr = [1, 1, 1, 2, 2, 3, 45, 4, 7, 777, 7, 77, 7, 7, 7, 1, 1, 11, 1];

console.log(unique_values_count(arr));
