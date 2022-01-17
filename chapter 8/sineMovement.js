
var angle = 0.0;
var offset = 200;
var scalar = 80;
var speed = 0.05;

function setup(){
    createCanvas(480, 480);
}

function draw(){
    background(0);
    var y = offset + sin(angle) *scalar;
    var y2 = offset + sin(angle + 0.4) *scalar;
    var y3 = offset + sin(angle + 0.8) *scalar;
    ellipse(120, y, 80, 80);
    ellipse(240, y2, 80, 80);
    ellipse(360, y3, 80, 80);
    angle += speed;
}

