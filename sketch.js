const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
var ball,ground,box
var engine,world
function setup() {

  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box = new Box();
  var balloptions ={
    restitution: 0.7,
    isStatic:false
  }
  ball = Bodies.circle(400,20,20,balloptions);
  World.add(world,ball);

  var options = {
  	isStatic: true
  }

  ground = Bodies.rectangle(400,370,800,20,options);
  World.add(world, ground);

  
}
function draw() {
  background("black"); 
  Engine.update(engine);
  box.display();
    fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  fill("lightgreen");
  ellipse(ball.position.x,ball.position.y,20,20);
 
}