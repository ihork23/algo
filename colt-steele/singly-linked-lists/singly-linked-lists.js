class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const node = new Node(val)
    if (!this.head) {
      this.head = node
    } else {
      this.tail.next = node
    }
    this.tail = node
    this.length += 1
    return this
  }

  pop() {
    if (!this.head) return undefined
    let candidate
    let current = this.head
    while (current.next) {
      candidate = current
      current = current.next
    }
    candidate.next = null
    this.tail = candidate
    this.length -= 1
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }

  shift() {
    if (!this.head) return undefined
    const oldHead = this.head
    this.head = oldHead.next
    if (!this.head) {
      this.tail = null
    }
    this.length -= 1
    return oldHead
  }
  
  unshift(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length += 1
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    const currentNode = this.head
    for (let i = 0; i < this.length; i++) {
      if (i === index) return currentNode
      currentNode = currentNode.next
    }
  }

  set(index, value) {
    const node = this.get(index)
    if (node) {
      node.val = value
      return true
    }
    return false
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === 0) {
      this.unshift(value)
      return true
    }
    if (index === this.length) {
      this.push(value)
      return true
    }
    const newNode = new Node(value)
    const previousNode = this.get(index - 1)
    newNode.next = previousNode.next
    previousNode.next = newNode
    this.length += 1
    return true
  }

  remove(index) {
    if (index < 0 || index > this.length) return false
    if (index === 0) {
      this.shift()
      return true
    }
    if (index === this.length - 1) {
      this.pop()
      return true
    }
    const previousNode = this.get(index - 1)
    previousNode.next = previousNode.next.next
    this.length -= 1
    return true
  }
  
  reverse() {
    let prev = null
    let node = this.head
    let next

    this.head = this.tail
    this.tail = node
    
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev

      prev = node
      node = next
    }
    return this
  }
}

const list = new SinglyLinkedList()

const first = new Node("Test")
first.next = new Node("Test 2")