var radius = 80;
var x = 110;
var speed = 2.5;
var direction = 1;

function setup(){
    createCanvas(480, 240);
    ellipseMode(RADIUS);
}

function draw(){
    background(0);
    x += speed * direction;
    if(x > width - radius || x < radius){
        direction = -direction; // flip direction
    }
    if (direction == 1){
        arc(x, 120, radius, radius, 0.52, 5.76); //face right
    }else{
        arc(x, 120, radius, radius, 3.67, 8.9); //face left
    }
}