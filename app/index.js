import {initRenderer, render} from "/js/raymarching-csg.js"

(async function run() {
    let resp = await fetch("./shader.fs");
    let fshader = await resp.text();
    resp = await fetch("./shader.vs");
    let vshader = await resp.text();
    let objects = initRenderer(fshader, vshader);
    render(...objects);

  })()