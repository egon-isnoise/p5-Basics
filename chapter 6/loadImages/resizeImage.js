var img;

function preload(){
    img = loadImage("./media/lunar.jpg");
}

function setup(){
    createCanvas(800, 800);
}

function draw(){
    background(0);
    image(img, 0, 0, mouseX *2, mouseY *2);
}