function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw() {
  stroke(0);
  fill(random(255), random(255), random(255), random(100));

  for (let x = 0; x <= width; x += 50) {
    for (let y = 0; y <= height; y += 300) {
      arc(x, y, random(width), random(height), 0, 90, HALF_PI);
    }
    frameRate(5)
  }
}

function mousePressed() {
  noLoop();
}
