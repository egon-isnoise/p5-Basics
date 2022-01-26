var bugs = [];

function setup(){
    createCanvas(480, 480);
    background(204);
    for(i = 0; i <33; i ++){
        var x = random(width);
        var y = random(height);
        var r = i +2;
        bugs[i] = new JitterBug(x, y, r);
    }
}

function draw(){
    for(i = 0; i < bugs.length; i++){
        bugs[i].move();
        bugs[i].display();
    }
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