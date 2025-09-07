import * as THREE from "three";

const loader = new THREE.TextureLoader();
const texture = loader.load("./image.png");

const geometry = new THREE.SphereGeometry(100);
texture.colorSpace = THREE.SRGBColorSpace;
const material = new THREE.MeshBasicMaterial({
  map: texture,
  aoMap: texture,
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
