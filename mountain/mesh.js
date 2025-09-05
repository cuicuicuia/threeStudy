import * as THREE from "three";
import { createNoise2D } from "simplex-noise";
const geometry = new THREE.PlaneGeometry(300, 300, 50, 50);

const noise2D = createNoise2D();

export function updatePosition() {
  const position = geometry.attributes.position;
  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i);
    const y = position.getY(i);
    position.setZ(
      i,
      noise2D(x / 100, y / 100) * 50 +
        Math.sin(Date.now() * 0.002 + x * 0.05) * 10
    );
  }
  position.needsUpdate = true;
}

const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color("orange"),
  wireframe: true,
});

const mesh = new THREE.Mesh(geometry, material);
mesh.rotateX(Math.PI / 2);
console.log(mesh);

export default mesh;
