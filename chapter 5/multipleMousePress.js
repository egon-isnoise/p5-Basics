function setup(){
    createCanvas(480, 480);
    strokeWeight(30);
}

function draw(){
    background(204);
    stroke(102);
    line(40, 0, 70, height);
    if (mouseIsPressed){
        if (mouseButton == LEFT){
            stroke(255);
            line(0, 170, width, 150);
        } else {
            stroke(0);
        }
        line(0, 100, width, 80);
        line(0, 200, width, 180);
    }
}