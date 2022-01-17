var speed = 15;
var diameter = 20;
var diameter1 = diameter +5;
var diameter2 = diameter +15;
var diameter3 = diameter +25;
var x;
var y;
var c = 20;

function setup(){
    createCanvas(600, 600);
    x = 225;
    y = 225;
    x2 = 375;
    y2 = 375;
    background(221+c, 216, 184);
}

function draw(){
    x += random(-speed, speed);
    y += random(-speed, speed);

    x2 += random(-speed, speed);
    y2 += random(-speed, speed);

    if (keyIsPressed){
        if ((key == 'c') || (key == 'C')){
            clear();
            background(221+c, 216, 184);
        }
    }

    if (keyIsPressed){
        if ((key == 's') || (key == 'S')){
            noLoop();
            saveCanvas("rGrapesdL", "png");
        }
    }

    if((x > 275 && x < 325) && (y > 275 && y < 325) ){
        fill(22, 12, 29+c);
        strokeWeight(0.9);
        ellipse(x, y, diameter, diameter);
    }else if((x > 225 && x < 375) && (y > 225 && y < 375) ){
        fill(84, 46, 113+c);
        strokeWeight(1.1);
        ellipse(x, y, diameter, diameter);
    }else if((x > 150 && x < 450) && (y > 150 && y < 450)) {
        fill(118, 115, 171+c);
        strokeWeight(0.9);
        ellipse(x, y, diameter1, diameter1);
    }else if((x > 75 && x < 525) && (y > 75 && y < 525)) {
        fill(132, 169, 192+c);
        strokeWeight(0.6);
        ellipse(x, y, diameter2, diameter2);
    }else{
        fill(179, 203,185+c);
        strokeWeight(0.3);
        ellipse(x, y, diameter3, diameter3);
    }


    if((x2 > 275 && x2 < 325) && (y2 > 275 && y2 < 325) ){
        fill(22, 12, 29+c);
        strokeWeight(0.9);
        ellipse(x2, y2, diameter, diameter);
    } else if((x2 > 225 && x2 < 375) && (y2 > 225 && y2 < 375) ){
        fill(84, 46, 113+c);
        strokeWeight(1.1);
        ellipse(x2, y2, diameter, diameter);
    }else if((x2 > 150 && x2 < 450) && (y2 > 150 && y2 < 450)) {
        fill(118, 115, 171+c);
        strokeWeight(0.9);
        ellipse(x2, y2, diameter1, diameter1);
    }else if((x2 > 75 && x2 < 525) && (y2 > 75 && y2 < 525)) {
        fill(132, 169, 192+c);
        strokeWeight(0.6);
        ellipse(x2, y2, diameter2, diameter2);
    }else{
        fill(179, 203,185+c);
        strokeWeight(0.3);
        ellipse(x2, y2, diameter3, diameter3);
    }
    
}


