
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine =  Engine.create();
  world = engine.world;



  var ball_options= {

    restitution: 1.0
  } 

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  var ground_options= {

    isStatic: true
  }

  


  ground = Bodies.rectangle(200,300,400,10,ground_options);
  World.add(world,ground);
  
  console.log(ground);
  //console.log(object.position.x);
  //console.log(object.position.y);

}

function draw() {
  background("pink");  
  Engine.update(engine);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
 

  rect(ground.position.x,ground.position.y,400,10); 
  ellipse(ball.position.x,ball.position.y,20,20);

}