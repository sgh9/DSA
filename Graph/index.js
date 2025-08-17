class Graph {
  constructor() {
    this.adjestencyList = {};
  }

  addVartex(v1) {
    this.adjestencyList[v1] = [];
  }

  addEdge(v1, v2) {
    if (!this.adjestencyList[v1]) {
      this.adjestencyList[v1] = [];
    }

    if (!this.adjestencyList[v2]) {
      this.adjestencyList[v2] = [];
    }
    this.adjestencyList[v2].push(v1);
    this.adjestencyList[v1].push(v2);
  }
  removeVartex(v1) {
    this.adjestencyList[v1].forEach((v2) => {
      //   this.adjestencyList[v] = this.adjestencyList[v].filter((v) => v !== v1);
      this.removeEdge(v1, v2);
    });
    delete this.adjestencyList[v1];
  }

  removeEdge(v1, v2) {
    this.adjestencyList[v1] = this.adjestencyList[v1].filter((v) => v !== v2);
    this.adjestencyList[v2] = this.adjestencyList[v2].filter((v) => v !== v1);
  }

  traversalRecursive(vartex) {
    let visited = new Map();
    let list = [];

    const dfs = (v) => {
      visited.set(v, true);
      list.push(v);

      this.adjestencyList[v].forEach((v) => {
        if (!visited.has(v)) {
          dfs(v);
        }
      });
    };

    dfs(vartex);
    return list;
  }

  traversalRecursiveBFS(vertex) {
    let visited = new Map();
    let list = [];
    let s = [vertex];

    while (s.length) {
      const v = s.shift();

      list.push(v);
      visited.set(v, true);

      for (let i = 0; i < this.adjestencyList[v].length; i++) {
        if (!visited.has(this.adjestencyList[v][i])) {
          s.push(this.adjestencyList[v][i]);
        }
      }
    }

    return list;
  }
}

const graph = new Graph();

graph.addVartex("Bailhongal");
graph.addVartex("Anigol");
graph.addVartex("Belawadi");
graph.addVartex("Bagewadi");
graph.addVartex("Belagavi");

graph.addEdge("Bailhongal", "Anigol");
graph.addEdge("Bailhongal", "Bagewadi");
graph.addEdge("Belawadi", "Anigol");
graph.addEdge("Bagewadi", "Belagavi");

const list = graph.traversalRecursive("Bailhongal");
const list2 = graph.traversalRecursiveBFS("Bailhongal");
console.log(list, list2);

graph.removeVartex("Bailhongal");

console.log(graph);
