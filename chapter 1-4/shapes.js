function setup() {
  createCanvas(600, 800);
  // angleMode(DEGREES);
}

function draw(){

  background(204);

  // ---------------- DRAW B&W CIRCLES

//   if (mouseIsPressed) {
//     fill (0);
//   }else{
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);

// ----------------- DRAW A POINT
  // point(300, 300);

// ---------------- DRAW A LINE
  // line(20, 50, 420, 110);

// ---------------- DRAW SOME SHAPES (every point has x&y)

  quad(158, 180, 199, 139, 392, 191, 351, 232);
  triangle(347, 179, 392, 134, 392, 191);
  triangle(158, 180, 290, 216, 290, 237);

// ---------------- DRAW A RECTANGLE (x&y, height + length)
 
  rect(158, 260, 220, 80);

// ---------------- DRAW AN ELLIPSE (from center, outside ok)

  ellipse(278, -120, 400, 400);
  ellipse(120, 100, 110, 110);
  ellipse(412, 60, 28, 28);

// draw arcs using radians

  arc(90, 420, 100, 100, 0, HALF_PI);
  arc(210, 420, 100, 100, 0, PI+HALF_PI);
  arc(330, 420, 100, 100, PI+QUARTER_PI, HALF_PI+QUARTER_PI);
  arc(450, 420, 100, 100, QUARTER_PI, PI+QUARTER_PI);

// draw them using degrees

  arc(90, 530, 80, 80, radians(180), radians(270));
  arc(210, 530, 80, 80, radians(180), radians(90));
  arc(330, 530, 80, 80, radians(45), radians(315));
  arc(450, 530, 80, 80, radians(135), radians(315));

// or you can change the whole "angleMode" to DEGREES 
// (uncomment in the setup() funtion )

  // arc(90, 620, 50, 50, 0, 90);
  // arc(210, 620, 50, 50, 0, 270);
  // arc(330, 620, 50, 50, 180, 450);
  // arc(450, 620, 50, 50, 45, 225);




}


