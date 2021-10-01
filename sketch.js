const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world,box
var ground

function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world;
  var boxOption = {
    isStatic:false,
    restitution:1,
    friction:1,
    density:0.5
  }
  box = Bodies.rectangle(300,100,30,30,boxOption)
  World.add(world,box)
  var groundOption={
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,200,20,groundOption)
  World.add(world,ground)

}

function draw() {
  background("orange"); 
  Engine.update(engine) 
  
  rectMode(CENTER)
  rect(box.position.x,box.position.y,30,30)
  rect(ground.position.x,ground.position.y,400,20)
}