class HashMap {
  constructor(size = 50) {
    this.data = [];
    this.length = size;
  }

  _hash(key) {
    let hash = 0;
    const prime = 51;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + hash * prime + key.charCodeAt(i)) % this.length;
    }

    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    const bucket = this.data[address];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i] = [key, value];
        return;
      }
    }

    this.data[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);

    const bucket = this.data[address];
    if (!bucket?.length) return;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
  }

  has(key) {
    const address = this._hash(key);

    const bucket = this.data[address];
    if (!bucket?.length) return false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true;
      }
    }
    return false;
  }

  delete(key) {
    const address = this._hash(key);
    const bucket = this.data[address];

    if (!bucket?.length) return;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        if (i !== bucket.length - 1) bucket[i] = bucket[bucket.length - 1];
        bucket.pop();
        return true;
      }
    }
    return false;
  }

  getKeyValue(index = 0, valueIndex = 0) {
    const values = [];

    for (let i = 0; i < this.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i]?.length; j++) {
          const key = this.data[i][j][index];

          if (key && valueIndex) {
            const value = this.data[i][j][valueIndex];
            values.push([key, value]);
          } else values.push(key);
        }
      }
    }
    return values;
  }

  keys() {
    return this.getKeyValue(0);
  }

  values() {
    return this.getKeyValue(1);
  }

  entries() {
    return this.getKeyValue(0, 1);
  }
}

const map = new HashMap();
map.set("apple", "200");
map.set("mango", "12");
map.set("grapes", "172");
map.set("Banana", 89);
console.log(map.delete("Banana"));
console.log(map.delete("grapes"));
map.set("Banana", 89);
console.log(map.data, map._hash("apple"), map._hash("mango"));
console.log(map.has("appfle"));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
