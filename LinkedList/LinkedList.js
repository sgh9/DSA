class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this.printList();
  }

  get(index) {
    if (index < 0 || index >= this.length) return;

    let current = this.head;
    let counter = 0;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current.value;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    let counter = 0;

    while (index !== 0 && counter !== index - 1) {
      current = current?.next;
      counter++;
    }
    const toRemove = current.next;
    const next = toRemove.next;
    current.next = next;

    if (toRemove === this.tail) {
      this.tail = current;
    }

    this.length--;

    return this.printList();
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.prepend(value);
    if (index === this.length) return this.append(value);

    let current = this.head;
    let counter = 0;

    while (counter !== index - 1) {
      current = current?.next;
      counter++;
    }
    const node = new Node(value);
    node.next = current.next;
    current.next = node;
    return this.printList();
  }

  printList() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
  // 1->2->3->4
  // null <-1<-2 <-3<-4

  reverse() {
    let prev = null;
    let current = this.head;
    this.tail = current;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;

    return this.printList();
  }
}

const list = new LinkedList(3);
console.log(list.printList());
console.log(list.append(4));
console.log(list.append(2));
console.log(list.append(1));
console.log(list.append(1));
console.log(list.prepend(0));
console.log(list.printList(), list);
console.log(list.get(2));
console.log(list.remove(2));
console.log(list.insert(4, 5));
console.log(list.reverse(), list);
