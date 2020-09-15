var PLAY = 1;
var END = 0;
var gameState = PLAY;

var sea3, invisibleGround, groundImage,sea,clouds1,clouds2;
var clouds3,sky,tile,fg,farg;
var cloudsGroup, cloudImage,cloud;
//var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var skys=[];
var skys1,skys2,sky3,skys4,skys5,skys6,skys7,skys8,skys9,skys10,skys11,skys12;
var score= 0;
var gameover, restart, gameoverimage, restartimage;
var b =-56;
var tiles;
var c=50;
var run_img,idle_img,jump_img,land_img;
var plr,ship_img,big_img;
var bird_img;
function preload(){
  //trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
 // trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("./Obj/sea.png");
  
 // cloudImage = loadImage("../Obj/cloud.png");
  
  gameoverimage = loadImage("gameOver.png");
  restartimage = loadImage("restart.png");
  clouds = loadImage("./Obj/clouds.png");
  sky = loadImage("./Obj/sky.png");
  tile= loadImage("./Obj/tile.png");
  fg= loadImage("./Obj/far-grounds.png");
  run_img = loadAnimation("./Characters/Run/1.png","./Characters/Run/2.png","./Characters/Run/3.png","./Characters/Run/4.png","./Characters/Run/5.png","./Characters/Run/6.png","./Characters/Run/7.png","./Characters/Run/8.png");
  idle_img= loadAnimation("./Characters/Idle/1.png","./Characters/Idle/2.png","./Characters/Idle/3.png","./Characters/Idle/4.png","./Characters/Idle/5.png","./Characters/Idle/6.png","./Characters/Idle/7.png","./Characters/Idle/8.png","./Characters/Idle/9.png","./Characters/Idle/10.png","./Characters/Idle/11.png","./Characters/Idle/12.png")
  jump_img = loadImage("./Characters/jump.png");
  land_img = loadImage("./Characters/landing.png");
  ship_img = loadImage("./Obj/Ship.png");
  big_img = loadImage("./Obj/bigt.png");
  bird_img = loadAnimation("./Characters/Bird/1.png","./Characters/Bird/2.png","./Characters/Bird/3.png","./Characters/Bird/4.png");
}

function setup() {
  createCanvas((896/2)*3, 700);

  tilesGroup = new Group();
  birdsGroup = new Group();

  skys1 = createSprite(56,150,400,20);
  skys1.addImage("ground",sky);  
  skys1.scale = 1;
 
  skys2 = createSprite(skys1.x+112,150,400,20);
  skys2.addImage("ground",sky);  
  skys2.scale = 1;

  skys3 = createSprite(skys2.x+112,150,400,20);
  skys3.addImage("ground",sky);  
  skys3.scale = 1;

  skys4 = createSprite(skys3.x+112,150,400,20);
  skys4.addImage("ground",sky);  
  skys4.scale = 1;

  skys5 = createSprite(skys4.x+112,150,400,20);
  skys5.addImage("ground",sky);  
  skys5.scale = 1;

  skys6 = createSprite(skys5.x+112,150,400,20);
  skys6.addImage("ground",sky);  
  skys6.scale = 1;

  skys7 = createSprite(skys6.x+112,150,400,20);
  skys7.addImage("ground",sky);  
  skys7.scale = 1;

  skys8 = createSprite(skys7.x+112,150,400,20);
  skys8.addImage("ground",sky);  
  skys8.scale = 1;

  skys9 = createSprite(skys8.x+112,150,400,20);
  skys9.addImage("ground",sky);  
  skys9.scale = 1;

  skys10= createSprite(skys9.x+112,150,400,20);
  skys10.addImage("ground",sky);  
  skys10.scale = 1;

  skys11 = createSprite(skys10.x+112,150,400,20);
  skys11.addImage("ground",sky);  
  skys11.scale = 1;

  skys12 = createSprite(skys11.x+112,150,400,20);
  skys12.addImage("ground",sky);  
  skys12.scale = 1;

  sea3 = createSprite(896/2,800,400,20);
  sea3.addImage("ground",groundImage); 
  sea3.velocityX = -7
  sea3.scale = 8;

  sea2 = createSprite(sea3.x+896,800,400,20);
  sea2.addImage("sea",groundImage);
  sea2.velocityX = -7;
  sea2.scale = 8;

  sea1 = createSprite(sea2.x+896,800,400,20);
  sea1.addImage("sea2",groundImage);
  sea1.velocityX = -7;
  sea1.scale = 8;

  clouds1 = createSprite(270,300,400,20);
  clouds1.addImage("clouds",clouds);
  
  clouds2 = createSprite(clouds1.x+clouds1.width,300,400,20);
  clouds2.addImage("clouds",clouds);
  
  clouds3 = createSprite(clouds2.x+clouds2.width,300,400,20);
  clouds3.addImage("clouds",clouds);
  
  farg = createSprite(1300,390,400,20);
  farg.addImage("sea",fg);
  farg.scale = 0.5;
  farg.velocityX = -3;



 
  ship = createSprite(500,300);
  ship.addImage( "running",ship_img);
  ship.scale = 0.4;
  ship.velocityX = -3;
  ship.lifetime = 350;
  
  plr = createSprite(350,400);
  plr.addAnimation( "running",idle_img);
  plr.scale = 2;

  land1 = createSprite(400,610);
  land1.addImage( "running",big_img);
  land1.scale = 2.5 ;
  tilesGroup.add(land1);




  /*invisibleGround = createSprite(200,400,400,10);
  invisibleGround.visible = false;*/
  
  gameover = createSprite(((896/2)*3)/2,280,20,20);
  gameover.addImage(gameoverimage);
  
  restart = createSprite(((896/2)*3)/2,600,20,20);
  restart.addImage(restartimage);
  
  gameover.scale = 1;
  restart.scale = 1;
   
  gameover.visible = false;
  restart.visible = false;
  
  
//  obstaclesGroup = new Group();
 
  //ground.velocityX = -(6 + 3*score/100); 
  
  score = 0;
}

