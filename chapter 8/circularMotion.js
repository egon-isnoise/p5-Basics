
var angle = 0.0;
var offset = 240;
var speed = 0.05;

function setup(){
    createCanvas(480, 480);
    background(204);
}

function draw(){
    if (keyIsPressed){
        if (key == 'c'){
            clear();
            background(204);
        }
    }

    var scalar = 60;
    var currentTime = millis();

    for (second = 1000; second < 60000; second += 1000){
        if (currentTime > second && currentTime < second + 100){
            clear();
            background(204);
        }
    }

    if(currentTime > 4000){
        scalar = 80;
    } 
    if(currentTime > 8000){
        scalar = 100;
    }
    if(currentTime > 12000){
        scalar = 120;
    }
    if(currentTime > 16000){
        scalar = 140;
    }
    if(currentTime > 20000){
        scalar = 160;
    }
    if(currentTime > 24000){
        scalar = 180;
    }
    if(currentTime > 28000){
        scalar = 200;
    }

    var x = offset + cos(angle)* scalar;
    var y = offset + sin(angle)* scalar;
    ellipse(x, y, 100, 100);
    angle += speed;
}