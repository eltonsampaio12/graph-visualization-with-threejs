import * as THREE from "three";

class Node_ {
  private range: number;
  private position: THREE.Vector3;
  private index: number;

  constructor() {
    this.range = 400;
    this.position = new THREE.Vector3(
      Math.random() * this.range,
      Math.random() * this.range,
      Math.random() * this.range
    );
    this.index = -1;
  }
}
