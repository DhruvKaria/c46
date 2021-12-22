
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
rocketdown = loadImage('rocketdown.png')
rocketleft = loadImage('rocketleft.png')
rocketright = loadImage('rocketright .png')
rocketup = loadImage('rocketup.png')
bgimg = loadImage('bgimg.jpeg')
openingpicture = loadImage('openingpicture.png') 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgimg);
  
  drawSprites();
 
}



