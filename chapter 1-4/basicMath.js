function setup(){
    createCanvas(600, 600);
    background(204);
}

var x = 25;
var y = 25;
var h = 20;



function draw(){
    strokeWeight(3);
    rect(x, y, 200, h);
    rect(x+100, y+h, 200, h);
    rect(x-50, y+h*2, 200, h);

    strokeWeight(8);
    for( i = 20; i < 400; i += 60){
        line(i, 120, i + 80, 200);
    }

    strokeWeight(2);
    for(i= 35; i < 400; i +=20){
        line(i, 250, i+i/2, 380);
        line(i+i/2, 380, i, 550);
    }
}