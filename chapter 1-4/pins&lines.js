function setup(){
    createCanvas(680, 680);
    fill(255);
    stroke(82);
}

function draw(){
    background(0);
    for (y = 20; y <= height-20; y += 10){
        for (x = 20; x <= width-20; x += 10){
            line(x, y, 340, 340);
            ellipse(x, y, 4, 4);
        }
    }
}