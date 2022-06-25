// robot moves  if robot started moving check whether or not  robot return to it initial position

function stepCheck(str) {
  let x = 0;
  let y = 0;

  for (let l of str) {
    switch (l) {
      case 'L':
        x++;
        break;
      case 'R':
        x--;
        break;
      case 'U':
        y++;
        break;
      case 'D':
        y--;
        break;
      default:
        return false;
    }
  }
  if (x == 0 && y == 0) return true;
  return false;
}
//false
console.log(stepCheck('URURD'));
// true RUULLDRD
console.log(stepCheck('RUULLDRD'));
