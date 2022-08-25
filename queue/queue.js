export default class Queue {
  constructor() {
    this.array = new Array();
  }
  enqueue(value) {
    this.array.push(value);
  }
  peek() {
    if (this.array.length > 0) return this.array[0];
  }
  dequeue() {
    if (this.array.length > 0) return this.array.shift();
  }
  print() {
    this.array.forEach((i) => console.log(i));
  }
  isEmpty() {
    return this.array.length === 0;
  }
  get() {
    return this.array;
  }
  size() {
    return this.array.length;
  }
}
