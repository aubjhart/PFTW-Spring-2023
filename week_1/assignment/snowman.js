let grid = undefined;
let fill1 = prompt("enter a basic color name in lowercase", "magenta");
let fill2 = prompt("enter another basic color lowercase", "pink")
function setup() {
    createCanvas(1000, 800);
    background("#60e7ff");
    grid = loadImage("images/100px_grid.png")
}

function draw() {
    // background
    if (mouseIsPressed) {
        fill("#a5fcff");
        noStroke();
      } else {
        noFill();
        noStroke();
      }
      ellipse(mouseX, mouseY, 200, 200);
    // waves left
    noFill();
    stroke("#24d2d8");
    arc(50, 200, 80, 80, 0, 90, HALF_PI);
    arc(130, 200, 80, 80, 215, 135, HALF_PI);
    arc(130, 200, 80, 80, 0, 90, HALF_PI);
    arc(210, 200, 80, 80, 215, 135, HALF_PI);
    // waves right
    arc(800, 75, 80, 80, 0, 90, HALF_PI);
    arc(880, 75, 80, 80, 215, 135, HALF_PI);
    arc(880, 75, 80, 80, 0, 90, HALF_PI);
    arc(960, 75, 80, 80, 215, 135, HALF_PI);
    // waves right low
    arc(750, 725, 80, 80, 0, 90, HALF_PI);
    arc(830, 725, 80, 80, 215, 135, HALF_PI);
    arc(830, 725, 80, 80, 0, 90, HALF_PI);
    arc(910, 725, 80, 80, 215, 135, HALF_PI);
    // pool floaty
    fill(fill1);
    noStroke();
    ellipse(500, 450, 600);
    // snowman legs
    fill("#fff");
    stroke("#fff")
    // left arm
    ellipse(250, 375, 150);
    // right arm
    ellipse(750, 375, 150);
    // left leg
    ellipse(325, 650, 150);
    // right leg
    ellipse(675, 650, 150);
    // body
    ellipse(500, 450, 400, 400);
    // head
    ellipse(500, 200, 200);
    // hat brim
    stroke(0);
    strokeWeight(35);
    line(400, 120, 600, 120);
    // hat body
    fill(0)
    arc(500, 100, 125, 100, 160, 220, PI, PIE);
    // eyes
    stroke(0);
    strokeWeight(75);
    point(400, 200);
    point(600, 200);
    // mouth
    noFill();
    strokeWeight(10);
    arc(500, 225, 50, 50, 0, PI);
    // eye brows
    stroke(0);
    strokeWeight(10);
    line(375, 155, 410, 150);
    line(590, 150, 625, 155);
    // pant leg left
    fill(0)
    quad(250, 575, 295, 475, 705, 550, 440, 680);
    // pant leg right
    fill(0) 
    quad(750, 575, 705, 475, 295, 550, 560, 680);
    // snowman cocktail
    fill(fill2);
    noStroke();
    quad(735, 250, 815, 250, 800, 375, 750, 375);
    // cocktail straw
    fill(0);
    stroke(0);
    strokeWeight(10);
    line(750, 215, 785, 235);
    line(785, 235, 765, 360
        );
}