import * as THREE from "three";

const geometry = new THREE.PlaneGeometry(200, 100);

const loader = new THREE.TextureLoader();
const texture = loader.load("./image.png");
texture.colorSpace = THREE.SRGBColorSpace;

const material = new THREE.MeshBasicMaterial({
  map: texture,
});

const mesh = new THREE.Mesh(geometry, material);

console.log(mesh);

export default mesh;
