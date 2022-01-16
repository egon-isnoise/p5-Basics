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
        translate(mouseX, mouseY);
        rotate(angle);
        rect(-15, -15, 30, 30);
        angle += 0.05;
    }
}