export function initGui(config) {
    console.log("run gui")
    var gui = new dat.GUI();
    var viewFolder = gui.addFolder('View');
    viewFolder.add(config, 'wireframe').name('Wireframe');
    viewFolder.add(config, 'colored').name('Colored');
    viewFolder.add(config, 'internalEdge').name('Internal Edge');
    viewFolder.add(config, 'outline').name('Outline');
    var cubeFolder = gui.addFolder('Cube');
    cubeFolder.add(config.cube, 'scale', 0.5, 2);
    cubeFolder.add(config.cube.pos, 'PositionX', -2, 2);
    cubeFolder.add(config.cube.pos, 'PositionY', -2, 2);
    cubeFolder.add(config.cube.pos, 'PositionZ', -2, 2);
    cubeFolder.add(config.cube.rotation, 'RotationX', -Math.PI/2, Math.PI/2);
    cubeFolder.add(config.cube.rotation, 'RotationY', -Math.PI/2, Math.PI/2);
    cubeFolder.add(config.cube.rotation, 'RotationZ', -Math.PI/2, Math.PI/2);
    var cylinderFolder = gui.addFolder('Cylinder');
    cylinderFolder.add(config.cylinder, 'scale', 0.5, 2);
    cylinderFolder.add(config.cylinder.pos, 'PositionX', -2, 2);
    cylinderFolder.add(config.cylinder.pos, 'PositionY', -2, 2);
    cylinderFolder.add(config.cylinder.pos, 'PositionZ', -2, 2);
    cylinderFolder.add(config.cylinder.rotation, 'RotationX', -Math.PI/2, Math.PI/2);
    cylinderFolder.add(config.cylinder.rotation, 'RotationY', -Math.PI/2, Math.PI/2);
    cylinderFolder.add(config.cylinder.rotation, 'RotationZ', -Math.PI/2, Math.PI/2);
    var sphereFolder = gui.addFolder('Sphere');
    sphereFolder.add(config.sphere, 'scale', 0.5, 2);
    sphereFolder.add(config.sphere.pos, 'PositionX', -2, 2);
    sphereFolder.add(config.sphere.pos, 'PositionY', -2, 2);
    sphereFolder.add(config.sphere.pos, 'PositionZ', -2, 2);
}
