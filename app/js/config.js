export var config = {
    wireframe: false,
    colored: false,
    internalEdge: false,
    outline: true,
    cube : {
      scale: 1.0,
      pos: {
        PositionX: 0,
        PositionY: 0,
        PositionZ: 0,
      },
      rotation: {
        RotationX:0,
        RotationY:0,
        RotationZ:0,
      },
    },
    cylinder : {
      scale: 1.0,
      pos: {
        PositionX: 0,
        PositionY: 0,
        PositionZ: 0,
      },
      rotation: {
        RotationX:0,
        RotationY:0,
        RotationZ:0,
      },
    },
      sphere: {
        scale : 1.2,
        pos : {
          PositionX : 0,
          PositionY : 0,
          PositionZ : 0,
        }
      }
  };

export function getRaymarchingMaterial(camera, fshader, vshader) {
  return new THREE.RawShaderMaterial({
  uniforms: {
    va: { 
      value: [new THREE.Vector3(0.8, 0, 0), new THREE.Vector3(2, 0, 0), new THREE.Vector3(2, 0, 0)] 
    },
    wireframe :  true,
    resolution: { 
      value: new THREE.Vector2(window.innerWidth, window.innerHeight) 
    },
    cameraWorldMatrix: { 
      value: camera.matrixWorld
    },
    cameraProjectionMatrixInverse: { 
      value: new THREE.Matrix4().getInverse(camera.projectionMatrix)
    },
    colored: { 
      value: false 
    },
    internalEdge: { 
      value: true 
    },
    outline: { 
      value: true 
    },
    spherePosition: { 
      value: new THREE.Vector3(0, 0, 0) 
    },
    sphereRotation: { 
      value: new THREE.Vector3(0, 0, 0) 
    },
    sphereScale: { 
      value: 1.0 
    },
    cubePosition: { 
      value: new THREE.Vector3(0, 0, 0) 
    },
    cubeRotation: { 
      value: new THREE.Vector3(0, 0, 0) 
    },
    cubeScale: { 
      value: 1.0 
    },
    cylinderPosition: { 
      value: new THREE.Vector3(0, 0, 0) 
    },
    cylinderRotation: { 
      value: new THREE.Vector3(0, 0, 0) 
    },
    cylinderScale: { 
      value: 1.0 
    }
  },
  vertexShader: vshader,
  fragmentShader: fshader
  });
}
export function updateRaymarchingMaterial(raymarchingMaterial, config, cube, sphere, cylinder) {
  raymarchingMaterial.uniforms.colored.value = config.colored;
  raymarchingMaterial.uniforms.internalEdge.value = config.internalEdge;
  raymarchingMaterial.uniforms.outline.value = config.outline;

  raymarchingMaterial.uniforms.cubePosition.value = cube.cube.position;
  raymarchingMaterial.uniforms.cubeRotation.value = cube.cube.rotation;
  raymarchingMaterial.uniforms.cubeScale.value = cube.cube.scale.x;
  raymarchingMaterial.uniforms.cylinderPosition.value = cylinder.cylinder.position;
  raymarchingMaterial.uniforms.cylinderRotation.value = cylinder.cylinder.rotation;
  raymarchingMaterial.uniforms.cylinderScale.value = cylinder.cylinder.scale.x;
  raymarchingMaterial.uniforms.spherePosition.value = sphere.sphere.position;
  raymarchingMaterial.uniforms.sphereScale.value = sphere.sphere.scale.x;

  raymarchingMaterial.uniforms.needsUpdate = true;

  return raymarchingMaterial
}