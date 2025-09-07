import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(4000, 300, 3000);

const texture = new THREE.TextureLoader().load('./image.png');
texture.colorSpace = THREE.SRGBColorSpace;
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(2, 2);

const material = new THREE.MeshLambertMaterial({
    map:texture,
    aoMap:texture
});
const foundation = new THREE.Mesh(geometry, material);

export default foundation;