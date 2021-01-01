const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var divisionHeight=300;
var divisions = [];
var plinkos = []
var particles = [];
var engine,world;
var score=0;
var gamseState =PLAY;
function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(240,700,460,10)
  for(var i=0;i<= width; i=i+80){
    divisions.push(new division(i,height-divisionHeight/2,10,divisionHeight))
  }
  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new plinko(j,75));
  }
  for(var j = 15; j <=width; j=j+50){
    plinkos.push(new plinko(j,175));
  }
  for(var j = 5; j <=width; j=j+50){
    plinkos.push(new plinko(j,275));
  }
  for(var j = 0; j <=width; j=j+50){
    plinkos.push(new plinko(j,375));
  }
}

function draw() {
  background("blue");
  textSize(20)
 text("Score : "+score,20,30);
 textSize(24);
 text("500",190,600)
 textSize(24);
 text("500",100,600)
 textSize(24);
 text("500",20,600)
 textSize(24);
 text("500",270,600)
 textSize(24);
 text("100",340,600)
 textSize(24);
 text("100",410,600)
 textSize(24);
 text("100",500,600)
 textSize(24);
 text("200",580,600)
 textSize(24);
 text("200",670,600)
 textSize(24);
 text("200",750,600)
  Engine.update(engine); 
  ground.display();
  if(frameCount%90===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10))
    }

  for(var j = 0; j < plinkos.length; j++){
    plinkos [j].display();
  }
  for(var j = 0; j < particles.length; j++){
    particles [j].display();
  }
  
  for(var k = 0; k < divisions.length; k++){
    divisions [k].display();
  }
  drawSprites();
}
