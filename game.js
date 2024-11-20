let x = 0;
let y = 0;
let s = 0.3;
//nest scale
let n = 1.0;

//let nx = 100;
//let ny = 100;

let nx = 150;
let ny = 300;

//mountain specs
let mx = 0;
let my = 0;
let ms = 1.0;

//character coords
let characterX = 400;
let characterY = 100;

let velocityY = 0.4;
let acceleration = 0.1;
//let velocityY = 0;
//let acceleration = 0;
let velocityX = 0;

//clouds coords
let cloud1X = 50;
let cloud1Y = 430;
let cloud1S = 0.7;

let cloud2X = 450;
let cloud2Y = 600;

let cloud3X = 700;
let cloud3Y = 290;

let cloud4X = 150;
let cloud4Y = 150;
//canvas
function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
}

//Start Screen
function startScreen() {
  pregameBackground();
  startElements();
}

// start screen
function pregameBackground(x, y) {
  //clouds
  push();
  background(70, 206, 235);
  cloud1(cloud1X, cloud1Y, cloud1S);
  cloud2(cloud2X, cloud2Y);
  cloud3(cloud3X, cloud3Y);
  cloud4(cloud4X, cloud4Y);
  pop();
}

function startElements() {
  push();
  fill(150, 40, 0);
  stroke(0, 0, 0);
  strokeWeight(3);
  rect(360, 350, 170, 65, 15);
  rect(150, 350, 170, 65, 15);
  fill(255, 255, 0);
  rect(158, 358, 154, 49, 10);
  rect(368, 358, 154, 49, 10);
  fill(0, 0, 0);
  strokeWeight(1);
  textSize(35);
  text("PLAY", 190, 395);
  text("RULES", 385, 395);
  textSize(100);
  text("Birdie", 200, 285);
  pop();
}

//cloud1
function cloud1(cloud1X, cloud1Y) {
  push();
  background(70, 206, 235);
  fill(255, 255, 255);
  noStroke();
  circle(cloud1X, cloud1Y, 60 * cloud1S);
  ellipse(
    cloud1X + 112 * cloud1S,
    cloud1Y + 17 * cloud1S,
    270 * cloud1S,
    50 * cloud1S
  );
  ellipse(
    cloud1X + 60 * cloud1S,
    cloud1Y - 25 * cloud1S,
    100 * cloud1S,
    60 * cloud1S
  );
  circle(cloud1X + 130 * cloud1S, cloud1Y - 17 * cloud1S, 110 * cloud1S);
  circle(cloud1X + 195 * cloud1S, cloud1Y, 60 * cloud1S);
  pop();
}
//cloud2
function cloud2() {
  push();
  noStroke();
  fill(255, 255, 255);
  ellipse(cloud2X - 10, cloud2Y, 60, 40);
  circle(cloud2X + 20, cloud2Y - 20, 50);
  circle(cloud2X + 50, cloud2Y - 35, 44);
  circle(cloud2X + 60, cloud2Y - 65, 40);
  circle(cloud2X + 105, cloud2Y - 80, 80);
  circle(cloud2X + 130, cloud2Y - 120, 50);
  circle(cloud2X + 160, cloud2Y - 135, 35);
  circle(cloud2X + 115, cloud2Y - 35, 100);
  ellipse(cloud2X + 40, cloud2Y - 15, 100, 40);
  circle(cloud2X + 160, cloud2Y - 20, 70);
  circle(cloud2X + 130, cloud2Y - 100, 50);
  ellipse(cloud2X - 40, cloud2Y - 15, 40, 30);
  circle(cloud2X + 200, cloud2Y - 20, 45);
  ellipse(cloud2X + 220, cloud2Y - 20, 45, 30);
  ellipse(cloud2X + 200, cloud2Y - 120, 30, 10);
  ellipse(cloud2X, cloud2Y - 80, 30, 10);
  pop();
}
//cloud3
function cloud3() {
  push();
  fill(255, 255, 255);
  noStroke();

  ellipse(cloud3X, cloud3Y, 80, 40);
  ellipse(cloud3X + 55, cloud3Y + 10, 90, 50);
  ellipse(cloud3X + 70, cloud3Y - 15, 100, 60);
  ellipse(cloud3X + 80, cloud3Y - 45, 60, 40);
  ellipse(cloud3X + 135, cloud3Y - 10, 60, 40);
  ellipse(cloud3X + 155, cloud3Y - 0, 100, 30);
  ellipse(cloud3X + 125, cloud3Y + 10, 60, 40);
  ellipse(cloud3X + 145, cloud3Y + 29, 50, 20);
  ellipse(cloud3X + 155, cloud3Y - 49, 40, 10);
  ellipse(cloud3X + 100, cloud3Y + 20, 50, 20);
  pop();
}
//cloud4
function cloud4() {
  push();
  fill(255, 255, 255);
  noStroke();
  ellipse(cloud4X - 5, cloud4Y + 5, 70, 30);
  ellipse(cloud4X + 50, cloud4Y - 10, 90, 30);
  ellipse(cloud4X + 170, cloud4Y - 10, 90, 30);
  ellipse(cloud4X + 100, cloud4Y - 20, 130, 30);
  ellipse(cloud4X + 70, cloud4Y, 130, 30);
  ellipse(cloud4X + 220, cloud4Y - 20, 90, 20);
  ellipse(cloud4X + 300, cloud4Y - 20, 60, 10);
  ellipse(cloud4X + 360, cloud4Y - 20, 40, 5);
  ellipse(cloud4X + 190, cloud4Y + 15, 50, 5);
  ellipse(cloud4X + 50, cloud4Y + 25, 50, 5);
  pop();
}
//WIN
function winScreen() {
  background(100, 255, 100);
  push();
  stroke(30, 120, 30);
  strokeWeight(80);
  noFill();
  square(0, 0, 700, 70);
  strokeWeight(1);
  textSize(80);
  //fill(30,120,30);
  fill(0, 0, 0);
  text("Success!", 180, 300);
  noFill();
  strokeWeight(8);
  rect(162, 420, 154, 49, 10);
  rect(372, 420, 154, 49, 10);
  strokeWeight(1);
  fill(0, 0, 0);
  textSize(25);
  text("Play Again", 180, 454);
  text("Main Menu", 387, 454);
  pop();
}

