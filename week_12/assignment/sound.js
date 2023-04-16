var boopSound;
var boopleSound;
var booperSound;
var boopinSound;

var button1;
var button2;
var button3;
var button4;


function setup() {
  createCanvas(0, 0);

  button1 = createButton('boop');
  button1.mousePressed(togglePlaying1);
  boopSound = loadSound('rupy_breath.mp3', loaded);

  button2 = createButton('boople');
  button2.mousePressed(togglePlaying2);
  boopleSound = loadSound('rupy_grumble.mp3', loaded);

  button3 = createButton('booper');
  button3.mousePressed(togglePlaying3);
  booperSound = loadSound('rupy_lick.mp3', loaded);

  button4 = createButton('boopin');
  button4.mousePressed(togglePlaying4);
  boopinSound = loadSound('rupy_bork.mp3', loaded);
}

function loaded() {

}

function togglePlaying1() {
  if (!boopSound.isPlaying()) {
    boopSound.play();
  }
}

function togglePlaying2() {
  if (!boopleSound.isPlaying()) {
    boopleSound.play();
  }
}

function togglePlaying3() {
  if (!booperSound.isPlaying()) {
    booperSound.play();
  }
}

function togglePlaying4() {
  if (!boopinSound.isPlaying()) {
    boopinSound.play();
  }
}
