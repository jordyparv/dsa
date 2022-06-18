import { print } from '../parv.js';
function table(num) {
  for (let i = 1; i <= 10; i++) {
    print(i * num);
  }
}

table(5);
