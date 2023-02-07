let rectX = 0;
const rectHeight = 75;
let rectY;
let rectWidth = 75;
let clickCount = 0;
let speed;

function setup () {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
    speed = random(1, 3);
}

function draw () {
    background('magenta');
    drawShape();
    rectX += speed;
    if (rectX > width) {
        noLoop();
        text('your score was ' + clickCount, 100, 300);
    }
}

function mousePressed () {
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
        console.log('hit', clickCount);
    }
}

function drawShape () {
    fill('pink');
    rect(rectX, rectY, rectWidth, rectHeight);
}