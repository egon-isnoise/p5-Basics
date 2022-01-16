function setup(){
    createCanvas(800, 800);
    loadImage("./media/lunar.jpg", drawImage);
    noLoop();
}

function draw(){
    background(200);
}

function drawImage(img){
    image(img, 0, 0, 800, 400);
}