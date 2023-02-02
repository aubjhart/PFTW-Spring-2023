function setup() {
  createCanvas(200,200);
}

function createTile () {
  translate(0, 0);
  fill('black');
  noStroke();
  ellipse(200, 200, 600);
  fill('#b9fafe');
  noStroke();
  ellipse(200, 200, 500);
  fill('cyan');
  noStroke();
  ellipse(200, 200, 400);
  fill('pink');
  noStroke();
  ellipse(200, 200, 300);
  fill('magenta');
  noStroke();
  ellipse(200, 200, 200);
  fill('white');
  noStroke();
  ellipse(175, 175, 30);
  fill('black');
  ellipse(179, 170, 5);
  noStroke();
  ellipse(170, 170, 5);
  noFill();
  stroke('black');
  strokeWeight(3);
  arc(175, 175, 20, 20, 0, PI, open);
}

function draw() {
  createTile();
}
