// import Stack from './stack.js';

// function asteroidCollision(arr) {
//   const st = new Stack();
//   for (let i = 0; i < arr.length; i++) {
//     if (st.isEmpty()) {
//       st.push(arr[i]);
//     } else if (arr[i] > 0) {
//       st.push(arr[i]);
//     } else {
//       let it = st.size();
//       while (--it >= 0) {
        
//         if (st.peek() + arr[i] <= 0 && st.peek() + arr[i] < st.peek()) {
//           console.log(st.peek(),arr[i])
//           st.pop();
//         } else break;
//       }
//     }
//   }
//   return st;
// }

// const arr = [-2, 1, 1, 1, -3, 1];
// const result = asteroidCollision(arr);
// console.log(result);
