var x = [-20, 20, 12, 45, 67, -30, 78, 26, 186, 86,12, 99];

function setup(){
    createCanvas(480, 480);
    noStroke();
}

function draw(){
    background(0);
    randomSeed(0);
    for(i = 0; i < x.length; i++){
        
        x[i] += 1.5;
        var y = int(random(450));
        arc(x[i], y, 40, 40, 0.52, 5.76);
    }
}