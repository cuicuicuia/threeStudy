import * as THREE from "three";

const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
    0, 0, 0,
    100, 0, 0,
    0, 100, 0,
    0, 0, 100,
    100, 100, 0
]);

geometry.attributes.position = new THREE.BufferAttribute(vertices, 3);
const material = new THREE.LineBasicMaterial({ color: 0x00ff00 ,size: 10});

const line = new THREE.LineSegments(geometry, material);
 export default line;