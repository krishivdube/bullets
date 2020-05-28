var fixedRect, movingRect;
var object1 , object2 , object3 , object4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(200,400,50,50)
  object2 = createSprite(400,400,50,50)
  object3 = createSprite(800,400,50,50)
  object4 = createSprite(1000,400,50,50)
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  movingRect.shapeColor = "green";
  object1.shapeColor = "green";
  object2.shapeColor = "green";
  object3.shapeColor = "green";
  object4.shapeColor = "green";
  fixedRect.shapeColor = "green";

if (isTouching(movingRect,object1)){
 movingRect.shapeColor = "red";
  object1.shapeColor = "red";
}
if (isTouching(movingRect,object2)){
  movingRect.shapeColor = "red";
   object2.shapeColor = "red";
 }
 if (isTouching(movingRect,object3)){
  movingRect.shapeColor = "red";
   object3.shapeColor = "red";
 }
 if (isTouching(movingRect,object4)){
  movingRect.shapeColor = "red";
   object4.shapeColor = "red";
 }
 if (isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
   fixedRect.shapeColor = "red";
 }
  //else {
 
//}
  drawSprites();
}
