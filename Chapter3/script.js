console.log('Hello Three.js')
console.log(THREE)

//Scene
const scene = new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height);
camera.position.z = 3
camera.position.x = 1
camera.position.y = 1
scene.add( camera );

// Renderer
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


// RENDER
renderer.render(scene, camera)