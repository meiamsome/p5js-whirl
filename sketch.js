var cSize, degree, angle, scaleFactor, lastBreak;

function setup() {
  cSize = min(screen.width, screen.height);
  angle = radians(2);
  setDegree(3);
  lastBreak = 0;

  createCanvas(cSize, cSize);
  setFrameRate(30);
  colorMode(HSB);
  background(0);
  noFill();
}

function setDegree(deg) {
  degree = deg;
  var theta = (degree - 2) * PI / degree
  scaleFactor = sin(theta) / (sin(angle) + sin(PI - theta - angle));
}

function drawPoly() {
  beginShape();
  for(var i = 0; i < degree; i++) {
    vertex(cSize * cos(i * TWO_PI / degree) / 2, cSize * sin(i * TWO_PI / degree) / 2);
  }
  endShape(CLOSE);
}

function draw() {
  var f = frameCount - lastBreak;
  if(f % (degree * 30) == 0) {
    background(0);
    setDegree(degree + 1);
    lastBreak = frameCount;
    return;
  }
  stroke(frameCount % 360, 100, 100);
  translate(width / 2, height /2);
  rotate(f * angle);
  scale(pow(scaleFactor, f));
  drawPoly();
}
