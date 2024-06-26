class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    if (this.head === nul) return null;
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (count === index) return current;
      count++;
      current = current.nextNode;
    }
    return null;
  }

  pop() {
    if (this.head === null) return null;
    if (this.head.nextNode === null) {
      const lastNode = this.head;
      this.head = null;
      return lastNode;
    }
    let current = this.head;
    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }
    const lastNode = current.nextNode;
    current.nextNode = null;
    return lastNode;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      this.prepend(value);
    }
    if (index === this.size()) {
      this.append(value);
    }
    const newNode = new Node(value);
    let current = this.head;
    let count = 0;
    while (count < index - 1) {
      current = current.nextNode;
      count++;
    }
    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }
    let current = this.head;
    let count = 0;
    while (count < index - 1) {
      current = current.nextNode;
      count++;
    }
    current.nextNode = current.nextNode.nextNode;
  }

  toString() {
    let result = [];
    let current = this.head;
    while (current !== null) {
      result.push(`( ${current.value} )`);
      current = current.nextNode;
    }
    result.push("null");
    return result.join(" -> ");
  }
}


const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(0);

console.log(linkedList.toString());  // Output: ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null

linkedList.insertAt(1.5, 2);
console.log(linkedList.toString());  // Output: ( 0 ) -> ( 1 ) -> ( 1.5 ) -> ( 2 ) -> ( 3 ) -> null

linkedList.removeAt(2);
console.log(linkedList.toString());  // Output: ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null
