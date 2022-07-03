
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball;
var radius= 40;
let engine;
let world;
let ground, left, right;

function setup() {
	createCanvas(1600, 800);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	//Create the Bodies Here.
	//Engine.run(engine);

	var ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}


	ball = Bodies.circle(260, 100, radius/2, ball_options);
    World.add(world, ball);
	ground = new Ground(width/2, 670, width, 20)
    left = new Ground(1100, 600, 20, 120)
	right= new Ground(1350, 600, 20, 120)
    Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  ellipse(ball.position.x, ball.position.y, radius, radius);
  Engine.update(engine);
  ground.display();
  left.display();
  right.display();
  drawSprites();

 
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
    Matter.Body.applyForce(ball, ball.position,{ x:85, y:-85});
	
	}

}




