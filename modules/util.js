const mousePosition = { x: 0, y: 0 };
const eyeRadius = 11;

// funciones de canvas y contexto por separado debido a que las necesito por separado debido al uso de 3 imagenes
const canvas = () => {
    const getCanvas = document.querySelector('canvas');
    return getCanvas;

}

const ctx = () => {
    const getContext = canvas().getContext('2d');
    return getContext;
}

// Maneja la resolucion del canvas y el contecto en la ventana se acomoda al tamaño de la ventana
function resizeCanvas() {
    ctx().height = canvas().height;
    ctx().width = canvas().width;
}


function distanceBetweenEyes(a, b) {
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
}

function getUnitVector(a, b) {
    const module = distanceBetweenEyes(a,b);
    return {
        x: (b.x - a.x) / module,
        y: (b.y - a.y) / module
    };
}

function getTranslatedPosition(eyePosition) {
    if (distanceBetweenEyes(eyePosition, mousePosition) <= eyeRadius) {
        return mousePosition;
}
const unitVector = getUnitVector(eyePosition, mousePosition);
    return {
        x: eyePosition.x + eyeRadius * Math.sin(unitVector.x),
        y: eyePosition.y + eyeRadius * Math.sin(unitVector.y),
    };
}


function clearCanvas() {
    ctx().clearRect(0, 0, canvas().width, canvas().height);
}

export{
    resizeCanvas,
    clearCanvas,
    mousePosition,
    canvas,
    ctx,
    getTranslatedPosition
}
