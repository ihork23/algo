class PriorityQueue { /* Min Binary Heap */
  enqueue(val, priority) {
    const newNode = new Node(val, priority)
    this.#values.push(newNode)
    this.#bubbleUp(newNode, this.#values.length - 1)
  }

  #bubbleUp(node, index) {
    if (index === 0) return
    const parentIndex = Math.floor((index - 1)/2)
    const parentNode = this.#values[parentIndex]
    
    if (parentNode.priority > node.priority) {
      this.#values[parentIndex] = node
      this.#values[index] = parentNode
      this.#bubbleUp(node, parentIndex)
    }
  }

  dequeue() {
    const min = this.#values[0]
    const end = this.#values.pop()
    if (this.#values.length > 0) {
      this.#values[0] = end
      this.#sinkDown(end, 0)
    }
    return min
  }

  #sinkDown(node, index) {
    const leftIndex = 2*index + 1
    const rightIndex = 2 * index + 2
    const left = this.#values[leftIndex]
    const right = this.#values[rightIndex]
    const length = this.#values.length
    
    if (leftIndex < length && left.priority < node.priority && left.priority < right.priority) {
      this.#swap(leftIndex, index)
      return this.#sinkDown(node, leftIndex)
    }
    if (rightIndex < length && right.priority < node.priority) {
      this.#swap(rightIndex, index)
      return this.#sinkDown(node, rightIndex)
    }
  }

  #swap(leftIndex, rightIndex) {
    [this.#values[leftIndex], this.#values[rightIndex]] = [this.#values[rightIndex], this.#values[leftIndex]]
  }

  #values = []
}

class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

const PQ = new PriorityQueue()
PQ.enqueue('common cold', 5)
PQ.enqueue('gunshot', 1)
PQ.enqueue('high fever', 4)
PQ.enqueue('broken arm', 2)
PQ.enqueue('glass in foot', 3)