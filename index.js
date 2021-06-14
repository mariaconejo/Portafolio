import { clearCanvas, resizeCanvas, mousePosition } from './modules/util.js';
import { drawEyes, Face, Mask } from './modules/clases.js';


const imageFace = 'https://i.ibb.co/CVfPFkm/sin-eyes.png';
const imageMask = 'https://i.ibb.co/DGLwq0N/mascara.png';

const face = new Face(imageFace);
const mask = new Mask(imageMask);

function render() {
    clearCanvas();
    face.draw();
    drawEyes();
    mask.draw();

}

function onResize() {
    resizeCanvas();
    render();
}

function onMouseMove(event) {
    mousePosition.x = event.offsetX;
    mousePosition.y = event.offsetY;
    render();
}


function main() {
    resizeCanvas();
    render();
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);
}
window.addEventListener('load', main);
