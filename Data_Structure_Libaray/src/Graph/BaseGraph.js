// Graph/BaseGraph.js
class BaseGraph {
    constructor() {
      this.adjList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjList.has(vertex)) this.adjList.set(vertex, []);
    }
  
    getNeighbors(vertex) {
      return this.adjList.get(vertex) || [];
    }
  
    removeVertex(vertex) {
      this.adjList.delete(vertex);
      for (let [v, neighbors] of this.adjList) {
        this.adjList.set(v, neighbors.filter(n => n.node !== vertex));
      }
    }
  
    print() {
      for (let [v, edges] of this.adjList) {
        const list = edges.map(e => `${e.node}(${e.weight ?? ''})`).join(", ");
        console.log(`${v} -> ${list}`);
      }
    }
  
    bfs(start) {
      const visited = new Set();
      const queue = [start];
      visited.add(start);
      while (queue.length) {
        const vertex = queue.shift();
        console.log(vertex);
        for (let { node } of this.getNeighbors(vertex)) {
          if (!visited.has(node)) {
            visited.add(node);
            queue.push(node);
          }
        }
      }
    }
  
    dfs(start, visited = new Set()) {
      if (!visited.has(start)) {
        console.log(start);
        visited.add(start);
        for (let { node } of this.getNeighbors(start)) {
          this.dfs(node, visited);
        }
      }
    }
  }
  
  module.exports = BaseGraph;
  