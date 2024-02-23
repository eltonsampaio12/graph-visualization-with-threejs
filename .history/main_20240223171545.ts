import { Graph } from "./entities/graph";
import { Node_ } from "./entities/node_";

const totalNodes = 5;
const graph = new Graph(totalNodes);

const node1 = new Node_();
const node2 = new Node_();

graph.addNode(node1);
graph.addNode(node2);

graph.addEdge(node1, node2);

console.log(graph);
