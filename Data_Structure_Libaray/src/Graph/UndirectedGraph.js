// Graph/UndirectedGraph.js
const BaseGraph = require('./BaseGraph');

class UndirectedGraph extends BaseGraph {
  addEdge(v1, v2, weight = 1) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjList.get(v1).push({ node: v2, weight });
    this.adjList.get(v2).push({ node: v1, weight });
  }

  removeEdge(v1, v2) {
    this.adjList.set(v1, this.getNeighbors(v1).filter(e => e.node !== v2));
    this.adjList.set(v2, this.getNeighbors(v2).filter(e => e.node !== v1));
  }
}

module.exports = UndirectedGraph;
