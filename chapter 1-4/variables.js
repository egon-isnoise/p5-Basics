
var x = 100;
var y = 180;
var d = 180;

// var y = 30;
// var d = 80;

// var y = 150;
// var d = 280;

// ofc changing the variables changes the whole sketch

function setup(){
    createCanvas(500, 300);
}

function draw(){
    background(204);
    ellipse(x, y, d, d);
    ellipse(2.7*x, y, d, d);
    ellipse(3.5*x, y, d, d);

    line(0, 0, width, height); 
    line(width, 0, 0, height); 
    ellipse(width/2, height/2, 60, 60);
}

// console.log(height);