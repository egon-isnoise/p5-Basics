
// ok sketches with external files are A REAL BITCH
// always, and I repeat ALWAYS put ALL the files needed in the same 
// folder as the .js file AND the index.html AND the images AND 
// the p5 library file, otherwise NOTHING loads.
// and I swear NOTHING. I tried infinite combinations and there is no way whatsoever

var img1;
var img2;

function preload(){
    img1 = loadImage("./media/lunar.jpg");
    img2 = loadImage("./media/capsule.jpg");
}

function setup(){
    createCanvas(800, 800);
}

function draw(){
    image(img1, -120, 0, 600, 300);
    image(img1, 130, 40, 400, 200);
    image(img2, 300, 0, 400, 200);
}