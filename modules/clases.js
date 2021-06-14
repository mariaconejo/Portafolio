import {getTranslatedPosition, ctx, canvas }from './util.js'

class Face{
    constructor(face,moveX,moveY){
        this.faceImage = new Image();
        this.faceImage.src = face;
        this.positionX = moveX;
        this.positionY = moveY;

    }

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
        this.positionX = canvas().width / 2 - this.maskImage.width / 2;
        this.positionY = canvas().height / 2 - this.maskImage.height / 2;
        ctx().drawImage(this.maskImage, this.positionX, this.positionY)
    }
}


function drawEyes() {
    const eyesImage = new Image ();
    eyesImage.src = 'https://i.ibb.co/3rjcPj5/eye.png';
    const eyeOriginPositions = [
        {
            x: canvas().width / 2  - 34,
            y: canvas().height / 2 - 15,
        },
        {
            x: canvas().width / 2 + 75,
            y: canvas().height / 2 - 15,
        }
];

    const eyePositions = eyeOriginPositions.map(getTranslatedPosition);

    eyePositions.forEach((eyePosition) => {
        ctx().drawImage(eyesImage,
                    eyePosition.x - eyesImage.width / 2,
                    eyePosition.y - eyesImage.height / 2);
    });
}



export { drawEyes, Face, Mask };
