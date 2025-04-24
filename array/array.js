class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length + 1;
  }
  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  shift() {
    const item = this.data[0];
    //1, 2, 3, 4, 5 - > 2, 3, 4, 5
    this.shiftLeft();
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  unShift(item) {
    this.length++;
    this.shiftRight();
    this.data[0] = item;
    return item;
  }

  slice(start, end) {
    const sliceData = new Array();
    end = end < 0 ? 0 : end || this.length;
    start = start < 0 ? this.length + start : start;
    for (let i = start; i < end; i++) {
      sliceData.data[i] = this.data[i];
      sliceData.length++;
    }

    return sliceData;
  }

  splice(start, deleteCount = 0, ...items) {
    //capture delete items
    //insert move existing to the right or left
    //delete items extra items.
    //insert new items from start index

    //[1, 2, 5, 6, 7] - 1, 1, [11, 12]---> [1, 11, 12, 5, 6, 7];

    start =
      start < 0
        ? Math.max(this.length + start, 0)
        : Math.min(start, this.length);

    deleteCount = Math.min(Math.max(deleteCount, 0), this.length - start);

    const itemsDeleted = new Array();
    for (let i = 0; i < deleteCount; i++) {
      itemsDeleted.data[i] = this.data[start + i];
      itemsDeleted.length++;
    }

    const shiftIndex = items.length - deleteCount;

    if (shiftIndex > 0) {
      for (let i = this.length - 1; i >= start + deleteCount; i--) {
        this.data[i + shiftIndex] = this.data[i];
      }
    } else if (shiftIndex < 0) {
      for (let i = start + deleteCount; i < this.length; i++) {
        this.data[i + shiftIndex] = this.data[i];
      }

      for (let i = this.length + shiftIndex; i < this.length; i++) {
        delete this.data[i];
      }
    }

    for (let i = 0; i < items.length; i++) {
      this.data[start + i] = items[i];
    }
    this.length += shiftIndex;
    return itemsDeleted;
  }

  map(callBack) {
    const newData = new Array();
    for (let i = 0; i < this.length; i++) {
      newData.data[i] = callBack(this.data[i], i, this.data);
      newData.length++;
    }
    return newData;
  }

  filter(callBack) {
    const newData = new Array();
    for (let i = 0; i < this.length; i++) {
      if (callBack(this.data[i], i, this.data)) {
        newData.data[i] = this.data[i];
        newData.length++;
      }
    }
    return newData;
  }

  reduce(callBack, acc) {
    let startIndex = 0;
    if (!acc) {
      acc = this.data[0];
      startIndex = 1;
    }
    for (let i = startIndex; i < this.length; i++) {
      acc = callBack(acc, this.data[i], i, this.data);
    }
    return acc;
  }

  shiftLeft() {
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }

  shiftRight() {
    for (let i = this.length - 1; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
  }
}

const arr = new Array();
arr.push(7);
arr.push(5);
arr.push(3);
arr.push(4);

console.log(Object.values(arr.data));

// const sliceArr = arr.reduce((acc, item) => ({ ...acc, [item]: item }), {});
const sliceArr = arr.reduce((acc, item) => acc + item);
console.log(Object.values(arr.data), sliceArr);
