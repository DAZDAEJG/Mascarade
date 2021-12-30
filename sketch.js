var main;
var chest,chest2,chest3,chest4,chestG;
var npc;
function setup() {
  createCanvas(1000,400);
  main=createSprite(400, 200, 50, 50);
  chest=createSprite(300, 300, 50, 30);
  chest2=createSprite(700, 350, 50, 30);
  chest3=createSprite(600, 250, 50, 30);
  chest4=createSprite(400, 200, 50, 30);
  chestG=createSprite(100, 400, 50, 30);

}

function draw() {
  background(255,255,255);  
  

  if(keyDown(UP_ARROW)){
   main.y = main.y -2;
  }
  if(keyDown(DOWN_ARROW)){
   main.y = main.y +2;
  }
  if(keyDown(LEFT_ARROW)){
   main.x = main.x -2;
  }
  if(keyDown(RIGHT_ARROW)){
   main.x = main.x +2;
  }
  if(keyDown('Z')){
    interact();
   }
   if(main.isTouching(chest2)||main.isTouching(chest3)||main.isTouching(chest)||main.isTouching(chest4)){
     text('press z',300,300)
   }


  drawSprites();
}
function interact(){
var x=Math.round(random(1,4));
  switch(x){
    case 1:var key=createSprite(650,300);

  }
}