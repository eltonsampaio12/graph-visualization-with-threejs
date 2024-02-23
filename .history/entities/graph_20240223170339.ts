import { Node_ } from "./node_";

export class Graph {
  private nodes: Node_[];
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

  public addNode(node: Node_): void {
    this.nodes.push(node);
  }
}
