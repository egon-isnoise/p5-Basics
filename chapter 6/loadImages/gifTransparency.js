
// the  <function preload(){loadImage()}>  gimmiky works with any kind of files, 
// jpeg, npg, gifs etc

var img;

function preload(){
    img = loadImage("media/floid.gif");
}

function setup(){
    createCanvas(800, 800);
}

function draw(){
    background(204);
    image(img, 0, 0, 800, 800);
    image(img, 0, mouseY * -1, 800, 800);
}