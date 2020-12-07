const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
const Constraint = Matter.Constraint;

var engine,world,ground;
var ball , chain  ;
var boxat900 = [] , boxat800 = [] , boxat700 = [];

function setup() {
  createCanvas(2000,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1000,680,2000,40);
  ball = new Ball(200,200,80);
  chain = new Chain(ball.body,{x:500 , y:50})
  
  for (let i = 0; i < 7; i++) {
    var box1 = new Box(900,100);
    boxat900.push(box1)
  }
  for (let i = 0; i < 7; i++) {
    var box2 = new Box(800,100);
    boxat800.push(box2)
  }
  for (let i = 0; i < 7; i++) {
    var box3 = new Box(700,100);
    boxat700.push(box3)
  }

}

function draw() {
  background('lightblue');
  Engine.update (engine);

  ground.display();
  ball.display();
  chain.display();

  for (let i = 0; i < 7; i++) {
    boxat900[i].display()
  }
  for (let i = 0; i < 7; i++) {
    boxat800[i].display()
  }
  for (let i = 0; i < 7; i++) {
    boxat700[i].display()
  }
  
}

function mouseDragged (){
  Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}