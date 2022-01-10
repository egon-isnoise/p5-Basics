var x = 160;
var y = 180;
var w = 160;
var h = 120;

function setup(){
    createCanvas(480, 480);
}

function draw(){
    background(204);
    if((mouseX > x) && (mouseX < x + w) && 
    (mouseY > y) && (mouseY < y + h)){
        fill(0);
    } else {
        fill(255);
    }
    rect(x, y, w, h);
}