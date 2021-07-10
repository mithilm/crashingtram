const Engine = Matter.Engine;
const World = Matter.World;
 const Bodies = Matter.Bodies; 
 const Constraint = Matter.Constraint;

 function setup(){

    createCanvas(1200,800);
    engine=Engine.create()

    world=engine.world;  

    ground=new Ground(600,700,1200,10);
    box1 = new Box(700,600,100,100);
    box2 = new Box(700,500,100,100)
    box3 = new Box(700,400,100,100)
    box4 = new Box(700,300,100,100)
    box5 = new Box(700,200,100,100)
    box6 = new Box(700,100,100,100)

     ball = new Ball(500,400,80,80)

     rope = new Rope(ball.body,{x:500,y:20})
 }

 function draw(){
     background("black")
     Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    ball.display();
    rope.display(); 


 }

 function mouseDragged(){
     Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})
 }