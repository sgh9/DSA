//[top] -> [B] -> [A] -> null
//                ^
//             [bottom]

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peak() {
    return this.top;
  }

  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      const prev = this.top;
      this.top = node;
      this.top.next = prev;
    }

    this.length++;
    return this;
  }

  pop(value) {
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      const prev = this.top;
      this.top = prev.next;
    }

    this.length--;
    return this;
  }
}

const stack = new Stack();
stack.push("A");

// console.log(stack);

stack.push("B");
stack.push("C");
stack.push("D");

console.log(stack);

// stack.pop();
// stack.pop();

// console.log(stack);
console.log(stack.peak());
