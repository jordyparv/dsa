class LinkedListNode {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  insert(value) {
    if (this.head === null) {
      this.head = new LinkedListNode(value);
    } else {
      const prev = this.head;
      this.head = new LinkedListNode(value);
      this.head.next = prev;
    }
    this.size++;
  }
  remove(value) {
    let currentHead = this.head;
    if (currentHead.element === value) {
      this.head = currentHead.next;
      this.size--;
    } else {
      let prev = currentHead;
      while (currentHead.next) {
        if (currentHead.element === value) {
          prev.next = currentHead.next;
          prev = currentHead;
          currentHead = currentHead.next;
          break;
        }
        prev = currentHead;
        currentHead = currentHead.next;
      }
      if (currentHead.element === value) {
        currentHead.next = null;
      }
      this.size--;
    }
  }
}
const ll = new LinkedList();
ll.insert(4);
ll.insert(3);

console.log(ll);
