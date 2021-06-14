const mousePosition = { x: 0, y: 0 }; // posicion inicial del mouse
const eyeMoveRadius = 11; // se podria decir que es como el globo ocular

// funciones de canvas y contexto por separado debido a que las necesito por separado debido al uso de 3 imagenes
const canvas = () => {
    const getCanvas = document.querySelector('canvas');
    return getCanvas;

}

const ctx = () => {
    const getContext = canvas().getContext('2d');
    return getContext;
}

// Maneja la resolucion del  contexto  se acomoda al tamaño del canvas definido en el html
function resizeCanvas() {
    ctx().height = canvas().height;
    ctx().width = canvas().width;
}

// https://www.cecyt3.ipn.mx/ibiblioteca/mundodelasmatematicas/DistanciaEntreDosPuntos.html
// funcion que calcula la distancia de dos puntos que serian las pupilas con el mouse
// math.pow son para potencias
function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
}

// https://www.superprof.es/apuntes/escolar/matematicas/analitica/vectores/vector-unitario.html
// funcion que calculando anteriormente la distacia entre dos puntos permite calcular un vector que dirige la pupila donde esta el mouse
function getVector(a, b) {
    const distance = distanceBetweenPoints(a,b);
    return {
        x: (b.x - a.x) / distance,
        y: (b.y - a.y) / distance,
    };
}
// funcion que optiene la posicion inicial del mouse y la pupila y si es menor al radio del ojo me retorna la posision del mouse
function position(eyePosition) {
    if (distanceBetweenPoints(eyePosition, mousePosition) <= eyeMoveRadius) {
        return mousePosition;
}

// funcion que permite que los ojos sigan el cursor para esto se usa vectores unitarios
const vector = getVector(eyePosition, mousePosition);
    return {
        x: eyePosition.x + eyeMoveRadius * Math.sin(vector.x),
        y: eyePosition.y + eyeMoveRadius * Math.sin(vector.y),
    };
}

// limpia el canvas
function clearCanvas() {
    ctx().clearRect(0, 0, canvas().width, canvas().height);
}

export{
    resizeCanvas,
    clearCanvas,
    mousePosition,
    canvas,
    ctx,
    position
}
