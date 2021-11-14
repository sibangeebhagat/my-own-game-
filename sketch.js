const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
//images variables 
var computerimg,playerimg,bgimg,fuelimg,moneyimg,coinimg,bagimg,titleimg,overimg,playimg,obstacleimg,startimg;
var trackimg;
// varibles for objects 
var computercar, playercar, fueltank, money, coin, money1, title, obstacles, track, track1, track2, track3;

function preload(){

  // images for the game 
computerimg = loadImage("images/car1.png");
playerimg = loadImage("images/playercar.png");
bgimg = loadImage("images/bg.jpg");
fuelimg = loadImage("images/fuel.jpg");
moneyimg = loadImage("images/money.jpg");
coinimg = loadImage("images/point1.jpg");
bagimg = loadImage("images/point2.jpg");
titleimg = loadImage("images/title.jpg");
overimg = loadImage("images/over.jpg");
obstacleimg = loadImage("images/obstacle1.jpg");
trackimg = loadImage("images/track1.jpg");


// animations for the game 
playimg = loadAnimation("images/play.gif");
startimg = loadAnimation("images/start.gif");


}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  track1 = createSprite(width/2+95, height, width*4, height);
  track1.scale = 3.5
  track1.addImage(trackimg);

  playercar = createSprite(width/1.74, height/0.6, width*1, height);
  playercar.scale = 0.16;
  playercar.addImage(playerimg);
  console.log(playercar.y);

  computercar = createSprite(width/2.4, 480, width*2, height);
  computercar.scale = 0.16;
  computercar.addImage(computerimg);
}

function draw() {
  background(bgimg);  
  Engine.update(engine)
  
  if (keyIsDown(UP_ARROW)) {
    playercar.position.y += -10;
  }

  if (keyIsDown(DOWN_ARROW)){
    playercar.position.y += 10;
  }
  camera.position.x = playercar.position.x
  camera.position.y = playercar.position.y

  drawSprites();
}
  

