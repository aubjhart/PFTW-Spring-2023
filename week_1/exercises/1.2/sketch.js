function setup() {
  createCanvas(600,600);
}

function draw() {
  if (mouseIsPressed) {
    fill(16, 255, 252);
    stroke(0);
    strokeWeight(5);
  } else {
    noFill();
    noStroke();
  }
  ellipse(mouseX, mouseY, 200, 200);
}
