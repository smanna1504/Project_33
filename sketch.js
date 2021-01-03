const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var topBord,rightBord,leftBord,bottomBord;
var ground;

var particle;
var plinkos= [];
var divisions= [];

var divisionHeight=300;
var divisionsVar;

var score=0;
var turns=5;

var gameState="play";

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  rightBord=createSprite(width-5, height/2, 10, height);
  rightBord.shapeColor="brown";
  topBord=createSprite(width/2,5,width,10);
  topBord.shapeColor="brown";
  leftBord=createSprite(5,height/2,10,height);
  leftBord.shapeColor='brown';
  bottomBord=createSprite(width/2,height-5,width,10);
bottomBord.shapeColor='brown';
console.log(width);
console.log(height);
ground=new Ground();

for (var j = 50; j <=width; j+=50) { plinkos.push(new Plinko(j,75)); }
 for (var j = 50/2; j <=width-10; j+=50) { plinkos.push(new Plinko(j,175)); } 
 for (var j = 75-25; j <=width; j+=50) { plinkos.push(new Plinko(j,275)); }
  for (var j = 50-25; j <=width-10; j+=50) { plinkos.push(new Plinko(j,375)); }
  for (var k = 0; k <=width; k += 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  }


function draw() {
  
  background(0);
  Engine.update(engine);
 textSize(20);
  fill('white');
 stroke('white');
 text("500",25,600-50);
 text("300",105,550);
 text("200",185,550);
 text("100",265,550);
 text("300",345,550);
 text("500",425,550);
 text("SCORE= "+score,250+50+20,30);
 text("TURNS LEFT="+turns,10,30);
  // ground.display(); 
  //plinkos.display();
  
  //mousePressed();
  console.log(gameState);
  drawSprites();
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }

 //console.log(mousePressed());
  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
particle.display();

if (particle.body.position.y>550)
{
if (particle.body.position.x >=0 && particle.body.position.x<=80 || particle.body.position.x>=401 && particle.body.position.x<=480) 
{
    score=score+500;      
    particle=null;
    if ( turns<= 0) {gameState ="end"};                          
}


else if (particle.body.position.x <=320 && particle.body.position.x >= 241 ) 
{
      score += 100;
      particle=null;
      if ( turns<= 0) {gameState ="end"};

}
else if (particle.body.position.x <= 240 && particle.body.position.x >= 161 )
{
      score = score + 200;
      particle=null;
      if ( turns<=0) { gameState ="end"};

}      

else if (particle.body.position.x <= 160 && particle.body.position.x >= 81 || particle.body.position.x<=400 && particle.body.position.x>=321 )
{
      score +=300;
      particle=null;
      if ( turns<=0) { gameState ="end"};

} 




}

}

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }




}


function mousePressed(){
  if (gameState!=="end") {
    turns-=1;
    particle=new Particle(mouseX,10,10,10);
    
  }
}



