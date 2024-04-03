import * as THREE from 'three';
import './src/style.scss';
import { render } from 'react-dom';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x000000, 0);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.OctahedronGeometry(1);
const edgesGeometry = new THREE.EdgesGeometry(geometry);
const material = new THREE.LineBasicMaterial({
    color: 0x000000,
    linewidth: 10
});
// const material = new THREE.MeshBasicMaterial( { color: (255,255,255), } );
const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xFFFFFF }));
const edges = new THREE.LineSegments(edgesGeometry, material);
const octa = new THREE.Mesh( geometry, material );
mesh.add(edges);
scene.add( mesh );
octa.renderOrder = 1;
camera.position.z = 20;
camera.position.y = 2;
camera.position.x = 20


function animate() {
	requestAnimationFrame( animate );

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();