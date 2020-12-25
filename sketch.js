const Body= Matter.Body
const Bodies= Matter.Bodies
const Engine= Matter.Engine
const World= Matter.World
const Constraint=Matter.Constraint
const Render=Matter.Render

var engine
var score=0
var dh=300
var particles=[]
var plinkos=[]
var division=[]

function setup() {
  createCanvas(480,800);
  engine=Engine.create()
  world=engine.world
  g1=new ground(240,795,480,10)
  g2=new divisions(240,795-15,480,20)
   p1= new particle(200,200)
   for(k=0;k<=width;k=k+80){
    division.push(new divisions(k,height-dh/2,10,dh))
  }
  for(k=40;k<=width;k=k+50){
    plinkos.push(new plinko(k,75))
  }
  for(k=40;k<=width;k=k+50){
    plinkos.push(new plinko(k,275))
  }
  for(k=15;k<=width;k=k+50){
    plinkos.push(new plinko(k,175))
  }
  for(k=15;k<=width;k=k+50){
    plinkos.push(new plinko(k,375))
  }
     var render = Render.create({ 
    element: document.body, engine: engine, 
    options: { width: 1300, height: 600, wireframes: false } });
   Render.run(render);

   
}

function draw() {
  background(0); 
  Engine.update(engine);
  drawSprites()
  g1.display()
  g2.display()
  p1.display()
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

 for (var i = 0; i < particles.length; i++) {
  
    particles[i].display();
  }
  for (var i = 0; i < division.length; i++) {
    
    division[i].display();
  }
}