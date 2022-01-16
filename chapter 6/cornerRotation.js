function setup(){
    createCanvas(480, 480);
    background(204);
}

function draw(){
    rotate(mouseX / 100);
    rect(80, 40, 400, 20);
}