function draw() {
  background(180);
  
  
  
  //b+=56;
  //c+=40;
if(gameState === PLAY){
    //move the ground
    if(tilesGroup.isTouching(plr)){
      plr.addAnimation("run",run_img);
    }
    if(birdsGroup.isTouching(plr)|| plr.y>700 ||plr.x<0){
      plr.destroy();
      tilesGroup.destroyEach();
      birdsGroup.destroyEach();
      gameState =END;
    }
  if(keyDown( RIGHT_ARROW)){
    plr.addAnimation( "running",run_img);
    sea1.velocityX = -7
    sea2.velocityX = -7
    sea3.velocityX = -7
    spawntiles();
    spawnbirds();
    tilesGroup.setVelocityXEach(-7);
    birdsGroup.setVelocityXEach(-8)
   // birdsGroup.setLifetimeEach(500);
    farg.velocityX = -3;
  }
  if(keyDown( LEFT_ARROW)){
    plr.addAnimation( "running",idle_img);
    sea1.velocityX = 0
    sea2.velocityX = 0
    sea3.velocityX = 0
    tilesGroup.setVelocityXEach(0);
    birdsGroup.setVelocityXEach(0)
    //tilesGroup.destroyEach();
    tilesGroup.setLifetimeEach(-1);
    farg.velocityX = 0;
   // bird.velocity = 0;
  }
  /*if (plr.y>700||plr.x<0){
    gameState = END;
    //scoring
  }*/
    score = score + Math.round(getFrameRate()/60);
    
  //if (count>0 && count%100 === 0){
   //   playSound("checkPoint.mp3");
    //}
    
  
  
  // skies();
  
   farground()
   sea();
   spawntiles();
   spawnbirds();
   
 
     
 
  
    //add gravity
   plr.velocityY = plr.velocityY + 0.9;
    /* if(plr.y >tilesGroup.y-50 && plr.y < tilesGroup.y-40){
      plr.addImage( "running",land_img);
      }*/
  
   
  plr.collide(tilesGroup);

  
  
   
}
  if (gameState === END){
    gameover.visible = true;
    restart.visible = true;
    //tilesGroup.destroyEach();
   // birdsGroup.destroyEach();
tilesGroup.setLifetimeEach(-1);
birdsGroup.setLifetimeEach(-1);
    sea1.velocityX = 0;
    sea2.velocityX = 0;
    sea3.velocityX = 0;
    farg.velocityX = 0;
    
    //bird.destroy();
  }

  
  if(mousePressedOver(restart)) {
    reset();
  }

console.log(frameCount);
  
 
   
  
  drawSprites();
  text("Score: "+ score, 700,100);
}
function keyPressed(){
  if(keyCode===32) {
  plr.addImage( "running",jump_img);
  plr.velocityY = -16 ;
  //playSound("jump.mp3");
}}
function spawntiles() {
  //write code here to spawn the clouds
  if (frameCount% 78 === 0 ) {
    var tiles = createSprite(1400,390,40,10);
   
    tiles.y = Math.round(random(330,600));
    tiles.addImage("tile",tile);
    tiles.scale = 2.5;
   tiles.velocityX = -7;

    var tiles1 =  createSprite(1490,tiles.y,40,10);
    tiles1.addImage("tile",tile);
    tiles1.scale = 2.5;
  tiles1.velocityX = -7;

    var tiles2 =  createSprite(1495+90,tiles.y,40,10);
    tiles2.addImage("tile",tile);
    tiles2.scale = 2.5;
   tiles2.velocityX = -7;

   
     //assign lifetime to the variable
    tiles.lifetime = 500;
    tiles1.lifetime = 500;
    tiles2.lifetime = 500;
    //adjust the depth
    tiles.depth = plr.depth;
    plr.depth = plr.depth + 1;
    
    //add each cloud to the group
    tilesGroup.add(tiles);
    tilesGroup.add(tiles1);
    tilesGroup.add(tiles2);
  }}
  function spawnbirds(){
    if(frameCount% 156=== 0){
      var bird = createSprite(1450,100,20,20);
      bird.addAnimation("flying",bird_img);
      bird.y = Math.round(random(100,400));
      bird.velocityX = -8;
      bird.scale=0.8;
      bird.lifetime = 500;
      birdsGroup.add(bird);
    
  }
  
}
function sea(){
  if(sea3.x<=-896/2 && sea1.x===(896/2)*3){      
    sea3.x=sea1.x+896
    sea3.velocityX = -7;
  }
   
  
  if(sea2.x<=-896/2){
    sea2.x=sea3.x+896
   sea2.velocityX = -7;
  }
    
  if(sea1.x<=-896/2){
    sea1.x=sea2.x+896
   sea1.velocityX = -7;
  }
}
function farground(){
  if(farg.x<=-300){
    farg.x=1500;
  }}




