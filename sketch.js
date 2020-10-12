var hoop;
var time, edges;
var hoop1;
var s;
var side1, side2, side3, side4;
var ball_img1, hoop_img1, balls_img;
var score = 0
var time = 2.00;
var sprite2


var balls;
var ballsGroup;

function preload(){
  ball_img1 = loadImage("images/animated basketball.png")
  hoop_img1 = loadImage("images/Baskethoop.png");
  balls_img = loadImage("images/animated basketball.png")
}


function spawnballs(){

  if(frameCount%90 == 0){
     balls = createSprite(100,100,10,10)
     balls.y = Math.round(random(50,350))
     balls.addImage(balls_img)
     balls.scale = 0.1;
     balls.lifetime = 80 
     ballsGroup.add(balls) 

  }
}

function setup(){

    createCanvas(400,400)
 
  hoop1 = new Hoop(350,200,10,10);
  s = second();
  sprite2 = createSprite(200,200,10,10);
  sprite2.velocityY = 3;
  side1 = createSprite (0,0,800,10);
  side2 = createSprite (400,400,800,10);
  side3 = createSprite (0,0,10,800);
  side4 = createSprite (400,400,10,800)
 
  hoop1.body.addImage(hoop_img1);
  
  hoop1.body.velocityY = 4.5

  ballsGroup = new Group()
 
  
 
}

function draw (){
  
    background("black");
   
    hoop1.display();

  side1.shapeColor = "black" 
  side2.shapeColor = "black"
  side3.shapeColor = "black"
  side4.shapeColor = "black"

  strokeWeight(4);
  stroke("red");
  text("Score:" + score, 30,30);
  strokeWeight(4);
  stroke("blue");
  text("Time:" + time, 250,30);
 
  
  
  if(keyDown("SPACE")){
    ballsGroup.setVelocityXEach(5)
    
  }
  if(hoop1.body.isTouching(ballsGroup)){
    score = score+1;
  }

    edges = createEdgeSprites();
    
 
 
  hoop1.body.bounceOff(edges)
  
  spawnballs()
 
}

