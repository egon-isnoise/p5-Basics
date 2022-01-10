function setup(){
    createCanvas(600, 300);
}

function draw(){
    background(204);
    fill(255);
    beginShape();
    vertex(180, 82);
    vertex(207, 36);
    vertex(214, 63);
    vertex(407, 11);
    vertex(412, 30);
    vertex(219, 82);
    vertex(226, 109);
    endShape(CLOSE); 
    // without close the first and last vertex r not connected

    // Left creature
    fill(0, 150, 225);
    beginShape();
    vertex(50, 220);
    vertex(100, 190);
    vertex(110, 160);
    vertex(80, 120);
    vertex(210, 160);
    vertex(160, 180);
    vertex(200, 190);
    vertex(140, 200);
    vertex(130, 220);
    endShape(CLOSE);
    fill(0);
    ellipse(155, 160, 8, 8);

    // Right creature
    fill(255, 100, 0);
    beginShape();
    vertex(370, 220);
    vertex(360, 190);
    vertex(290, 180);
    vertex(340, 170);
    vertex(280, 150);
    vertex(420, 110);
    vertex(390, 150);
    vertex(410, 190);
    vertex(460, 220);
    endShape(CLOSE);
    fill(0);
    ellipse(345, 150, 10, 10);
}