function reset() {
  gameState = PLAY;
  
  gameover.visible = false;
  restart.visible = false;
  
  //obstaclesGroup.destroyEach();
/*cloudsGroup.destroyEach();
  
  trex.changeAnimation("running",trex_running);*/
  
  score = 0;




}
      //spawn obstacles
    //spawnObstacles();
   /* if(keyIsDown(RIGHT_ARROW)){
      sea1.velocityX = -7
      sea2.velocityX = -7
      sea3.velocityX = -7
     // tiles1.velocityX = -7
      //tiles.velocityX = -7
      farg.velocityX = -3;
    }*/
   
    /*if(birdsGroup.isTouching(plr)){
      plr.destroy();
      gameState =END;
    }
  if(keyDown( RIGHT_ARROW)){
    plr.addAnimation( "running",run_img);
    sea1.velocityX = -7
    sea2.velocityX = -7
    sea3.velocityX = -7
   // spawntiles();
    spawnbirds();
    tilesGroup.setVelocityXEach(-7);
    tilesGroup.setLifetimeEach(500);
    birdsGroup.setVelocityXEach(-8)
    birdsGroup.setLifetimeEach(500);
    farg.velocityX = -3;
  }
  if(keyDown( LEFT_ARROW)){
    plr.addAnimation( "running",idle_img);
    sea1.velocityX = 0
    sea2.velocityX = 0
    sea3.velocityX = 0
    tilesGroup.setVelocityXEach(0);
    birdsGroup.setVelocityXEach(0)
    //tilesGroup.destroyEach();
    tilesGroup.setLifetimeEach(-1);
    farg.velocityX = 0;
   // bird.velocity = 0;
  }*/
    
/*function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -4;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}*/
 /*else if(gameState === END) {
    gameover.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    trex.velocityY = 0;
    //obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);
    
    //change the trex animation
    trex.changeAnimation("trex_collided",trex_collided);
    
    //set lifetime of the game objects so that they are never destroyed
   // obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
    
    
 }*/