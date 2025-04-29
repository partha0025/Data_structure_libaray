// Graph/WeightedGraph.js
const BaseGraph = require('./BaseGraph');
const PriorityQueue = require('./PriorityQueue'); // utility class needed

class WeightedGraph extends BaseGraph {
  constructor(isDirected = false) {
    super();
    this.isDirected = isDirected;
  }

  addEdge(v1, v2, weight) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjList.get(v1).push({ node: v2, weight });
    if (!this.isDirected) {
      this.adjList.get(v2).push({ node: v1, weight });
    }
  }

  removeEdge(v1, v2) {
    this.adjList.set(v1, this.getNeighbors(v1).filter(e => e.node !== v2));
    if (!this.isDirected) {
      this.adjList.set(v2, this.getNeighbors(v2).filter(e => e.node !== v1));
    }
  }

  dijkstra(start) {
    const distances = {};
    const pq = new PriorityQueue();
    for (let vertex of this.adjList.keys()) {
      distances[vertex] = Infinity;
    }
    distances[start] = 0;
    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
      const { vertex: current } = pq.dequeue();
      for (let neighbor of this.getNeighbors(current)) {
        let alt = distances[current] + neighbor.weight;
        if (alt < distances[neighbor.node]) {
          distances[neighbor.node] = alt;
          pq.enqueue(neighbor.node, alt);
        }
      }
    }

    console.log("Dijkstra result from", start, ":", distances);
    return distances;
  }

  prims(start) {
    const visited = new Set();
    const pq = new PriorityQueue();
    const result = [];
    visited.add(start);
    for (let edge of this.getNeighbors(start)) {
      pq.enqueue([start, edge.node, edge.weight], edge.weight);
    }

    while (!pq.isEmpty()) {
      const { vertex: [from, to, weight] } = pq.dequeue();
      if (!visited.has(to)) {
        visited.add(to);
        result.push({ from, to, weight });

        for (let edge of this.getNeighbors(to)) {
          if (!visited.has(edge.node)) {
            pq.enqueue([to, edge.node, edge.weight], edge.weight);
          }
        }
      }
    }

    console.log("Prim's MST:");
    console.table(result);
    return result;
  }
}

module.exports = WeightedGraph;
