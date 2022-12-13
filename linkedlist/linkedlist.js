class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  insertAt(data, index) {
    if (index < 0 || index > this.size) return console.log('Enter valid index');

    const node = new Node(data);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      var current, prev;
      let i = 0;
      current = this.head;
      while (++i < index) {
        prev = current;
        current = current.next;
      }
      node.next = current;
      prev.next = node;
    }
    this.size++;
  }
  print() {
    if (this.size < 0) return console.log('list is empty');
    var curr = this.head;

    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
  removeAt(index) {
    if (this.size < 0 || index > this.size)
      return console.log('index is not valid');
    let current = this.head;
    let prev = current;
    let tmp = this.head.data;
    if (index == 0) {
      this.head = current.next;
    } else {
      let i = 0;
      while (++i < index) {
        prev = current;
        current = current.next;
      }

      prev.next = current.next;
      return current.data;
    }
    this.size--;
    return tmp;
  }
  remove(data) {
    if (this.size < 0) return console.log('list is empty');
    if (this.head.data == data) {
      this.head = this.head.next;
    } else {
      let current = this.head,
        prev = current;
      while (current.next) {
        if (current.data === data) {
          prev.next = current.next;
          this.size--;

          return current.data;
        }
        prev = current;
        current = current.next;
      }
      if (current.data == data) {
        prev.next = current.next;
        return current.data;
      }
    }
    return -1;
  }
  clear() {
    this.head = null;
  }
  top() {
    if (this.size > 0) return this.head.data;

    return -1;
  }
  pop() {
    return this.removeAt(0);
  }
  has(data) {
    let current = this.head;
    while (current.next) {
      if (current.data == data) {
        return true;
      }
      current = current.next;
    }
    if (current.data === data) return true;
    return false;
  }
}

export default LinkedList;
