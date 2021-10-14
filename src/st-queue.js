const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.value = null;
    this.next = null;
  }

  getUnderlyingList() {
    // throw new NotImplementedError("Not implemented");
    return this;
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    let newNode = new ListNode(value);

    if (this.value === null) {
      this.value = value;
    } else {
      let current = this;
      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

  }

  dequeue() {
    let currentHead = this.value;
    this.value = this.next.value;
    this.next = this.next.next;
    return currentHead;
  }
};
