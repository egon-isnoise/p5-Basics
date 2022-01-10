var x = 240;
var y = 240;
var radius = 12;

function setup(){
    createCanvas(480, 480);
    ellipseMode(RADIUS);
}

function draw(){
    background(204);
    var d = dist(mouseX, mouseY, x, y);

    if (d < radius){
        radius ++;
        fill(0);
    } else {
        fill(255);
    }
    ellipse(x, y, radius, radius);
}