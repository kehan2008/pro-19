
var PLAY,END,START;
var gameState = END;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
 var ground,backgroundImage,back_ground;
var apple,appleImage,appleGroup;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png",
  "sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bananaImage = loadImage("banana.png");
  appleImage = loadImage("apple.jpg");
  backgroundImage = loadImage("back2.jpg");
}

function setup() {
   createCanvas(550,350);
 
  ground=createSprite(275,310,1100,10);
 ground.visible=false;
  
  back_ground=createSprite(275,200,1100,400);
  back_ground.velocityX=-4;
  back_ground.addImage(backgroundImage);
  back_ground.scale=1.5 ; 
  
  monkey=createSprite(70,255,10,30);
  monkey.addAnimation("monkey",monkey_running)
monkey.scale=0.1;
  
  obstacleGroup = new Group();
  FoodGroup = new Group();
  appleGroup = new Group();
  
}

function draw() {
  background("pink");
  
 if(gameState === PLAY){
  monkey.collide(ground);
  ground.velocityX=-4;
  
  
  if(keyDown("Space")&&(monkey.y>250)||(mousePressedOver(back_ground))&&(monkey.y>250)){
    monkey.velocityY=-15;
  }
  monkey.velocityY=monkey.velocityY+0.6;
  
    if(ground.x<0){
      ground.x=ground.width/2;
    }
     
  if(back_ground.x<0){
     back_ground.x=back_ground.width/2;
    }
    
   if(FoodGroup.isTouching(monkey)){
      FoodGroup.destroyEach();  
     
      }
   food();
   obstacles();
   console.log(frameCount);
 }
  
    drawSprites();
}

function food(){
 if(frameCount%60===0){ 
  banana=createSprite(550,Math.round(random(80,150)),10,10);
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-4;
  banana.lifetime=150;
 FoodGroup.add(banana);
}
  if(frameCount%400===0){
      apple=createSprite(550,Math.round(random(80,150)),10,10);
  apple.addImage(appleImage)
  apple.scale=0.2
  apple.velocityX=-4;
  apple.lifetime=150;
 appleGroup.add(apple);
     }
}

function obstacles(){
  if (frameCount%400===0){
      obstacle=createSprite(550,290,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4;
    obstacle.scale=0.08
    obstacle.lifetime=200;
      }
}
