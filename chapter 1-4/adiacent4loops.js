function setup(){
    createCanvas(480, 120);
    noStroke();
}

function draw(){
    background(0);

    // ellipses in the vertical side
    for (y = 0; y < height + 45; y += 40){
        fill(255, 140);
        ellipse(0, y, 40, 40);
    }

    // ellipses on the orizontal side
    for (x = 0; x < width + 45; x += 40){
        fill(255, 140);
        ellipse(x, 0, 40, 40);
    }
}