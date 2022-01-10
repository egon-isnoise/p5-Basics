// I made things complex cause I wanted more canvases:

// create the whole sketch as a function
var s1 = function(sketch){

    // call everything as properties of it
    sketch.setup = function(){
        let canvas1 = sketch.createCanvas(480, 120);
        canvas1.position(20, 20);
    };

    sketch.draw = function(){
        sketch.background(0);
        sketch.fill(204);
        sketch.ellipse(132, 82, 200, 200);
        sketch.fill(153);
        sketch.ellipse(228, -16, 200, 200);
        sketch.fill(102);
        sketch.ellipse(268, 118, 200, 200);
    };
};

// create an instance of p5 especially for the function
new p5(s1);

var s2 = function(sketch){
    sketch.setup = function(){
        let canvas2 = sketch.createCanvas(480, 120);
        canvas2.position(20, 150);
    };

    sketch.draw = function(){
        sketch.background(204);
        sketch.fill(153);
        sketch.ellipse(132, 82, 200, 200);
        sketch.noFill();
        sketch.ellipse(228, -16, 200, 200);
        sketch.ellipse(268, 118, 200, 200);
    };
};

new p5(s2);

// and again, with RGB colours this time

var s3 = function(sketch){
    sketch.setup = function(){
        let canvas2 = sketch.createCanvas(480, 120);
        canvas2.position(20, 280);
        sketch.noStroke();
    };

    sketch.draw = function(){
        sketch.background(255, 255, 255);
        sketch.fill(255, 0, 0);
        sketch.ellipse(132, 82, 200, 200);
        sketch.fill(0, 255, 0);
        sketch.ellipse(228, -16, 200, 200);
        sketch.fill(0, 0, 255);
        sketch.ellipse(268, 118, 200, 200);
    };
};

new p5(s3);

// and again, with transparency

var s4 = function(sketch){
    sketch.setup = function(){
        let canvas2 = sketch.createCanvas(480, 120);
        canvas2.position(20, 410);
        sketch.noStroke();
    };

    sketch.draw = function(){
        sketch.background(255, 255, 255);
        sketch.fill(255, 0, 0, 160);
        sketch.ellipse(132, 82, 200, 200);
        sketch.fill(0, 255, 0, 110);
        sketch.ellipse(228, -16, 200, 200);
        sketch.fill(0, 0, 255, 190);
        sketch.ellipse(268, 118, 200, 200);
    };
};

new p5(s4);
