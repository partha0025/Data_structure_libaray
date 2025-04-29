// Graph/DirectedGraph.js
const BaseGraph = require('./BaseGraph');

class DirectedGraph extends BaseGraph {
  addEdge(v1, v2, weight = 1) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjList.get(v1).push({ node: v2, weight });
  }

  removeEdge(v1, v2) {
    this.adjList.set(v1, this.getNeighbors(v1).filter(e => e.node !== v2));
  }

  topologicalSortUtil(v, visited, stack) {
    visited.add(v);
    for (let { node } of this.getNeighbors(v)) {
      if (!visited.has(node)) this.topologicalSortUtil(node, visited, stack);
    }
    stack.push(v);
  }

  topologicalSort() {
    const visited = new Set();
    const stack = [];
    for (let vertex of this.adjList.keys()) {
      if (!visited.has(vertex)) this.topologicalSortUtil(vertex, visited, stack);
    }
    console.log(stack.reverse().join(' -> '));
  }
}

module.exports = DirectedGraph;
