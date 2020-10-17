const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;
var box1,box2;

function setup(){
  createCanvas(400,400)
  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(200,390,400,10,{isStatic:true});
  World.add(world,ground);
  box1 = new Box(200,200,50,70);
  box2 = new Box(230,100,70,60);
  
}
function draw(){
  background("brown");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  box1.display();
  box2.display();
}