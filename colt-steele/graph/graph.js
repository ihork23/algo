export default class Graph {
  #adjacencyList = {}
  addVertex(vertex) {
    if (!this.#adjacencyList[vertex]) this.#adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2) {
    if (this.#adjacencyList[vertex1]) this.#adjacencyList[vertex1].push(vertex2)
    if (this.#adjacencyList[vertex2]) this.#adjacencyList[vertex2].push(vertex1)
  }

  removeEdge(vertex1, vertex2) {
    this.#adjacencyList[vertex1] = this.#adjacencyList[vertex1].filter(item => item !== vertex2)
    this.#adjacencyList[vertex2] = this.#adjacencyList[vertex2].filter(item => item !== vertex1)
  }

  removeVertex(vertex) {
    while (this.#adjacencyList[vertex].length) {
      const adjacentVertex = this.#adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.#adjacencyList[vertex]
  }

  depthFirstRecursive(startVertex) {  //['A', 'B', 'D', 'E', 'C', 'F']
    const result = []
    const visited = {}
    const adjacencyList = this.#adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null
      visited[vertex] = true
      result.push(vertex)
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      })
    })(startVertex)

    return result
  }
  
  depthFirstIterative(startVertex) {  //['A', 'C', 'E', 'F', 'D', 'B']
    const stack = [startVertex]
    const visited = {[startVertex]: true}
    const result = []

    while (stack.length) {
      const vertex = stack.pop()
      result.push(vertex)

      this.#adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }

    return result
  }

  breadthFirstIterative(startVertex) {  //['A', 'B', 'C', 'D', 'E', 'F']
    const queue = [startVertex]
    const visited = {[startVertex]: true}
    const result = []

    while (queue.length) {
      const vertex = queue.shift()
      result.push(vertex)

      this.#adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          queue.push(neighbor)
        }
      })
    }

    return result
  }
}


const g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

console.log(g.depthFirstRecursive('A'))  //['A', 'B', 'D', 'E', 'C', 'F']
console.log(g.depthFirstIterative('A'))  //['A', 'C', 'E', 'F', 'D', 'B']
console.log(g.breadthFirstIterative('A'))  //['A', 'B', 'C', 'D', 'E', 'F']

//    A
//  /   \
// B    C
// |    |
// D----E
//  \  /
//   F