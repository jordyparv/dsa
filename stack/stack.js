export default class Stack {
  constructor() {
    this.array = [];
  }
  push(value) {
    this.array.push(value);
  }
  peek() {
    if (this.array.length > 0) return this.array[this.array.length - 1];
  }
  pop() {
    if (this.array.length > 0) return this.array.pop();
  }
  print() {
    this.array.forEach((i) => console.log(i));
  }
  isEmpty() {
    return this.array.length === 0;
  }
  get() {
    return this.array.splice();
  }
  size() {
    return this.array.length;
  }
}
