const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var leftwall, rightwall
var ground
var link

var bridge
var bridge_con
var bridge_con1
var stones=[]

var bg_img
var axe_img
var food
var zombie_img
var zombie


function preload() {
bg_img = loadImage(".assets/background.png")
axe_img = loadImage(".assets/axe.png")
zombie_img = loadImage(".assets/zombie.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  //frameRate(80);

  zombie = createSprite(width/2, 500, 50, 50)
  zombie.addImage(zombie_img)


rightwall = new Base(width-240, height/2 + 50, 600, 100, "#8d6e63", true)
leftwall = new Base(240, height/2 + 50, 800, 100, "#8d6e63", true)
ground = new Base(0, height-10, width * 2, 20, "#795548", true)
bridge = new Bridge(20, {x: width/2 - 350, y: height/2})
bridge_con1 = new Link(bridge, leftwall)
bridge_con = new Link(bridge, rightwall)
for(i=0; i<=8;i++) {
  var x = random (width/2-200,width/2+300)
  var y = random (-10, 140)
  var stone = new Stone(x, y, 80, 80)
  stones.push(stone)
}

}

function draw() {
  background(51);
  Engine.update(engine);
  leftwall.display()
  rightwall.display()
  ground.display()
  bridge.display()
  for(var stone of stones ){
    stone.display()
  }

}
