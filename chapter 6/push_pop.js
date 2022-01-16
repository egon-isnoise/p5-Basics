function setup(){
    createCanvas(480, 480);
    background(204);
}

function draw(){
    // push and pop isolate the effect of transformations
    push();
    strokeWeight(1);
    translate(mouseX, mouseY);
    rect(0, 0, 30, 30);
    pop();
    translate(210, 210);
    strokeWeight(10);
    rect(0, 0, 60, 60);
}