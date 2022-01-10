var x = 215;
var y = 215;

function setup(){
    createCanvas(480, 480);
}

function draw(){
    background(0);
    if (keyIsPressed){
        if (keyCode == LEFT_ARROW && x > 10){
            x --;
        } else if (keyCode == RIGHT_ARROW && x < width -60){
            x ++;
        } else if (keyCode == UP_ARROW && y > 10){
            y --;
        } else if (keyCode == DOWN_ARROW && y < height -60){
            y ++;
        } 
        if (key == 'c' || key == 'C'){
            x = 215;
            y = 215;
        }
    }
    rect(x, y, 50, 50);
}