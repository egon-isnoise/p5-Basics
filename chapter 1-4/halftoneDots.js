function setup(){
    createCanvas(580, 580);
}

function draw(){
    background(0);
    for (y = 32; y <= height/2 -32; y += 8){
        for (x = 12; x <= width; x += 15){
            ellipse(x - y, y + 292, 16 - y/8, 16 - y/8);
        }
    }

    for (y = 32; y <= height/2; y += 8){
        for (x = 12; x <= width; x += 15){
            ellipse(x + y, y, 16 - y/8, 16 - y/8);
        }
    }
}