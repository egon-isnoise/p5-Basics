var bug;

function setup(){
    createCanvas(480, 480);
    background(204);
    // create the object and pass in some parameters
    bug = new JitterBug(width/2, height/2, 30);
}

function draw(){
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