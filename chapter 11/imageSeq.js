var numFrames = 12;
var images = [];
var currentFrame = 0;

function preload(){
    for (i = 0; i < numFrames; i ++){
        var imageName = 'img/frame-'+nf(i, 4)+".png";
        images[i] = loadImage(imageName);  // load every image
    }
}

function setup(){
    createCanvas(240, 120);
    frameRate(24);
}

function draw(){
    image(images[currentFrame], 0, 0);
    currentFrame++;  // next frame in line
    if(currentFrame == images.length){
        currentFrame = 0;  // return to the first frame
    }
}