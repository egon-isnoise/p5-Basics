var jit;
var bug;

function setup(){
    createCanvas(480, 480);
    background(204);
    jit = new JitterBug(width *0.33, height/2, 50);
    bug = new JitterBug(width *0.66, height/2, 20);
}

function draw(){
    jit.move();
    jit.display();
    bug.move();
    bug.display();
}

function JitterBug(X, Y, Diameter){
    this.x = X;
    this.y = Y;
    this.diameter = Diameter;
    this.speed = 3.5;

    this.move = function(){
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    };

    this.display = function(){
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };
}