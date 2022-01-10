function setup(){
    createCanvas(480, 480);
    strokeWeight(12);
}

function draw(){
    background(204);
    stroke(102);
    line(mouseX, 0, mouseX, height);
    stroke(0);
    var mx = mouseX/2 + 70;
    line(mx, 0, mx, height);
}