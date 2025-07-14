let leaves = [];
const leafCount = 10;
const gravity = 0;
const windStrength = 0.03;
let font;

function preload() {
  font = loadFont('sfpro.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(128);
  background(255, 244, 242);
  for (let i = 0; i < leafCount; i++) {
    leaves.push(new Leaf());
  }
}

function draw() {
  background(255, 244, 242);

  for (let leaf of leaves) {
    leaf.update();
    leaf.display();
  }


  const now = new Date();

  
  let hh = now.getHours();
  let mm = now.getMinutes();
  // uncomment for 12h time
  // const ampm = hh >= 12 ? 'PM' : 'AM';
  // hh = hh % 12 || 12;
  hh = nf(hh, 2);
  mm = nf(mm, 2);
  const timeString = `${hh}:${mm}`; // + ` ${ampm}` for AM/PM


  const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months   = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const weekday  = weekdays[now.getDay()];
  const day      = now.getDate();
  const month    = months[now.getMonth()];
  const year     = now.getFullYear();
  const dateString = `${weekday}, ${day} ${month} ${year}`;

  document.getElementById('time').textContent = `${timeString}`;
  document.getElementById('date').textContent = `${dateString}`;

  //textSize(128);
  //text(timeString, 40, 160);
  //textSize(36);
  //text(dateString, 60, 220);
}

class Leaf {
  constructor() {
    this.reset();
  }
  reset() {
    this.x     = random(0, width);
    this.y     = random(-height, 0);
    this.vx    = random(-0.5, 0.5);
    this.vy    = random(0.5, 2);
    this.angle = random(TWO_PI);
    this.vang  = random(-0.02, 0.02);
    this.col   = color(random(180, 255), random(100, 200), random(50, 100));
  }
  update() {
    this.vy += gravity;
    this.vx += random(-windStrength, windStrength);
    this.x  += this.vx;
    this.y  += this.vy;
    this.angle += this.vang;
    if (this.y > height + 20) this.reset();
    if (this.x < -20)         this.x = width + 20;
    if (this.x > width + 20)  this.x = -20;
  }
  display() {
    push();
      translate(this.x, this.y);
      rotate(this.angle);
      stroke('brown');
      strokeWeight(4);
      line(0, 0, 25, 0);
      strokeWeight(18);
      stroke(this.col);
      line(25, 0, 55, 0);
      line(25, 0, 45, 20);
      line(25, 0, 45, -20);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
