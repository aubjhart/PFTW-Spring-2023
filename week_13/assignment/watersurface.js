let points = [];
//created after moving items to setup to speed up the frame rate
let wave = [];
const frmLen = 120;
let initPoints = [];

function setup(){
    createCanvas(600, 600);
    angleMode(DEGREES);
    stroke(255);
    strokeWeight(10);

  
    for(let i = 0; i < 36; i++) {
      initPoints[i] =  createVector(random(width), random(height));
    }

    for(let f = 0; f < frmLen; f++){
      points.push([]);

      for(let i=0; i < initPoints.length; i++){
        let pX = 50 * sin(f*360/frmLen+initPoints[i].x) + initPoints[i].x;
        let pY = 50 * sin(f*360/frmLen+initPoints[i].y) + initPoints[i].y;
        points[f].push(createVector(pX, pY));
      }
    }

    for(let f = 0; f < frmLen; f++){
      wave.push([]);
      for(let x = 0; x < width; x++){
        for(let y = 0; y < height; y++){
          let distances = [];
          for(let i = 0; i < points[f].length; i++){
            // let d = dist(x, y, points[i].x, points[i].y);
            // quicker/cleaner version of above code, pythagorean theorem
            let d = (x-points[f][i].x)**2+(y-points[f][i].y)**2;
            distances[i] = d;
          } 
  
          let sorted = sort(distances);
          //relates to above change w/ pythagorean theorem
          let noise = Math.sqrt(sorted[0]);
          let index = (x+y*width)*4;
          wave[f][index] = waveColor(noise, 14.5, 44, 2.5);
          wave[f][index+1] = waveColor(noise, 21, 169, 2.5);
          wave[f][index+2] = waveColor(noise, 40, 225, 3.0);
          wave[f][index+3] = 255;
        }
      }  
    }
    pixelDensity(1);
  }

function draw(){
  background(0);

  let frameIndex = frameCount % points.length;

loadPixels();
  for(i = 0; i < wave[frameIndex].length; i += 4){
    pixels[i] = wave[frameIndex][i];
    pixels[i+1] = wave[frameIndex][i+1];
    pixels[i+2] = wave[frameIndex][i+2];
    pixels[i+3] = wave[frameIndex][i+3];
   }
  
 updatePixels();

//    beginShape(POINTS);
 //   for (let i = 0; i < points[frameIndex].length; i++){
 //     vertex(points[frameIndex][i].x, points[frameIndex][i].y);
  //  }
//    endShape();
}

function waveColor(x, a, b, e) {
  if(x < 0) return b;
  else return Math.pow(x/a, e)+b
}
