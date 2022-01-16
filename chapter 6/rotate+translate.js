var angle = 0.0;

function setup(){
    createCanvas(480, 480);
    background(204);
}

function draw(){
    if (mouseIsPressed){
        clear();
        background(204);
    } else {
        rotate(angle);
        translate(mouseX, mouseY);
        rect(-15, -15, 30, 30);
        angle += 0.05;
    }
}