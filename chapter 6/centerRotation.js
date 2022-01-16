function setup(){
    createCanvas(480, 480);
    background(204);
}

function draw(){
    rotate(mouseX / 100);
    rect(-80, -10, 400, 20);
    rect(width/2 + 20, height/2 + 20, 400, 20);
    
}