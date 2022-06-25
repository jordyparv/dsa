function isCapitalize(str) {
  let count = 0;
  for (let i = 1; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
      count++;
    }
  }
  if (count === 0 || count === str.length - 1) {
    return true;
  }
  return false;
}

console.log(isCapitalize('coding'));
