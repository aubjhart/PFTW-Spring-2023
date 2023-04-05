function setup() {
    createCanvas(800, 800);
    background(251, 149, 255);
    angleMode(DEGREES);
  }

  function cottonCandy() {
    fill(237,20,91,15);
    noStroke();
    square(random(100), random(300), random(800), random(300));
    fill(126,235,255,20);
    noStroke();
    square(random(100), random(300), random(800), random(300));
    fill(255,178,182,25);
    noStroke();
    square(random(100), random(300), random(800), random(300));
  }
  
  function draw() {
    translate(random(800), random(800));
    rotate(random(360));
    cottonCandy();
  }

  function mousePressed() {
    noLoop();
  }