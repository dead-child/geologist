
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1
var hammer1
var rubber1
var diamond1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();

	world = engine.world;

hammer1 = new hammer(300,200,150,45);
diamond1 = new diamond(200,500,100,100);
rubber1 = new rubber(400,200,69);
ground1 = new ground(400,700,800,25);

Engine.run(engine);



  
}


function draw() {
  rectMode(CENTER);
  background(0);
	ground1.display();
	rubber1.display();
	hammer1.display();
	diamond1.display();
  drawSprites();
 
}



