import { Node_ } from "./node_";

export class Graph {
  private nodes: Node_[];
  private totalNodes: number;
  private adjMatrix: number[][] = [];
  private numNodes: number;

  constructor(totalNodes: number) {
    this.nodes = [];
    this.totalNodes = totalNodes;

    for (let i = 0; i < this.totalNodes; i++) {
      this.adjMatrix[i] = [];
      for (let j = 0; j < this.totalNodes; j++) {
        this.adjMatrix[i][j] = 0;
      }
    }
    this.numNodes = 0;
  }

  public addNode(node: Node_): void {
    node.setIndex(this.numNodes);
    this.nodes.push(node);
    this.numNodes++;
  }

  public addEdge(source: Node_, target: Node_): void {
    if (source == null || target == null) return;

    const sourceIndex = source.getIndex();
    const targetIndex = target.getIndex();

    if (sourceIndex === -1 || targetIndex === -1) return;

    if (source.getIndex() == target.getIndex()) return;

    this.adjMatrix[sourceIndex][targetIndex] = 1;
  }

  public computeNodeNeighbours(node: Node_): void {
    let neighbours: Node_[] = [];
  }
}
