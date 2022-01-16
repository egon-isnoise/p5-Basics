var angle = 0.0;
var angleDirection = 1;
var speed = 0.0025;

function setup(){
    createCanvas(480, 480);
}

function draw(){
    background(204);
    translate(20, 25); // move tro start position
    rotate(angle);
    strokeWeight(24);
    line(80, 60, 200, 40);
    translate(200, 40); // move to next joint
    rotate(angle * 2.0);
    strokeWeight(12);
    line(0, 0, 120, 00);
    translate(120, 0); // move to next joint
    rotate(angle * 2.5);
    strokeWeight(6);
    line(0, 0, 70, 0);

    angle += speed * angleDirection;
    if(angle > QUARTER_PI || angle <= 0){
        angleDirection *= -1;        
    }
}