
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;
var box2;
var box3;
var ground;
var paper;
var dustbin,dustbinImage;
var crumpledpaper,crumpledpaperImage

function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
	crumpledpaperImage = loadImage("paper.png");

}


function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(247,90,148)

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 dustbin = createSprite(1075,570,10,70);
	 dustbin.addImage(dustbinImage);
	 dustbin.scale = 0.5;

	 



	Engine.run(engine);

	box1 = new Box(1075,620,10,70);
	box2 = new Box(1075,640,140,10);
	box3 = new Box (1150,620,10,70);

	crumpledpaper = new Paper(200,450,70);	
  
}


function draw() {
  rectMode(CENTER);
  background(168,209,223);


  
  drawSprites();
  //box1.display();
  //	box2.display();
 //box3.display();
  crumpledpaper.display();
  
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(crumpledpaper.body, crumpledpaper.body.position, {
		x: 303,
		y: -333
	  });
	}
  
		
  
	   
	}