//rules
function ruleScreen() {
  pregameBackground();
  push();
  strokeWeight(35);
  stroke(100, 40, 0);
  fill(230, 160, 50);
  square(130, 130, 440, 40);
  fill(100, 40, 0);
  strokeWeight(1);
  textSize(50);
  text("Rules", 287, 210);
  strokeWeight(0.5);
  textSize(20);
  text(
    "This game consists of an eagle that needs to land on its nest at a slow speed so it doesnt crash while avoiding the hazardous mountain it is on. ",
    175,
    255,
    350,
    500
  );
  text("Controls", 175, 400);
  textSize(18);
  text("'SPACEBAR' = gives a lift upwards. ", 175, 430);
  text("'A' = gives a boost to the left. ", 175, 460);
  text("'D' = gives a boost to the right. ", 175, 490);
  strokeWeight(7);
  fill(255, 30, 30);

  square(505, 165, 30, 5);
  strokeWeight(3);
  line(513, 173, 527, 187);
  line(513, 187, 527, 173);
  if (
    state === "rules" &&
    mouseX > 503 &&
    mouseX < 537 &&
    mouseY > 164 &&
    mouseY < 198 &&
    mouseIsPressed === true
  ) {
    state = "start";
  }

  pop();
}

//cliffs
function mountains(mx, my, ms) {
  background(70, 206, 235);
  fill(150, 160, 160);
  push();
  strokeWeight(3);
  push();
  fill(100, 100, 100);
  quad(180, 292, 214, 322, 79, 329, 83, 284);
  pop();
  quad(
    mx + 140,
    my + 705,
    mx + 140,
    my + 450,
    mx + 240,
    my + 470,
    mx + 250,
    my + 705
  );
  quad(
    mx + 250,
    my + 705,
    mx + 240,
    my + 470,
    mx + 250,
    my + 480,
    mx + 260,
    my + 750
  );
  quad(65, 320, 215, 320, 157, 700, 65, 700);
  quad(
    mx - 5,
    my + 160,
    mx + 110,
    my + 140,
    mx + 75,
    my + 705,
    mx - 5,
    my + 710
  );
  quad(
    mx + 40,
    my + 350,
    mx + 90,
    my + 355,
    mx + 126,
    my + 705,
    mx - 40,
    my + 705
  );
  quad(
    mx + 90,
    my + 355,
    mx + 110,
    my + 370,
    mx + 145,
    my + 705,
    mx + 126,
    my + 705
  );
  quad(
    mx + 388,
    my + 622,
    mx + 400,
    my + 510,
    mx + 470,
    my + 510,
    mx + 482,
    my + 622
  );
  fill(100, 100, 100);

  square(mx + 285, mx + 585, 150);
  fill(150, 160, 160);
  square(mx + 285, mx + 600, 150);
  quad(
    mx + 200,
    my + 705,
    mx + 220,
    my + 540,
    mx + 300,
    my + 540,
    mx + 320,
    my + 705
  );

  quad(
    mx + 635,
    my + 580,
    mx + 645,
    my + 425,
    mx + 705,
    my + 400,
    mx + 705,
    my + 705
  );
  fill(100, 100, 100);

  quad(
    mx + 590,
    my + 552,
    mx + 576,
    my + 548,
    mx + 705,
    my + 488,
    mx + 705,
    my + 500
  );
  fill(150, 160, 160);

  quad(
    mx + 575,
    my + 550,
    mx + 670,
    my + 550,
    mx + 600,
    my + 690,
    mx + 565,
    my + 680
  );

  quad(
    mx + 630,
    my + 705,
    mx + 590,
    my + 550,
    mx + 705,
    my + 500,
    mx + 705,
    my + 705
  );

  square(500, 637, 170);
  quad(
    mx + 405,
    my + 705,
    mx + 425,
    my + 564,
    mx + 530,
    my + 556,
    mx + 540,
    my + 705
  );
  pop();
}

