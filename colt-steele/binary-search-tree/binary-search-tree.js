class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
    } else {
      this.#putInNextNode(this.root, newNode)
    }
  }

  find(value) {
    return this.#checkNode(this.root, value)
  }

  #putInNextNode(root, newNode) {
    if (newNode.value === root.value) return
    if (newNode.value > root.value) {
      if (!root.right) {
        root.right = newNode
        return this
      }
      this.#putInNextNode(root.right, newNode)
    } else {
      if (!root.left) {
        root.left = newNode
        return this
      }
      this.#putInNextNode(root.left, newNode)
    }
  }

  #checkNode(node, value) {
    if (!node) return false
    if (node.value === value) return node
    if (value > node.value) {
      return this.#checkNode(node.right, value)
    } else {
      return this.#checkNode(node.left, value)
    }
  }
}
