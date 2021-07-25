var ninja;
var ground;
var block;
var block1;
var block2;
var gravity = 7, jump = 20;
var ninjaSpeed = 13;
var canavs;
var levels = 1;
var spwanPointX = 400, spwanPointY= 100;
var spwanTeleX = 600, spwanTeleY = 350;
var Mode = 2, runtime = 1;

function setup() {
  canavs = createCanvas(1314, 600);

  
  ninja = createSprite(spwanPointY,spwanPointX,20,30);
  ninja.shapeColor = rgb(0,0,0);
  ground = createSprite(width/2,600,width*2,50);
  teleporter = createSprite(600,350,50,80); 
  teleporter.shapeColor = "green";
  teleporter.visible = false;
}

function draw() {
  background(220);  
  if(Mode === 2){
    teleporter.visible = true;
    if(ninja.isTouching(teleporter) && levels === 1){
      console.log('Teleported');
      levels = 2;
      b = createSprite(200,200,200,20);
      b1 = createSprite(500,300,200,20);
      b2 = createSprite(800,400,70,20);
      ninja.x = 200
      ninja.y = 150;
      teleporter.y = 350;
      teleporter.x = 800;
      block.destroy();
      block1.destroy();
      block2.destroy();
    }
    if(levels === 1 && runtime === 1){
      runtime = 2;
      block = createSprite(150,500,200,20);
      block1 = createSprite(350,450,200,20);
      block2 = createSprite(600,400,200,20);
    }
    if(levels === 2){
      collide(ninja,b);
      collide(ninja,b1);
      collide(ninja,b2);
      if(ninja.isTouching(ground)){
        ninja.x = 200
        ninja.y = 150;
      }
    }

    textSize(30);
    fill('#222222');
    //stroke(0);
    //strokeWeight(2);
    text("Level - " + levels, 1100,60);

    collide(ninja,block);
    collide(ninja,block1);
    collide(ninja,block2);
  }
  collide(ninja,ground);
  
  
  move(ninja);
  drawSprites();
}

function collide(ninja,block){
  if(ninja.isTouching(block)){
    ninja.velocityY = 0;
    ninja.collide(block);

    if(ninja.y - block.y < ninja.height/2 + block.height/2 &&
      block.y - ninja.y < ninja.height/2 + block.height/2){
      ninja.velocityY = ninja.velocityY + 0.8;
    }

    if(keyDown(UP_ARROW)){
      ninja.velocityY = jump * -1;
    }    
  }
  else{
    ninja.velocityY = ninja.velocityY + 0.4;
  }
  
}

function move(ninja){
  if(keyDown(RIGHT_ARROW)){
      ninja.x += 13;
  }

  if(keyDown(LEFT_ARROW)){
      ninja.x += 13 * -1;
  }
}

function main(){
  b3 = createSprite(200,200,200,20);
  b4 = createSprite(500,300,200,20);
  b5 = createSprite(800,400,70,20);
}



