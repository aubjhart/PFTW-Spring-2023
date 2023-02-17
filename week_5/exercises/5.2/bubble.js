let square1;
let square2;

function setup() {
  createCanvas(600, 400);
  square1 = new Square();
  square2 = new Square();
}

function draw() {
  background('cyan');
  square1.move();
  square1.show();
  square2.move();
  square2.show();
}

class Square {
  constructor(x, y) {
    this.x = 300;
    this.y = 200;
  }

  show() {
    strokeWeight(5);
    stroke('magenta');
    noFill();
    rect(this.x, this.y, 100, 100);
  }

  move() {
    this.x = this.x + random(-3,3);
    this.y = this.y + random(-3,3);
  }
}
