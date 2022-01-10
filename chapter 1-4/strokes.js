function setup(){
    createCanvas(600, 600);
    // strokeWeight can be set here to be global
}

function draw() {
    background(204);

    strokeWeight(1); // Stroke weight to 1 pixels
    ellipse(75, 60, 90, 90);
    strokeWeight(8); // Stroke weight to 8 pixels
    ellipse(175, 60, 90, 90);
    ellipse(279, 60, 90, 90);
    strokeWeight(20); // Stroke weight to 20 pixels
    ellipse(389, 60, 90, 90);

    strokeJoin(ROUND);  // round the corners
    rect(40, 155, 70, 70);
    strokeJoin(BEVEL);   // bevel the corners duh
    rect(140, 155, 70, 70);
    strokeCap(SQUARE);   // square line endings
    line(270, 155, 340, 225);
    strokeCap(ROUND);    // round line endings
    line(370, 155, 440, 225);
    

    
}