class Stack {
  #maxSize;
  #container = [];

  constructor(maxSize = 10) {
    this.#maxSize = maxSize;
  }

  #isFull() {
    return this.#container.length >= this.#maxSize;
  }

  #isEmpty() {
    return this.#container.length === 0;
  }

  push(element) {
    if (this.#isFull()) {
      console.log("Stack Overflow");
      return;
    }
    this.#container.push(element);
  }

  pop() {
    if (this.#isEmpty()) {
      console.log("Stack Overflow");
      return;
    }
    this.#container.pop();
  }

  getElements() {
    return this.#container;
  }
}

class Queue {
  #container = [];
  enqueue(element) {
    this.#container.push(element);
  }

  dequeue() {
    return this.#container.shift();
  }

  getElement() {
    return this.#container;
  }
}

const stack = new Stack();
const queue = new Queue();

// Set ---------------------------

const fruits = ["banana", "apple", "jackfruit", "apple"];

const newFruits = new Set(fruits);

const arr = [1, 2, 3];
