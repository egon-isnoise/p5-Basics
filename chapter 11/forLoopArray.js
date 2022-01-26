var gray = [];

function setup(){
    createCanvas(480, 480);
}

function draw(){
    background(204);
    for(i = 0; i <width; i++){
        gray[i] = random(0, 255);
    }
    for(i = 0; i < gray.length; i++){
        stroke(gray[i]);
        line(i, 0, i, height);
    }
}