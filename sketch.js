const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var backgroundImg;

function preload(){
backgroundImg = loadImage("background.png");

}

function setup(){
    var canvas = createCanvas(displayWidth - 20, displayHeight - 30);

    engine = Engine.create();
    world = engine.world;

    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
}