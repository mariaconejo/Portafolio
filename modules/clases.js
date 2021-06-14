import { position, ctx, canvas } from './util.js'
// Aqui estan las clases de face y mask
class Face{
    constructor(face,moveX,moveY) {
        this.faceImage = new Image();
        this.faceImage.src = face;
        this.positionX = moveX;
        this.positionY = moveY;

    }
    // La imagen se posiciona en el centro del canvas y le resta la mitad del tamaño de la imagen
    draw(){
        this.positionX = canvas().width / 2 - this.faceImage.width / 2;
        this.positionY = canvas().height / 2 - this.faceImage.height / 2;
        ctx().drawImage(this.faceImage, this.positionX, this.positionY);
    }
}

class Mask{
    constructor(mask,moveX,moveY){
        this.maskImage = new Image();
        this.maskImage.src = mask;
        this.positionX = moveX;
        this.positionY = moveY;
    }
    draw(){
      // La imagen se posiciona en el centro del canvas y le resta la mitad del tamaño de la imagen
        this.positionX = canvas().width / 2 - this.maskImage.width / 2;
        this.positionY = canvas().height / 2 - this.maskImage.height / 2;
        ctx().drawImage(this.maskImage, this.positionX, this.positionY)
    }
}

// Funcion que mueve los ojos a su posicion dentro de las pupilas,
//intente hacer esto una clase pero solo me pintaba una pupila y necesito ambas por eso lo deje como funcion
function moveEyes() {
    const eyesImage = new Image ();
    eyesImage.src = 'https://i.ibb.co/3rjcPj5/eye.png';
    // array con las coordenadas para colocar ambas pupilas
    const eyesPositions = [
        {
            x: canvas().width / 2  - 34,  // La imagen se posiciona en el centro del canvas y le resta la mitad del tamaño de la imagen y le resta mirando
                                          // le va restando de acuerdo a la posicion donde se cuentre el blanco de los ojos ojo izquierdo
            y: canvas().height / 2 - 15,
        },
        {
            x: canvas().width / 2 + 75, // le suma porque es el ojo derecho
            y: canvas().height / 2 - 15,
        }
];
   // le aplica a todo el elemento la funcion position y permite que la pupila pueda moverse dentro y fuera del ojo
    const eyePositions = eyesPositions.map(Position);

    eyePositions.forEach((element) => {
        ctx().drawImage(eyesImage,
                    element.x - eyesImage.width / 2,
                    element.y - eyesImage.height / 2);
    });
}

export { moveEyes, Face, Mask };
