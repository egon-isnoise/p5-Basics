// same effect as mapRange.js but actually using the map() func

function setup(){
    createCanvas(480, 480);
    strokeWeight(12);
}

function draw(){
    background(204);
    stroke(255);
    line(width/2, height/2, mouseX, mouseY);
    stroke(0);
    var mx = map(mouseX, 0, width, 60, 180);
    
    // map() takes 5 arguments:
    // the value to map
    // the minimum value pre-conversion
    // the maximum value pre-conversion
    // the minimum value post-conversion
    // the maximum value post-conversion

    line(width/2, height/2, mx, mouseY);
}