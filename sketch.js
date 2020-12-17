var door;
var climber;

function preload(){
  towerImage = loadImage("tower.png")
  doorImage = loadImage("door.png")
  climberImage = loadImage("climber.png")
  ghostImage = loadImage("ghost-standing.png")
  doorsGroup = new Group();
  climbersGroup = new Group();
}
function setup(){
  createCanvas(600,600);
  tower = createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY = 1.5;
  ghost = createSprite(200,200,50,50);
  ghost.addImage(ghostImage);
  ghost.scale = 0.3;
  
}
function draw(){
  background("white");
  if(tower.y > 400){
    tower.y = 300;
  }
  if(keyDown("LEFT_ARROW")){
    ghost.x = ghost.x-3;
  }
  if(keyDown("RIGHT_ARROW")){
    ghost.x = ghost.x+3;
  }
  if(keyDown("space")){
    ghost.velocityY = -5;
    
  }
  ghost.velocityY = ghost.velocityY+0.5;
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY = 0;
  }
  spawnDoor();
  drawSprites();
}
function spawnDoor(){
  if(frameCount% 250  == 0){
    
  
  door = createSprite(200,50);
  door.addImage(doorImage);
  door.velocityY = 1.5;
    door.x = Math.round(random(140,400))
    doorsGroup.add(door);
    climber = createSprite(200,120);
    climber.addImage(climberImage);
    climber.velocityY = 1.5;
    climber.x = door.x;
    climbersGroup.add(climber);
    ghost.depth = door.depth;
    ghost.depth+= 1;
  }
}