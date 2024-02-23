import { Graph } from "./entities/graph";
import { Node_ } from "./entities/node_";
import * as THREE from "three";

const totalNodes = 20; // Change to 20
const graph = new Graph(totalNodes);

const nodes: Node_[] = [];
for (let i = 0; i < totalNodes; i++) {
  const node = new Node_();
  graph.addNode(node);
  nodes.push(node);
}

graph.addEdge(nodes[0], nodes[1]);
graph.addEdge(nodes[0], nodes[2]);
graph.addEdge(nodes[0], nodes[3]);

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

for (let i = 0; i < totalNodes; i++) {
  const node = nodes[i];
  const neighbors = graph.computeNeighbors(node); // Assuming this returns a list of neighbors
  for (const neighbor of neighbors) {
    drawLineBetweenNodes(node, neighbor);
  }
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

function drawLineBetweenNodes(node1: Node_, node2: Node_) {
  const material = new THREE.LineBasicMaterial({ color: 0x0000ff }); // Blue color
  const geometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(
      node1.getPosition().x,
      node1.getPosition().y,
      node1.getPosition().z
    ),
    new THREE.Vector3(
      node2.getPosition().x,
      node2.getPosition().y,
      node2.getPosition().z
    ),
  ]);
  const line = new THREE.Line(geometry, material);
  scene.add(line);
}
