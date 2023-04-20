var pos;
var inc;
var pos2;
var inc2;

function setup() {
    createCanvas(500,500);
    angleMode(DEGREES);

    pos = 0.0
    inc = 2.0

    pos2 = 0.0
    inc2 = 4.0
}

function draw() {

    clear();

    translate(width/2, height/2);

    var mySinVal = sin(pos);
    var mySinVal2 = sin(pos2);

    amplified = mySinVal*30;
    amplified = mySinVal2*90;

    background(246, 150, 125);

    for (x = 0; x <= 360; x = x + 10) {
       stroke(246, 150, 125, 30);
       strokeWeight(10);
       fill(231, 104, 93, 60);
       ellipse(width/10, amplified, amplified, amplified*10);
       rotate(x);
    }

    pos = pos + inc;
    pos2 = pos2 + inc2;
}