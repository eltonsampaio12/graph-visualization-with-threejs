export class Graph {
  private nodes: Node[];
  private totalNodes: number;
  private adjMatrix: number[][] = [];

  constructor(totalNodes: number) {
    this.nodes = [];
    this.totalNodes = totalNodes;
  }
}
