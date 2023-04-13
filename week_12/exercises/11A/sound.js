var song;
var button;
var amp;

function setup() {
  createCanvas(600, 600);
  song = loadSound('gum.mp3 - Love You Better (ft. Netanya Duncan).mp3', loaded);
  amp = new p5.Amplitude();
}

function loaded() {
  button = createButton('play');
  button.mousePressed(togglePlaying);
}

function draw() {
  background(201, 130, 255, 75);
  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 10, 200);

  fill(238, 255, 241);
  noStroke();
  ellipse(width / 2, height / 2, diam*3, diam*3);

  fill(205, 255, 212);
  noStroke();
  ellipse(width / 2, height / 2, diam*2, diam*2);

  fill(156, 255, 184);
  noStroke();
  ellipse(width / 2, height / 2, diam, diam);


}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html('pause');
  } else {
    song.stop();
    button.html('play');
  }
}
