var rect1,rect2;



function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 50, 50);
  rect1.shapeColor="blue";
  rect1.velocityY=3;
  rect2=createSprite(400, 100, 50, 40);
  rect2.shapeColor="red";
  rect2.velocityY=-3;
}

function draw() {
  background("green");  

  //rect1.x=mouseX;
  //rect1.y=mouseY;


    if(rect1.x-rect2.x < rect1.width/2+rect2.width/2&&
      rect2.x-rect1.x < rect1.width/2+rect2.width/2&&
      rect1.y-rect2.y < rect1.height/2+rect2.height/2&&
      rect2.y-rect1.y < rect1.height/2+rect2.height/2){

       rect2.shapeColor="yellow"; 
      }else {
        rect2.shapeColor="red";
        }
if(rect1.x-rect2.x < rect1.width/2+rect2.width/2&&
  rect2.x-rect1.x < rect1.width/2+rect2.width/2){

    rect1.velocityX=rect1.velocityX*-1;
    rect2.velocityX=rect2.velocityX*-1;
  }
if(rect1.y-rect2.y < rect1.height/2+rect2.height/2&&
  rect2.y-rect1.y < rect1.height/2+rect2.height/2){

    rect1.velocityY=rect1.velocityY*-1;
    rect2.velocityY=rect2.velocityY*-1;

  }

  drawSprites();
}