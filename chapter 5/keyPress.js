function setup(){
    createCanvas(480, 480);
}

function draw(){
    background(204);
    line(20, 20, width -20, height -20);
    if(keyIsPressed){
        line(width -20, 20, 20, height -20);
    }
}