function isPalidrome(str) {
  let reverseSTR = str.split('').reverse().join('');
  return str === reverseSTR;
}
function whether_or_not_can_palidrome(string) {
  if (isPalidrome(string)) {
    console.log('true');
    return;
  }

  let len = string.length;

  let removedItems = [];
  for (let i = 0; i <= Math.trunc(len / 2); i++) {
    let result = '';
    for (let j = 0; j < len; j++) {
      if (j !== i) result += string[j];
    }

    isPalidrome(result) ? removedItems.push(string[i]) : '';
  }

  if (removedItems.length !== 0) {
    console.log(removedItems, 'remove these element to make it true');
  } else console.log('false');
}

whether_or_not_can_palidrome('foobof');
