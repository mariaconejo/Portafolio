import { clearCanvas, mousePosition } from './modules/util.js';
import { Face, Mask, moveEyes } from './modules/clases.js';

const imageFace = 'https://i.ibb.co/CVfPFkm/sin-eyes.png';
const imageMask = 'https://i.ibb.co/DGLwq0N/mascara.png';
const face = new Face(imageFace);
const mask = new Mask(imageMask);

// Union de las 3 partes en una sola DEBE ESTAR EN ESE ORDEN SI NO NO VA VER LOS OJOS MOVERSE
function joinDrawings() {
  clearCanvas();
  face.draw();
  moveEyes();
  mask.draw();
}

// Funcion que logra que las pupilas sigan al mouse dependiendo de la posicion en x y y del mouse la posicion inicial es
// (0,0) se actuliza con .offsetX y .offsetY
function eyesMoveMouse(event) {
  mousePosition.x = event.offsetX;
  mousePosition.y = event.offsetY;
  joinDrawings();
}

function main() {
  joinDrawings();
  window.addEventListener('mousemove', eyesMoveMouse);
}
main();
