var fr,mr;

function setup() {
  createCanvas(1200,800);
  fr=createSprite(400, 200, 50, 100);
  mr=createSprite(200,200,100,50);
  fr.shapeColor="green";
  mr.shapeColor="green";
}

function draw() {
  background(0);  
  mr.x=World.mouseX;
  mr.y=World.mouseY;
  //console.log(mr.x-fr.x);

  if(mr.x - fr.x < fr.width/2 + mr.width/2 && 
    fr.x - mr.x < fr.width/2 + mr.width/2){
    mr.shapeColor="red";
    fr.shapeColor="red";
  }

  else{
    fr.shapeColor="green";
    mr.shapeColor="green";

  }
  drawSprites();
}