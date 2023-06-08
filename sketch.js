const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var ball

function preload() {

}

function setup() {
	createCanvas(800, 700);

	ball = Bodies.circle(560, 100, 10, ball_options)
	World.add(world, ball)

	var ball_options={
		restitution :0.5,
		isStatic : false,
		friction :0,
		densuty : 1.2


	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 600, 800, 15)
	line1 = new Ground(560, 552, 20, 80)
	line2 = new Ground(640, 552, 20, 80)



	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);

	ellipseMode(RADIUS)
	ellipse(ball.position.x,ball.position.y,20)
	background(0);
	ground.display()
	line1.display()
	line2.display()
	drawSprites();

}