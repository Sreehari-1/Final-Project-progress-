const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7
var ground


function setup(){
    var canvas = createCanvas(1350,640);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(680,620)
   obstacle1 = new Obstacle(100,560,25,150)
   obstacle2 = new Obstacle(500,400,250,15)
   obstacle3 = new Obstacle(500,300,250,15)
   obstacle4 = new Obstacle(200,500,25,150)
   obstacle5 = new Obstacle(700,600,250,15)
   obstacle6 = new Obstacle(300,600,25,150)
   obstacle7 = new Obstacle(900,700,250,150)
   

}

function draw(){
    background("lightBlue");
    textSize(18);
    fill("black")
    text(mouseX+","+mouseY, mouseX, mouseY)
    Engine.update(engine);
    
    
    obstacle1.display();
    obstacle2.display();
    obstacle3.display();
    obstacle4.display();
    obstacle5.display();
    obstacle6.display();
    obstacle7.display();
    ground.display();
}