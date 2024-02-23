import { Graph } from "./entities/graph";
import { Node_ } from "./entities/node_";
import * as THREE from "three";

const totalNodes = 20; // Change to 20
const graph = new Graph(totalNodes);

// Initialize and add 20 nodes to the graph
const nodes: Node_[] = [];
for (let i = 0; i < totalNodes; i++) {
  const node = new Node_();
  graph.addNode(node);
  nodes.push(node);
}

// Example: add edge between node 1 and node 2
graph.addEdge(nodes[0], nodes[1]);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0, 0, 200);

const nodeMeshes: THREE.Mesh[] = initializeNodes(graph.getNodes());

for (let nodeMesh of nodeMeshes) {
  scene.add(nodeMesh);
}

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

function initializeNodes(nodes: Node_[]): THREE.Mesh[] {
  const nodeMeshes: THREE.Mesh[] = [];

  for (let node of nodes) {
    const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const nodeMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    nodeMesh.position.set(
      node.getPosition().x,
      node.getPosition().y,
      node.getPosition().z
    );

    nodeMeshes.push(nodeMesh);
  }
  return nodeMeshes;
}
