import {initGui} from '/js/gui.js'
import {config, getRaymarchingMaterial, updateRaymarchingMaterial} from '/js/config.js'
import {Cube, Sphere, Cylinder} from '/js/objects.js'
import {obj_params} from '/js/constants.js'



let renderer, wireframeScene, controls;
let raymarchingMaterial, raymarchingScreen;
/*
let composer;
*/
let raymarchingScene;
let camera;

var stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

export function initRenderer(fshader, vshader) {
  // preserveDrawingBuffer - сохранение буфера до перерисовки
  renderer = new THREE.WebGLRenderer({preserveDrawingBuffer: true});
  renderer.autoClearColor = false;
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild( renderer.domElement );

  camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  camera.position.z = 5;

  controls = new THREE.OrbitControls( camera, renderer.domElement );

  // GUI
  initGui(config);
  let objects = initWireframe();
  initRaymarching(fshader, vshader);

  return objects;

}
function initWireframe() {
  wireframeScene = new THREE.Scene();

  var color = new THREE.Color(1, 1, 1);
  color.alpha = 0.5;
  var material = new THREE.MeshBasicMaterial({color: color, wireframe:true, transparent:true, opacity:0.2});

  let cube = new Cube(material);
  let sphere = new Sphere(material);

  let cylinder = new Cylinder(material);

  wireframeScene.add(cube.get(obj_params.cube));
  wireframeScene.add(sphere.get(obj_params.sphere));
  wireframeScene.add(cylinder.get(obj_params.cylinder));


  return [cube, cylinder, sphere]
}

function initRaymarching(fshader, vshader) {
  let geometry = new THREE.PlaneBufferGeometry(2.0, 2.0);
  // Создаём свои шейдеры и прокидываем туда параметры
  
  raymarchingMaterial = getRaymarchingMaterial(camera, fshader, vshader)
  raymarchingScreen = new THREE.Mesh(geometry, raymarchingMaterial);
  raymarchingScreen.frustumCulled = false;

  raymarchingScene = new THREE.Scene();
  raymarchingScene.add(raymarchingScreen);
}

export function render(cube, cylinder, sphere) {
  stats.begin();
  requestAnimationFrame( () => {render(cube, cylinder, sphere)} );

  controls.update();

  cube.configure(config.cube);
  cylinder.configure(config.cylinder);
  sphere.configure(config.sphere);

  raymarchingMaterial = updateRaymarchingMaterial(raymarchingMaterial, config, cube, sphere, cylinder)

  renderer.clear();
  renderer.render( raymarchingScene, camera );
  if (config.wireframe) {
    renderer.render( wireframeScene, camera );
  }
  stats.end();
};
