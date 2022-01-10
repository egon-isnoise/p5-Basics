function setup(){
    createCanvas(600, 600);
    background(0);
    noStroke();
}

var d = 35;
var d1 = d -10;
var d2 = d - 20;
// var v = 0.5;

// playing with loops, add-subtract v to have more fun

function draw(){
    for(y = 0; y <= height; y += 40){
        for(x = 0; x <= width; x+=40){
            fill(255, 240);
            ellipse(x, y, d, d);
            fill(25, 140);
            ellipse(x, y, d1, d1);
            fill(25, 240);
            ellipse(x, y, d2, d2);
            // v ++;
        }
    }
}