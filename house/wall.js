import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(4000, 2000, 100);

const texture = new THREE.TextureLoader().load('./wall.png');

texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.colorSpace = THREE.SRGBColorSpace;

const material = new THREE.MeshLambertMaterial({
    map:texture,
    aoMap:texture
});
const behindWall = new THREE.Mesh(geometry, material);
behindWall.translateY(1150);
behindWall.translateZ(-1450);

export default behindWall;