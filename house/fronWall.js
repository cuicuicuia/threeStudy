import * as THREE from 'three';

const texture = new THREE.TextureLoader().load('./wall.png');

texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.colorSpace = THREE.SRGBColorSpace;
texture.repeat.x = 0.0005;
texture.repeat.y = 0.0005;


const shape =new THREE.Shape()
shape.moveTo(0, 0);
shape.lineTo(4000, 0);
shape.lineTo(4000, 2000);
shape.lineTo(0, 2000);

const door = new THREE.Path();
door.moveTo(1000, 0);
door.lineTo(2000, 0);
door.lineTo(2000, 1500);
door.lineTo(1000, 1500);
shape.holes.push(door);

const win = new THREE.Path();
win.moveTo(2500, 500);
win.lineTo(3500, 500);
win.lineTo(3500, 1500);
win.lineTo(2500, 1500);
shape.holes.push(win);

const geometry = new THREE.ExtrudeGeometry(shape,{
    depth: 100,
})


const material = new THREE.MeshLambertMaterial({
    map:texture,
    aoMap:texture
});
const frontWall = new THREE.Mesh(geometry, material);
export default frontWall;
