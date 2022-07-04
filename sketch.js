const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    var options={
        restitution:0.3,
        friction:5,
        density:1
    }

    var options={
        'restitution':0.8,
        'friction':0.9,
        'density':12
    }
    
    var options={
        'restitution':0.8,
        'friction':3,
        'density':30
    }


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    
    
 
}