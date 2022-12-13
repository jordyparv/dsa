const stack = [];
//add
stack.push(5);
stack.push(4);
//remove from back
stack.pop();
//add to front
stack.unshift(1);
//remove from front
stack.shift();
// console.log(stack);

//linked list
function LinkedList() {
  this.head = null;
}
LinkedList.prototype.push = function (val) {
  var node = {
    value: val,
    next: null,
  };
  if (!this.head) {
    this.head = node;
  } else {
    var current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
};
LinkedList.prototype.print = function () {
  if (this.head === null) {
    console.log('List is empty');
  } else {
    var current = this.head;

    while (current.next !== null) {
      // console.log(current.value);
      process.stdout.write(current.value.toString() + ', ');
      current = current.next;
    }
    console.log(current.value);
  }
};
const sll = new LinkedList();

sll.push(2);
sll.push(1);
sll.push(4);
sll.print();
//// doubly linked list
function DoublyLinkedList() {
  this.head = null;
}

DoublyLinkedList.prototype.push = function (value) {
  var head = this.head,
    current = head,
    previus = head;
  if (!head) {
    this.head = { value, previus: null, next: null };
  } else {
    while (current && current.next) {
      previus = current;
      current = current.next;
    }
    current.next = { value, previus: current, next: null };
  }
};
