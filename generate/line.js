import * as THREE from "three";

const point = new THREE.EllipseCurve(0, 0, 100, 100,0,Math.PI);
const pointList = point.getPoints(100);

const geometry= new THREE.BufferGeometry();
geometry.setFromPoints(pointList);

const material = new THREE.LineBasicMaterial({ color: 0x00ff00 ,size: 10});
const line =new THREE.Line(geometry,material);


export default line;
