import "./style.css";
import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
// Add the cube to the scene
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
// Camera parameters = field of view in degrees, aspect ratio (width / height) of viewport
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// Move the camera backward before doing the render
camera.position.z = 3;
// Add camera to the scene
scene.add(camera);

// Renderer
// Retreive canvas class in html
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
// Update the size of the renderer
renderer.setSize(sizes.width, sizes.height);

// Render the cube
renderer.render(scene, camera);
