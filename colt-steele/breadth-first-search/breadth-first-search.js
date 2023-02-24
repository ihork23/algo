import BinarySearchTree from "../binary-search-tree/binary-search-tree";

class BFS extends BinarySearchTree {
  BFS() {
    const data = [], queue = []
    let node = this.root

    queue.push(node)
    while (queue.length) {
      node = queue.shift()
      data.push(node)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    return data
  }
}