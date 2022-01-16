var bot1;
var bot2;
var landscape;

var easing = 0.05;
var offset = 0;

function preload(){
    bot1 = loadImage("./media/robot1.svg");
    bot2 = loadImage("./media/robot2.svg");
    landscape = loadImage("./media/lunar.jpg");
}

function setup(){
    createCanvas(720, 720);
}

function draw(){
    background(landscape);

    // setting right left offset and applying easing to make transition smoother
    var targetOffset = map(mouseY, 0, height, -40, 40);
    offset += (targetOffset - offset) * easing;

    // drawing left robot
    image(bot1, 85+offset, 65);

    // draw right robot
    var smallerOffset = offset * 0.7;
    image(bot2, 510 + smallerOffset, 140, 78, 248);

    // draw a third robot
    smallerOffset *= -0.5;
    image(bot1, 410 + smallerOffset, 225, 39, 124);

}