let dot;
let dots = [];

class Dot {
  constructor() {
    this.x = random(windowWidth/3, windowWidth);
    this.y = random(windowHeight);
    this.lineX = random(this.x) + windowWidth/4.5;
    this.lineY = random(this.y);
    this.xSpeed = random(-0.35, 0.35);
    this.ySpeed = random(-0.35, 0,35);
  }

  show() {
    strokeWeight(7);
    point(this.x, this.y);

    strokeWeight(1);
    line(this.x, this.y, this.lineX, 0);
    line(this.x, this.y, windowWidth, this.lineY);
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > windowWidth || this.y > windowHeight || this.x < 0 || this.y < 0) {
      this.xSpeed *= random(-1.25, -0.75);
      this.ySpeed *= random(-1.25, -0.75);
    }
  }
}

function setup() {
  var myWidth = document.getElementById('intro').clientWidth;
  var myHeight = document.getElementById('intro').clientHeight;

  var myCanvas = createCanvas(myWidth, myHeight);
  myCanvas.parent("intro");
  myCanvas.style('z-index', '-1');
  myCanvas.position(0,0);
  stroke(255, 255, 255, 75);

  for (let i = 0; i < 25; ++i) {
    dot = new Dot();
    dots.push(dot);
  }
}

function draw() {
  background(43, 45, 54);

  for (let i = 0; i < dots.length; ++i) {
    dots[i].show();
    dots[i].update();
  }
}
