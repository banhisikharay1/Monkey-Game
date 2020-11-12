
var monkey , monkey_running;
var  foodGroup, bananaImage; 
var obstacle, obstacleImage;
var obstacleGroup;
var score;
var survivalTime = 0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  monkey = createSprite(50, 250, 20, 20);
monkey.addAnimation("running", monkey_running);
monkey.scale = 0.1;
  
  monkey.setCollider("circle", 0, 0, 300);
  monkey.debug = true;

  ground = createSprite(200,280,600,20);
  ground.x = ground.width/2;
  
  foodGroup = createGroup();
  
}


function draw() {
background("white");
  
  stroke("black");
  strokeWeight(5); 
  textSize(20);
  fill("white");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100, 50);
     
  if(keyDown("space")&& monkey.y >= 161){
        monkey.velocityY = -12;
      }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  food();
  obstacles();
  drawSprites();
  
}

function food(){
  if(frameCount%80===0){
    banana = createSprite(300, 500,20,20);
    banana.y = Math.round(random(120,200));
    banana.velocityX = -4; 
    banana.addImage("banana", bananaImage);
    banana.lifetime = 100;
    banana.scale = 0.1;
    
    //banana.add(foodGroup);
  }
}

function obstacles(){
  if(frameCount%300 === 0){
    obstacle = createSprite(610,255,10,40);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.1;
  }
}