//nest
function nest(nx, ny, n) {
  push();
  fill(218, 140, 11);
  noStroke();
  ellipse(nx, ny, 100 * n, 60 * n);
  strokeWeight(20 * n);
  stroke(164 * n, 100 * n, 19 * n);
  arc(nx, ny, 80 * n, 40 * n, 180, 0);
  stroke(181, 116, 9);
  strokeWeight(20 * n);
  arc(nx, ny, 80 * n, 40 * n, -10, 190);
  stroke(0, 0, 0);
  fill(0, 0, 0);
  noStroke();
  circle(characterX, characterY, 10);
  pop();
}
//eagle
function eagle(x, y, s) {
  //claws
  push();
  stroke(250, 170, 100);
  strokeWeight(8 * s);
  line(x + 64 * s, y + 155 * s, x + 51 * s, y + 178 * s);
  noFill();
  arc(x + 47 * s, y + 187 * s, 30 * s, 20 * s, 200, -25);
  stroke(240, 200, 70);
  line(x + 75 * s, y + 170 * s, x + 64 * s, y + 194 * s);
  arc(x + 60 * s, y + 204 * s, 30 * s, 20 * s, 200, -25);
  pop();

  //color
  //body color
  push();
  fill(60, 25, 0);
  noStroke();
  circle(x + 83 * s, y + 110 * s, 40 * s);
  triangle(
    x + 62 * s,
    y + 113 * s,
    x + 88 * s,
    y + 130 * s,
    x + 60 * s,
    y + 163 * s
  );
  //translate(30,30);
  quad(
    x + 55 * s,
    y + 158 * s,
    x + 66 * s,
    y + 142 * s,
    x + 82 * s,
    y + 148 * s,
    x + 73 * s,
    y + 169 * s
  );
  pop();

  push();
  stroke(150, 45, 0);
  fill(150, 45, 0);
  triangle(
    x + 107 * s,
    y - 8 * s,
    x + 43 * s,
    y + 54 * s,
    x + 38 * s,
    y - 45 * s
  );
  pop();

  push();
  stroke(100, 45, 0);
  fill(150, 45, 0);
  quad(
    x + 76 * s,
    y + 87 * s,
    x + 135 * s,
    y + 80 * s,
    x + 159 * s,
    y + 117 * s,
    x + 83 * s,
    y + 111 * s
  );
  push();
  stroke(150, 45, 0);
  quad(
    x + 75 * s,
    y + 89 * s,
    x + 44 * s,
    y + 48 * s,
    x + 135 * s,
    y - 43 * s,
    x + 136 * s,
    y + 80 * s
  );
  pop();

  //legs color
  stroke(100, 40, 0);
  fill(100, 40, 0);
  quad(
    x + 106 * s,
    y + 85 * s,
    x + 133 * s,
    y + 99 * s,
    x + 78 * s,
    y + 175 * s,
    x + 66 * s,
    y + 171 * s
  );
  pop();

  //wings
  //behind

  push();
  strokeWeight(3);
  stroke(130, 35, 0);
  fill(130, 35, 0);
  triangle(
    x + 41 * s,
    y + 45 * s,
    x + 81 * s,
    y - 22 * s,
    x - 111 * s,
    y - 160 * s
  );
  push();
  stroke(0, 0, 0);
  strokeWeight(3);
  translate(x - 20 * s, y - 46 * s);
  fill(130, 35, 0);
  rotate(-129);
  arc(0, 0, 300 * s, 165 * s, 184, 0);
  pop();

  push();
  strokeWeight(20);
  stroke(90, 40, 0);
  fill(90, 45, 0);
  translate(x - 20 * s, y - 90 * s);
  rotate(-55);
  arc(0, 0, 40 * s, 250 * s, -87, -270);
  pop();
  //color

  pop();
  push();
  stroke(150, 45, 0);
  fill(150, 45, 0);
  triangle(
    x + 107 * s,
    y - 8 * s,
    x + 45 * s,
    y + 54 * s,
    x + 34 * s,
    y - 25 * s
  );
  pop();

  //front
  push();
  fill(150, 45, 0);
  stroke(150, 45, 0);
  quad(
    x + 204 * s,
    y - 91 * s,
    x + 291 * s,
    y - 151 * s,
    x + 136 * s,
    y + 39 * s,
    x + 130 * s,
    y
  );
  pop();

  push();
  fill(150, 45, 0);
  strokeWeight(3 * s);
  translate(x + 155 * s, y - 25 * s);
  rotate(-35);
  arc(0, 0, 180 * s, 50 * s, 200, 320);
  pop();

  push();
  fill(150, 45, 0);
  stroke(120, 40, 0);
  strokeWeight(25 * s);
  translate(x + 177 * s, y - 35 * s);
  rotate(-50);
  arc(0, 0, 170 * s, 50 * s, 190, 345);
  pop();

  push();
  fill(150, 45, 0);
  strokeWeight(3);
  translate(x + 235 * s, y - 85 * s);
  rotate(-50);
  arc(0, 0, 350 * s, 200 * s, 0, 180);
  pop();

  push();
  noFill();
  stroke(120, 40, 0);
  strokeWeight(25 * s);

  translate(x + 240 * s, y - 189 * s);
  rotate(-40);
  arc(0, 0, 320 * s, 120 * s, 25, 150);
  pop();
  //

  //tail
  strokeWeight(3 * s);
  push();
  fill(255, 255, 255);
  beginShape();
  vertex(x + 145 * s, y + 88 * s);
  bezierVertex(
    x + 258 * s,
    y + 33 * s,
    x + 274 * s,
    y + 105 * s,
    x + 145 * s,
    y + 95 * s
  );
  endShape();
  beginShape();
  vertex(x + 144 * s, y + 91 * s);
  bezierVertex(
    x + 284 * s,
    y + 65 * s,
    x + 284 * s,
    y + 145 * s,
    x + 141 * s,
    y + 100 * s
  );
  endShape();
  beginShape();
  vertex(x + 144 * s, y + 99 * s);
  bezierVertex(
    x + 296 * s,
    y + 85 * s,
    x + 296 * s,
    y + 185 * s,
    x + 140 * s,
    y + 105 * s
  );
  endShape();
  beginShape();
  vertex(x + 142 * s, y + 105 * s);
  bezierVertex(
    x + 290 * s,
    y + 110 * s,
    x + 280 * s,
    y + 205 * s,
    x + 140 * s,
    y + 110 * s
  );
  endShape();
  beginShape();
  vertex(x + 140 * s, y + 112 * s);
  bezierVertex(
    x + 268 * s,
    y + 135 * s,
    x + 238 * s,
    y + 200 * s,
    x + 134 * s,
    y + 111 * s
  );
  endShape();
  pop();
  //brown part
  push();
  strokeWeight(3 * s);
  fill(150, 45, 0);
  push();
  translate(x + 141 * s, y + 95 * s);
  rotate(-10);
  arc(0, 0, 60 * s, 11 * s, -90, -270);
  pop();
  push();
  translate(x + 140 * s, y + 103 * s);
  rotate(5);
  arc(0, 0, 60 * s, 11 * s, -90, -270);
  pop();
  push();
  translate(x + 138 * s, y + 108 * s);
  rotate(20);
  arc(0, 0, 60 * s, 11 * s, -90, -270);
  pop();
  pop();
  //body
  push();
  strokeWeight(3 * s);
  noFill();
  beginShape();
  vertex(x + 41 * s, y + 29 * s);
  bezierVertex(
    x + 40 * s,
    y + 72 * s,
    x + 80 * s,
    y + 70 * s,
    x + 80 * s,
    y + 110 * s
  );
  endShape();
  pop();

  push();
  strokeWeight(3 * s);
  noFill();
  translate(x + 140 * s, y + 74 * s);
  rotate(-12);
  arc(0, 0, 10 * s, 30 * s, 90, 270);
  pop();

  //legs
  //front leg
  push();
  strokeWeight(3 * s);
  fill(100, 40, 0);
  beginShape();
  vertex(x + 107 * s, y + 86 * s);
  bezierVertex(
    x + 72 * s,
    y + 86 * s,
    x + 77 * s,
    y + 163 * s,
    x + 67 * s,
    y + 168 * s
  );
  endShape();
  pop();
  push();
  strokeWeight(3 * s);
  fill(100, 45, 0);
  beginShape();
  vertex(x + 133 * s, y + 96 * s);
  bezierVertex(
    x + 136 * s,
    y + 135 * s,
    x + 86 * s,
    y + 149 * s,
    x + 79 * s,
    y + 174 * s
  );
  endShape();
  pop();
  push();
  fill(100, 40, 0);
  translate(x + 110 * s, y + 99 * s);
  rotate(8);
  arc(0, 0, 50 * s, 25 * s, 250, 343);
  pop();

  //back leg
  push();
  strokeWeight(3 * s);
  noFill();
  beginShape();
  vertex(x + 75 * s, y + 90 * s);
  bezierVertex(
    x + 50 * s,
    y + 105 * s,
    x + 70 * s,
    y + 144 * s,
    x + 55 * s,
    y + 156 * s
  );
  endShape();
  pop();
  //beak
  push();
  //color behind beak
  noStroke();
  fill(255, 255, 255);
  quad(
    x - 29 * s,
    y,
    x + 57 * s,
    y - 6 * s,
    x + 53 * s,
    y + 17 * s,
    x - 21 * s,
    y + 34 * s
  );
  strokeWeight(4);
  stroke(255, 255, 255);
  line(x - 20 * s, y + 30 * s, x - 6 * s, y + 25 * s);
  pop();
  push();
  strokeWeight(2 * s);
  fill(255, 255, 0);
  triangle(
    x - 49 * s,
    y + 42 * s,
    x - 38 * s,
    y + 46 * s,
    x - 47 * s,
    y + 36 * s
  );
  translate(x - 8 * s, y + 30 * s);
  rotate(-1);
  arc(0, 0, 100 * s, 40 * s, 165, -140);
  line(-30 * s, 16 * s, -38.5 * s, 6 * s);
  line(-37 * s, 8 * s, -16 * s, 1 * s);
  pop();

  strokeWeight(2 * s);
  line(x - 47 * s, y + 36 * s, x - 13 * s, y + 24 * s);
  push();
  translate(x - 22 * s, y + 14.5 * s);
  rotate(-15);
  fill(255, 255, 255);
  arc(0, 0, 45 * s, 20 * s, 60, -144);
  pop();
  //white stripe under beak
  push();
  strokeWeight(4 * s);
  stroke(255, 255, 255);
  line(x - 20 * s, y + 30 * s, x - 6 * s, y + 25 * s);
  pop();

  push();
  stroke(255, 255, 255);
  fill(255, 255, 255);
  quad(
    x + 7 * s,
    y,
    x + 58 * s,
    y - 3 * s,
    x + 50 * s,
    y + 28 * s,
    x + 21 * s,
    y + 25 * s
  );
  pop();
  //head
  push();
  translate(x + 35 * s, y + 6.5 * s);
  rotate(-5);
  strokeWeight(3 * s);
  fill(255, 255, 255);
  arc(0, 0, 150 * s, 60 * s, 178, -12);
  pop();
  push();
  strokeWeight(1 * s);
  translate(x + 55 * s, y + 3 * s);
  rotate(20);
  arc(0, 0, 15 * s, 53 * s, -90, -270);
  pop();

  push();
  strokeWeight(3 * s);
  translate(x - 20 * s, y + 30 * s);
  fill(255, 255, 255);
  arc(0, 0, 8 * s, 5 * s, 80, 190);
  pop();
  push();
  strokeWeight(3 * s);
  line(x - 20 * s, y + 32.5 * s, x + 10 * s, y + 26 * s);
  line(x + 10 * s, y + 26 * s, x + 60 * s, y + 28 * s);
  pop();

  //color behind feathers
  push();
  fill(150, 45, 0);
  stroke(0, 0, 0);
  translate(x + 35 * s, y + 6.5 * s);
  rotate(-5);
  strokeWeight(3 * s);
  arc(0, 0, 150 * s, 60 * s, -40, -11);
  pop();
  //feathers of head

  push();
  fill(255, 255, 255);
  push();
  stroke(255, 255, 255);
  square(x + 32 * s, y - 10 * s, 20 * s);
  pop();
  push();
  translate(x + 51 * s, y + 7 * s);
  rotate(10);
  arc(0, 0, 40 * s, 10 * s, -90, -270);
  pop();

  push();
  translate(x + 51 * s, y + 17 * s);
  rotate(16);
  arc(0, 0, 40 * s, 10 * s, -90, -270);
  pop();
  push();
  translate(x + 46 * s, y + 23 * s);
  rotate(22);
  arc(0, 0, 40 * s, 10 * s, -90, -270);
  pop();
  arc(x + 51 * s, y - 12 * s, 40 * s, 10 * s, -90, -270);
  arc(x + 51 * s, y - 2 * s, 40 * s, 10 * s, -90, -270);
  pop();

  push();
  fill(255, 255, 255);
  translate(x + 51 * s, y - 20 * s);
  rotate(-14);
  arc(0, 0, 40 * s, 10 * s, -90, -270);
  pop();

  //color

  //eye
  push();
  translate(x - 20 * s, y + 6 * s);
  rotate(-20);
  fill(255, 255, 255);
  arc(0, 0, 25 * s, 17 * s, 0, 180);
  fill(222, 194, 49);
  circle(0, 0, 17 * s);
  fill(0, 0, 0);
  noStroke();
  circle(-2 * s, 0, 10 * s);
  pop();

  push();
  translate(x - 20 * s, y + 11 * s);
  rotate(-200);
  strokeWeight(3 * s);
  noFill();
  arc(0, 0, 45 * s, 15 * s, 15, 170);
  pop();

  push();
  stroke(255, 255, 255);
  translate(x - 13.5 * s, y + 5 * s);
  rotate(-186);
  strokeWeight(6 * s);
  noFill();
  arc(0, 0, 40 * s, 15 * s, 15, 170);
  pop();

  //wing feathers

  fill(100, 40, 0);
  push();
  translate(x + 350 * s, y - 212 * s);
  rotate(-60);
  arc(0, 0, 170 * s, 20 * s, -140, -250);
  pop();
  push();
  translate(x + 350 * s, y - 200 * s);
  rotate(-40);
  arc(0, 0, 170 * s, 20 * s, -140, -250);
  pop();
  push();
  translate(x + 350 * s, y - 200 * s);
  rotate(-20);
  arc(0, 0, 170 * s, 20 * s, -140, -250);
  pop();
  push();
  translate(x + 350 * s, y - 185 * s);
  rotate(-15);
  arc(0, 0, 170 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x + 350 * s, y - 170 * s);
  rotate(-10);
  arc(0, 0, 170 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x + 350 * s, y - 150 * s);
  rotate(-7);
  arc(0, 0, 170 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x + 350 * s, y - 130 * s);
  rotate(0);
  arc(0, 0, 170 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x + 340 * s, y - 115 * s);
  rotate(7);
  arc(0, 0, 170 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x + 340 * s, y - 93 * s);
  rotate(7);
  arc(0, 0, 170 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x + 335 * s, y - 72 * s);
  rotate(10);
  arc(0, 0, 170 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x + 325 * s, y - 55 * s);
  rotate(18);
  arc(0, 0, 160 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x + 315 * s, y - 34 * s);
  rotate(22);
  arc(0, 0, 150 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x + 300 * s, y - 18 * s);
  rotate(32);
  arc(0, 0, 130 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x + 285 * s, y - 5 * s);
  rotate(32);
  arc(0, 0, 110 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x + 275 * s, y + 5 * s);
  rotate(40);
  arc(0, 0, 110 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x + 258 * s, y + 20 * s);
  rotate(44);
  arc(0, 0, 100 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x + 240 * s, y + 35 * s);
  rotate(48);
  arc(0, 0, 80 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x + 220 * s, y + 46 * s);
  rotate(54);
  arc(0, 0, 70 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x + 200 * s, y + 54 * s);
  rotate(60);
  arc(0, 0, 70 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x + 180 * s, y + 58 * s);
  rotate(75);
  arc(0, 0, 70 * s, 20 * s, -100, -250);
  pop();
  //left wing

  push();
  translate(x + 30 * s, y + 75 * s);
  rotate(88);
  arc(0, 0, 70 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x + 10 * s, y + 70 * s);
  rotate(100);
  arc(0, 0, 70 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x - 10 * s, y + 60 * s);
  rotate(110);
  arc(0, 0, 70 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x - 30 * s, y + 50 * s);
  rotate(120);
  arc(0, 0, 85 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x - 50 * s, y + 43 * s);
  rotate(120);
  arc(0, 0, 90 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x - 66 * s, y + 22 * s);
  rotate(130);
  arc(0, 0, 100 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x - 80 * s, y + 5 * s);
  rotate(140);
  arc(0, 0, 120 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x - 90 * s, y - 10 * s);
  rotate(150);
  arc(0, 0, 120 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x - 103 * s, y - 28 * s);
  rotate(150);
  arc(0, 0, 140 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x - 110 * s, y - 45 * s);
  rotate(160);
  arc(0, 0, 150 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x - 120 * s, y - 65 * s);
  rotate(165);
  arc(0, 0, 150 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x - 125 * s, y - 86 * s);
  rotate(175);
  arc(0, 0, 160 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x - 125 * s, y - 108 * s);
  rotate(180);
  arc(0, 0, 160 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x - 125 * s, y - 128 * s);
  rotate(190);
  arc(0, 0, 160 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x - 118 * s, y - 150 * s);
  rotate(200);
  arc(0, 0, 180 * s, 20 * s, -100, -250);
  pop();
  push();
  translate(x - 108 * s, y - 163 * s);
  rotate(210);
  arc(0, 0, 200 * s, 20 * s, -100, -250);
  pop();
}
//game screen
function game() {
  mountains(mx, my, ms);
  nest(nx, ny, n);
  eagle(characterX, characterY, s);
}
//loss Screen
function lossScreen() {
  push();
  background(255, 0, 0);
  textSize(80);
  fill(0, 0, 0);
  text("Game Over", 140, 350);
  fill(150, 40, 0);
  stroke(0, 0, 0);
  strokeWeight(3);

  fill(0, 0, 0);

  rect(162, 420, 154, 49, 10);
  rect(372, 420, 154, 49, 10);
  fill(0, 0, 0);
  strokeWeight(1);
  textSize(25);
  fill(255, 0, 0);
  text("Play Again", 180, 454);
  text("Main Menu", 387, 454);
  pop();
}
let gameState = false;
let state = "start";
// mechanichs
function draw() {
  frameRate(60);
  //states
  if (state === "game") {
    game();
  }
  if (state === "lost") {
    lossScreen();
  }
  if (state === "start") {
    startScreen();
  }
  if (state === "rules") {
    ruleScreen();
  }
  if (state === "win") {
    winScreen();
  }

  //start game button
  if (
    state === "start" &&
    mouseX > 150 &&
    mouseX < 320 &&
    mouseY > 350 &&
    mouseY < 416 &&
    mouseIsPressed === true
  ) {
    state = "game";
  }
  //rules button
  if (
    state === "start" &&
    mouseX > 360 &&
    mouseX < 530 &&
    mouseY > 350 &&
    mouseY < 416 &&
    mouseIsPressed === true
  ) {
    state = "rules";
  }
  //try again button lost
  if (
    state === "lost" &&
    mouseX > 162 &&
    mouseX < 316 &&
    mouseY > 420 &&
    mouseY < 469 &&
    mouseIsPressed === true
  ) {
    state = "game";
  }
  //try again button win
  if (
    state === "win" &&
    mouseX > 162 &&
    mouseX < 316 &&
    mouseY > 420 &&
    mouseY < 469 &&
    mouseIsPressed === true
  ) {
    state = "game";
  }
  //back to main menu from loss screen
  if (
    state === "lost" &&
    mouseX > 372 &&
    mouseX < 526 &&
    mouseY > 420 &&
    mouseY < 469 &&
    mouseIsPressed === true
  ) {
    state = "start";
  }
  //back to main menu from win screen
  if (
    state === "win" &&
    mouseX > 372 &&
    mouseX < 526 &&
    mouseY > 420 &&
    mouseY < 469 &&
    mouseIsPressed === true
  ) {
    state = "start";
  }

  //clouds move
  if (state === "start") {
    velocityY = 0;
    cloud1X = cloud1X - 0.4;
    cloud2X = cloud2X - 0.4;
    cloud3X = cloud3X - 0.45;
    cloud4X = cloud4X - 0.4;
    if (cloud1X < -230) {
      cloud1X = 750;
    }
    if (cloud2X < -270) {
      cloud2X = 800;
    }
    if (cloud3X < -230) {
      cloud3X = 750;
    }
    if (cloud4X < -400) {
      cloud4X = 800;
    }
  }
  if (state === "rules") {
    velocityY = 0;
    cloud1X = cloud1X - 0.4;
    cloud2X = cloud2X - 0.4;
    cloud3X = cloud3X - 0.45;
    cloud4X = cloud4X - 0.4;
    if (cloud1X < -230) {
      cloud1X = 750;
    }
    if (cloud2X < -270) {
      cloud2X = 800;
    }
    if (cloud3X < -230) {
      cloud3X = 750;
    }
    if (cloud4X < -400) {
      cloud4X = 800;
    }
  }

  //gravity settings
  if (state === "game") {
    gameState = true;
  }
  if (gameState === true) {
    characterY = characterY + velocityY;
    velocityY = velocityY + acceleration;
    // console.log(velocityY);
  }

  //left and right movement
  characterX = characterX + velocityX;
  //game lose
  // if (characterY + 182 * s > 700) {
  //   state = "lost";
  //   console.log("gg");
  //   gameState = false;
  //   velocityX = 0;
  //   velocityY = 0.2;
  //   characterX = 600;
  //   characterY = 1;
  // }

  //
  //
  //
  //loss by mountains
  if (characterY + 182 * s > 640) {
    state = "lost";
    console.log("gg");
    gameState = false;
    velocityX = 0;
    velocityY = 0.4;
    characterX = 600;
    characterY = 1;
  }
  //mountain second lowest mountain
  if (characterY + 182 * s > 584 && characterX < 530) {
    state = "lost";
    console.log("gg");
    gameState = false;
    velocityX = 0;
    velocityY = 0.4;
    characterX = 600;
    characterY = 1;
  }

  //mountain on far left
  if (characterX < 107 && characterY + 150 * s > 150) {
    state = "lost";
    console.log("gg");
    gameState = false;
    velocityX = 0;
    velocityY = 0.4;
    characterX = 600;
    characterY = 1;
  }
  //mountain holding the nest
  if (characterX < 205 && characterY + 182 * s > 335) {
    state = "lost";
    console.log("gg");
    gameState = false;
    velocityX = 0;
    velocityY = 0.4;
    characterX = 600;
    characterY = 1;
  }

  //third mountain from the left
  if (characterX + 10 < 246 && characterY + 182 * s > 472) {
    state = "lost";
    console.log("gg");
    gameState = false;
    velocityX = 0;
    velocityY = 0.4;
    characterX = 600;
    characterY = 1;
  }
  //fourth mountine from the left
  if (characterX + 10 < 300 && characterY + 182 * s > 543) {
    state = "lost";
    console.log("gg");
    gameState = false;
    velocityX = 0;
    velocityY = 0.4;
    characterX = 600;
    characterY = 1;
  }
  //second to last mountain
  if (characterX + 70 * s > 580 && characterY + 182 * s > 547) {
    state = "lost";
    console.log("gg");
    gameState = false;
    velocityX = 0;
    velocityY = 0.4;
    characterX = 600;
    characterY = 1;
  }
  //last mountain
  if (characterX + 70 * s > 645 && characterY + 182 * s > 424) {
    state = "lost";
    console.log("gg");
    gameState = false;
    velocityX = 0;
    velocityY = 0.4;
    characterX = 600;
    characterY = 1;
  }
  //
  //
  //
  //
  //
  //loss by hitting hard the nest
  if (
    characterX + 70 * s > nx - 30 &&
    characterX + 70 * s < nx + 30 &&
    characterY + 182 * s > ny - 5 &&
    characterY + 182 * s < ny + 5 &&
    velocityY > 4
  ) {
    state = "lost";
    console.log("gg");
    gameState = false;
    velocityX = 0;
    velocityY = 0.4;
    characterX = 600;
    characterY = 1;
  }
  //game win
  if (
    characterX + 70 * s > nx - 30 &&
    characterX + 70 * s < nx + 30 &&
    characterY + 182 * s > ny - 5 &&
    characterY + 182 * s < ny + 5 &&
    velocityY < 4
  ) {
    state = "win";
    console.log("gg");
    gameState = false;
    velocityX = 0;
    velocityY = 0.4;
    characterX = 600;
    characterY = 1;
  }
}
//controls
function keyTyped() {
  if (gameState === true) {
    if (keyIsDown(32)) {
      velocityY = -3;
    }
    if (key === "a") {
      velocityX += -1.5;
    }
    if (key === "d") {
      velocityX += +1.5;
    }
  }
}
