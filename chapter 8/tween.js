
var startX = 80;
var stopX = 320;
var startY = 60;
var stopY = 160;
var x = startX;
var y = startY;
var step = 0.005;
var pct = 0.0;
var direction = 1;

function setup(){
    createCanvas(480, 240);
}

function draw(){
    background(0);
    if (pct < 1.0){
        x = startX + ((stopX-startX) *pct);
        y = startY + ((stopY-startY) *pct) ;
        pct += step;
    ellipse(x, y, 20, 20);
    }
}

