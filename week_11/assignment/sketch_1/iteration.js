
  function setup() {
    createCanvas(800, 800);
    background(random(255), random(255), random(255));
  }
  
  function draw() {
    for (let i = 0; i < 12; i++) {
      noStroke();
      fill(random(255), random(255), random(255));
      rect(random(width), random(height), random(width), random(height));
      frameRate(3)
    }
  }

  function mousePressed() {
    noLoop();
  }
