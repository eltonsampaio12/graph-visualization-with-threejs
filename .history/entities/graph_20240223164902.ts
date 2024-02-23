export class Graph {
  private nodes: Node[];
  private totalNodes: number;
  private adjMatrix: number[][] = [];

  constructor(totalNodes: number) {
    this.nodes = [];
    this.totalNodes = totalNodes;

    for (let i = 0; i < this.totalNodes; i++) {
      this.adjMatrix[i] = [];
      for (let j = 0; j < this.totalNodes; j++) {
        this.adjMatrix[i][j] = 0;
      }
    }
  }
}
