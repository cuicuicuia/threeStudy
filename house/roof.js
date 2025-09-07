import * as THREE from 'three';

const geometry=new THREE.BoxGeometry(4200,2000,100)


const texture= new THREE.TextureLoader().load('./roof.png')
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.colorSpace = THREE.SRGBColorSpace;

const material=new THREE.MeshLambertMaterial({
    map:texture,
    aoMap:texture
})

const roof=new THREE.Mesh(geometry,material)

export default roof