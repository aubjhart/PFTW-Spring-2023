function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw() {
  fill(random(255), random(255), random(255));
  stroke(255);
  strokeWeight(15);

  for (let x = 0; x <= width; x += 50) {
    for (let y = 0; y <= height; y += 50) {
      triangle(x, y, x + random(50), y, x, y + random(50));
    }
    frameRate(3);
  }
}

function mousePressed() {
  noLoop();
}
