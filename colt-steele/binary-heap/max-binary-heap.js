class MaxBinaryHeap {
  insert(val) {
    this.#values.push(val)
    this.#bubbleUp(val, this.#values.length - 1)
  }

  #bubbleUp(val, index) {
    if (index === 0) return
    const parentIndex = Math.floor((index - 1)/2)
    const parentValue = this.#values[parentIndex]
    
    if (parentValue < val) {
      this.#values[parentIndex] = val
      this.#values[index] = parentValue
      this.#bubbleUp(val, parentIndex)
    }
  }

  extractMax() {
    const max = this.#values[0]
    const end = this.#values.pop()
    if (this.#values.length > 0) {
      this.#values[0] = end
      this.#sinkDown(end, 0)
    }
    return max
  }

  #sinkDown(value, index) {
    const leftIndex = 2*index + 1
    const rightIndex = 2 * index + 2
    const left = this.#values[leftIndex]
    const right = this.#values[rightIndex]
    const length = this.#values.length
    
    if (left > value && left > right && leftIndex < length) {
      this.#swap(leftIndex, index)
      return this.#sinkDown(value, leftIndex)
    }
    if (right > value && rightIndex < length) {
      this.#swap(rightIndex, index)
      return this.#sinkDown(value, rightIndex)
    }
  }

  #swap(leftIndex, rightIndex) {
    [this.#values[leftIndex], this.#values[rightIndex]] = [this.#values[rightIndex], this.#values[leftIndex]]
  }

  #values = [41, 39, 33, 18, 27, 12]
}

const heap = new MaxBinaryHeap()
heap.insert(55)