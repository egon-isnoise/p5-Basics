function setup(){
    createCanvas(480, 480);
    background(204);
}

function draw(){
    if (mouseIsPressed){
        clear();
        background(204);
    } else {
        translate(mouseX, mouseY);
        scalar = mouseX/ 60.0;
        scale(scalar);
        strokeWeight(1.0/ scalar);
        rect(-15, -15, 30, 30);
    }
}