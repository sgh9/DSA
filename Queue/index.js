// [first] -> [A] -> [B] -> null
//                        ^
//                       [last]

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peak() {
    return this.first;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) return null;

    const dequeuedNode = this.first;
    this.first = this.first.next;
    this.length--;

    if (this.length === 0) {
      this.last = null;
    }

    return dequeuedNode.value;
  }
}

const q = new Queue();
q.enqueue("A");
q.enqueue("B");
q.enqueue("C");
q.dequeue();

console.log(q);
