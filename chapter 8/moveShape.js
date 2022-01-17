
var radius = 80;
var x = -radius;
var speed = 2.5;

function setup(){
    createCanvas(480, 240);
    ellipseMode(RADIUS);
}

function draw(){
    background(0);
    x += speed; //increasing value of x
    if (x > width + radius){
        x = -radius;
    }
    arc(x, 120, radius, radius, 0.52, 5.76);
}