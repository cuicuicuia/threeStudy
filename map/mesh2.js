import * as THREE from "three";

const loader = new THREE.TextureLoader();
const texture = loader.load("./muxing.png");
texture.colorSpace = THREE.SRGBColorSpace;

const geometry = new THREE.SphereGeometry(50);
texture.wrapT = THREE.RepeatWrapping;
const material = new THREE.MeshBasicMaterial({
  map: texture,
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
