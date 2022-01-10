function setup(){
    createCanvas(480, 480);
    background(204);
    strokeWeight(30);
}

function draw(){
    stroke(102);
    line(40, 0, 170, height);
    if (mouseIsPressed == true){
        stroke(0);
    }
    line(0, 170, width, 50);
}