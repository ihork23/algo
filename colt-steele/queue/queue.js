class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(val) {
    const newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = this.first
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.size += 1
    return true
  }

  dequeue() {
    if (!this.first) return null
    const dequeuedNode = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size -= 1
  }
}