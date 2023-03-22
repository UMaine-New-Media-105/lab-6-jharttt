var x = 200; // variables for bear
var y = 200;
var honeyCollected = false; // makes honey disappear
var honeyX; // variables for honey
var honeyY;

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 5; i++) {
    // tried to make a loop to make it spawn 5 not working...
    spawnHoney();
  }
}


function draw() {
  background(220);
  bearSprite();
  if (!honeyCollected) { // collection for honey in draw function
    honeySprite();
  }
  if (x >= 400){ // respawn at edge
   x = 0; 
  }
}

function bearSprite() { // function to spawn bear in center
  fill(random(0,255), random(0,255), random(0,255));
  ellipse(x, y, 50, 50);
  ellipse(x - 20, y - 20, 20, 20);
  ellipse(x + 20, y - 20, 20, 20);
}

function honeySprite() { // spawn for honey
  fill("gold");
  rect(honeyX - 12.5, honeyY - 25, 25, 50);
}


function spawnHoney() { // randomizes spawn location
  honeyX = random(0,400);
  honeyY = random(0,400);
}

function collectHoney() { // tried to make it spawn another when honey eaten
  honeyCollected = true;
  spawnHoney();
}




function keyPressed() { // to move bear
  if (keyCode === UP_ARROW) {
    y = y - 10;
  } else if (keyCode === DOWN_ARROW) {
   y = y + 10;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 5;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 5;
  }
 
  if (!honeyCollected && dist(x, y, honeyX, honeyY) < 50) { // collection parameters
    collectHoney();
  }
}
