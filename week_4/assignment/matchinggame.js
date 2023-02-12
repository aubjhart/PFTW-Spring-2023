
const squareSize = 110;
let startingX = 85;
let startingY = 135;
let mySquares = [];
let startingId = 0;
function setup () {
    createCanvas(650, 700);
    background(0);
    for (let k = 0; k < 4; k++) {
        for (let i = 0; i < 4; i++) {
            square(startingX, startingY, squareSize);
            mySquares.push({ x: startingX, y: startingY, id: startingId });
            startingX += 125;
            startingId++;
        }
        startingY += 125;
        startingX = 85;
    }
    console.log(mySquares);
}

function mousePressed() {
    for (let j = 0; j < mySquares.length; j++) {
        if (mouseX > startingX && mouseX < startingX+squareSize && mouseY > startingY && mouseY < startingY+squareSize) {
            console.log('square has been clicked', mySquares[j].id);
        }
    }
}
