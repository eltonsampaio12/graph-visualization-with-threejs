import * as THREE from "three";


class Node_ {
    private position: THREE.Vector3;
    private index: number;
    private range: number:

    constructor(){
        this.range = 400
        this.position = new THREE.Vector3(
            Math.random() * this.range,
            Math.random() * this.range,
            Math.random() * this.range
          );
    }
}