var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");
    
}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, starBody);
	World.add(world, star)
    star.x=starBody.position.x
    star.y=starBody.position.y
    
	
	Engine.run(engine);
    
}


function draw() {
  background(bgImg);
  
  if(starBody.position.y > 470)
  {
	if(fairy.isTouching(starBody))
	{
		star.depth=starBody.depth = 0

	}
  }
  drawSprites();
  fairyVoice.play()
  keyPressed();
}

function keyPressed() {
	//write code here
	if(keyCode === LEFT_ARROW)
	{
		fairy.velocityX=-2;
	}
	if(keyCode === RIGHT_ARROW)
	{
		fairy.velocityX=2;
	}
	if(keyCode === UP_ARROW)
	{
       star.depth=starBody.depth+0.5
       
	}
}
