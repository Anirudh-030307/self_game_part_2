var canvas ; 
var play , tutorial , back ;
var bg1 , road , roadIMG ;

function preload() {
  roadIMG = loadImage('images/track.jpg');
}
function setup(){
  canvas = createCanvas(windowWidth-30,windowHeight-30);

  play = createSprite(600,500,60,20);
  tutorial = createSprite(500,500,60,20);

}


function draw(){
  background(255);

if (mousePressedOver(tutorial)) {
  bg1 = createSprite(660,300,windowWidth-30,windowHeight-30);
  fill("red");
  text("sprite",500,500);
  back = createSprite(600,400,60,20);
  back.shapeColor = "red";
}

if (mousePressedOver(back)) {
  bg1.visible = false;
  back.visible = false;
}

if (mousePressedOver(play)) {
  road = createSprite(700,500);
  road.addImage(roadIMG);
  tutorial.visible = false;
  play.visible = false;
}
  drawSprites();

}
