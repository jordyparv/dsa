const print = console.log;
var romanToInt = function (s) {
  const roman = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (i < s.length && roman.get(s[i]) < roman.get(s[i + 1])) {
      result -= roman.get(s[i]);
    } else result += roman.get(s[i]);
  }

  
  return result;
};

print(romanToInt('MCMXCIV'));
