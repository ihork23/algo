import BinarySearchTree from "../binary-search-tree/binary-search-tree";

//    10
//  6     15
//3   8      20

// DFSPreOrder [10, 6, 3, 8, 15, 20]
// DFSPostOrder [3, 8, 6, 20, 15, 10]
// DFSInOrder [3, 6, 8, 10, 15, 20]

class DFS extends BinarySearchTree {
  DFSPreOrder() {
    const data = []
    const traverse = (node) => {
      data.push(node)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)
    return data
  }
  DFSPostOrder() {
    const data = []
    const traverse = (node) => {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node)
    }

    traverse(this.root)
    return data
  }
  DFSInOrder() {
    const data = []
    const traverse = (node) => {
      if (node.left) traverse(node.left)
      data.push(node)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)
    return data
  }
}