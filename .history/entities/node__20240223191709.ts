import * as THREE from "three";

export class Node_ {
  private range: number;
  private position: THREE.Vector3;
  private index: number;

  constructor() {
    this.range = 100;
    this.position = new THREE.Vector3(
      Math.random() * this.range,
      Math.random() * this.range,
      Math.random() * this.range
    );
    this.index = -1;
  }

  public getIndex(): number {
    return this.index;
  }

  public setIndex(value: number): void {
    this.index = value;
  }

  public getPosition(): THREE.Vector3 {
    return this.position;
  }
}
