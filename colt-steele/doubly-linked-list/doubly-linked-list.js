class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
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
      node.prev = this.tail
    }
    this.tail = node
    this.length += 1
    return this
  }

  pop() {
    if (!this.tail) return undefined
    const poppedNode = this.tail
    if (this.length === 1) {
      this.tail = null
      this.head = null
      this.length -= 1
    } else {
      const prev = this.tail.prev
      prev.next = null
      this.length--
      this.tail = prev
    }
    poppedNode.prev = null
    return poppedNode
  }

  shift() {
    if (!this.head) return undefined
    const oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
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
      this.head.prev = newNode
      this.head = newNode
    }
    this.length += 1
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    const backwardDirection = this.length / 2 < index
    const nodeStepMaker = backwardDirection ? node => node.prev : node => node.next
    const indexStepMaker = backwardDirection ? i => i - 1 : i => i + 1
    let currentNode = backwardDirection ? this.tail : this.head
    let currentIndex = backwardDirection ? this.length - 1 : 0
    while (currentIndex !== index) {
      currentNode = nodeStepMaker(currentNode)
      currentIndex = indexStepMaker(currentIndex)
    }
    return currentNode
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
    newNode.next.prev = newNode
    previousNode.next = newNode
    newNode.prev = previousNode
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
    const nextNode = previousNode.next.next
    previousNode.next = nextNode
    nextNode.prev = previousNode
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