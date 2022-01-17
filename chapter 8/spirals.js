
var angle = 0.0;
var offset = 240;
var scalar = 2;
var speed = 0.10;

function setup(){
    createCanvas(480, 480);
    fill(0);
    background(204);
}

function draw(){
    var x = offset + cos(angle)* scalar;
    var y = offset + sin(angle)* scalar;
    ellipse(x, y, 2, 2);
    angle += speed;
    scalar += speed;
}