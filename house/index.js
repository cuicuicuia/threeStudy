import * as THREE from 'three';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';
import house from './house.js';
import sideWall from './side-wall.js';
import behindWall from './wall.js'
import frontWall from './fronWall.js'
import roof from './roof.js'
import doorstep from './doopstep.js'
const scene = new THREE.Scene();

scene.add(doorstep)
scene.add(house);
scene.add(frontWall)

roof.position.y = 2600;
roof.position.z = -800;
roof.rotation.x = 55 / 180 * Math.PI;

scene.add(roof)
const roof2 = roof.clone();
roof2.rotateX( 70 / 180 * Math.PI);
roof2.position.z = -roof.position.z;

house.add(roof2);


frontWall.translateX(-2000)
frontWall.translateZ(1500)
scene.add(behindWall);

sideWall.rotation.y = Math.PI / 2;
sideWall.translateZ(-2000)
sideWall.translateX(1500)
sideWall.translateY(150)
scene.add(sideWall);

const  sideWall2 = sideWall.clone();
sideWall2.rotation.y = -Math.PI / 2;
sideWall2.translateZ(-4000)
sideWall2.translateX(3000)
scene.add(sideWall2);

const directionLight = new THREE.DirectionalLight(0xffffff);
directionLight.position.set(3000, 3000, 3000);
scene.add(directionLight);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const axesHelper = new THREE.AxesHelper(20000);
scene.add(axesHelper);

const width = window.innerWidth;
const height = window.innerHeight;

const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000000);
camera.position.set(3000, 3000, 3000);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height)

function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

render();

document.body.append(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);