function setup(){
    createCanvas(480, 480);
}

function draw(){
    background(204);
    if (keyIsPressed){
        if ((key == 'h') || (key == 'H')){
            line(30, 240, 450, 240);
        }
        if ((key == 'n') || (key == 'N')){
            line(30, 30, 450, 450);
        }
        if ((key == 'm') || (key == 'M')){
            line(30, 30, width/2, height/2);
            line(width/2, height/2, 450, 30);
        }
        if ((key == 'o') || (key == 'O')){
            line(30, 30, 450, 30);
            line(30, 450, 450, 450);
        }
        if ((key == 'z') || (key == 'Z')){
            line(30, 450, 450, 30);
        }
    }
    line(30, 30, 30, 450);
    line(450, 30, 450, 450);
}