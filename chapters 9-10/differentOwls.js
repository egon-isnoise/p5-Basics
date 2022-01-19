var r = 0

function setup(){
    createCanvas(480, 480);
}

function draw(){
    background(204);
    randomSeed(r);
    for(i = 35; i < width +40; i +=40){
        var gray = int(random(0, 102));
        var scalar = random(0.25, 1.0);
        var h = int(random(-20, 50));
        owl(i, i+ h, gray, scalar);
    }
    if(keyIsPressed){
        if(key == 'c'){
            r = int(random(0,25));
        }
    }
}

function owl(x, y, g, s){
    push();
    translate(x, y);
    scale(s);
    stroke(g);
    strokeWeight(70);
    line(0, -35, 0, -65); // body
    noStroke();
    fill(255- g);
    ellipse(-17.5, -65, 35, 35); // left eye dome
    ellipse(17.5, -65, 35, 35); // right eye dome
    arc(0, -65, 70, 70, 0, PI); //chin
    fill(g);
    ellipse(-14, -65, 8, 8); // left eye
    ellipse(14, -65, 8, 8); // right eye
    quad(0, -58, 4, -51, 0, -44, -4, -51); //beak
    pop();
}