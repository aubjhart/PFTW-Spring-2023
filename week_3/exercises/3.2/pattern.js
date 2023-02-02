function setup() {
  createCanvas(600,600);
}

function createTile (originX, originY, outerColor, firstInnerColor, secondInnerColor, thirdInnerColor) {
  translate(originX, originY);
  fill(outerColor);
  noStroke();
  ellipse(200, 200, 600);
  fill(firstInnerColor);
  noStroke();
  ellipse(200, 200, 500);
  fill(secondInnerColor);
  noStroke();
  ellipse(200, 200, 400);
  fill(thirdInnerColor);
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
  createTile(0, 0, 'black', 'white', 'cyan', 'magenta');
  createTile(0, 200, 'pink', 'magenta', 'white', 'black');
  createTile(0, 200, 'magenta', 'black', 'pink', 'cyan');
  createTile(200, -400, 'cyan', 'magenta', 'white', 'pink');
  createTile(0, 200, 'magenta', 'pink', 'cyan', 'magenta');
  createTile(0, 200, 'black', 'white', 'pink', 'cyan');
  createTile(200, -400, 'pink', 'cyan', 'magenta', 'black');
  createTile(0, 200, 'cyan', 'pink', 'black', 'white');
  createTile(0, 200, 'magenta', 'white', 'black', 'cyan');
}
